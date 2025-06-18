import pandas as pd
import matplotlib.pyplot as plt

fs = 200  # Hz
ts = 1/fs  # Sampling frequency in seconds

# Load the data from a CSV file
data = pd.read_csv('sample_data/sample.csv', delimiter='\t')

# Generate time axis based on number of rows and sampling time
time = data.index*ts

def plot_r5_and_volumn():
    fig, ax1 = plt.subplots()
    color_r5 = 'tab:blue'
    color_vol = 'tab:red'

    # Plot R5 on left y-axis
    ax1.set_xlabel('Time (t)')
    ax1.set_ylabel('R5 (Ohms)', color=color_r5)
    ax1.plot(time, data['R5'], color=color_r5, label='R5')
    ax1.tick_params(axis='y', labelcolor=color_r5)

    # Plot Volumn on right y-axis
    ax2 = ax1.twinx()
    ax2.set_ylabel('Volumn', color=color_vol)
    ax2.plot(time, data['Volumn'], color=color_Vol, label='Volumn')
    ax2.tick_params(axis='y', labelcolor=color_vol)

    plt.title('R5 and Volumn vs Time')
    fig.tight_layout()  # Adjust layout to prevent overlap
    plt.grid()
    plt.show()
plot_r5_and_volumn()