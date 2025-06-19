
import pandas as pd
import numpy as np 

class Breath_Fil:
    def __init__(self, flow_column="Flow_Filtered"):
        """
        Initialize the BreathFilter class.

        Parameters:
        flow_column (str): The column name in the DataFrame that contains the filtered flow signal.
        """
        self.flow_column = flow_column

    def fil_breaths(self, df: pd.DataFrame):
        """
        Segment the flow signal into individual breaths based on zero-crossing transitions.

        Parameters:
        df (pd.DataFrame): Input DataFrame containing at least the flow column and an index (e.g., breath sample number).

        Returns:
        list of dicts: Each dictionary represents one full breath (inspiration + expiration), 
                       with start and end indices based on the original DataFrame index.
        """

        # Extract the flow signal and original index values
        flow = df[self.flow_column].fillna(0).values       # Replace NaN with 0 and convert to NumPy array
        index = df.index.to_numpy()                        # Preserve the original sample index (e.g., from "#" column)

        # Get the sign of the flow signal (+1 for inspiration, -1 for expiration, 0 for no flow)
        sign = np.sign(flow)

        # Detect transitions in flow direction: 
        #   -2 means a transition from +1 to -1 → end of inspiration
        #   +2 means a transition from -1 to +1 → end of expiration
        transition = np.diff(sign)

        # Get the indices where inspiration and expiration phases end
        insp_end_list = np.where(transition == -2)[0]      # Points where flow changes from positive to negative
        exp_end_list = np.where(transition == 2)[0]        # Points where flow changes from negative to positive

        i = j = 0
        breaths = []

        # Iterate over matched pairs of inspiration and expiration
        while i < len(insp_end_list) and j < len(exp_end_list):
            # Only proceed if the inspiration ends before the expiration
            if insp_end_list[i] < exp_end_list[j]:
                # Get the start of the inspiration:
                #   If i > 0, start from the previous inspiration end; otherwise, start at 0
                insp_start = insp_end_list[i - 1] if i > 0 else 0
                insp_end = insp_end_list[i]

                # Expiration starts immediately after inspiration ends
                exp_start = insp_end
                exp_end = exp_end_list[j]

                # Append the breath segment using original index values
                breaths.append({
                    "inspiration_start": int(index[insp_start]),
                    "inspiration_end": int(index[insp_end]),
                    "expiration_start": int(index[exp_start]),
                    "expiration_end": int(index[exp_end]),                
                })

                # Move to the next breath cycle
                i += 1
                j += 1
            else:
                # If expiration comes before inspiration ends, skip this expiration
                j += 1

        return breaths
