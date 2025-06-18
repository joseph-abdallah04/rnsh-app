import pandas as pd
import matplotlib.pyplot as plt

fs = 200  # Hz
ts = 1/Frequency  # Sampling frequency in seconds

# Load the data from a CSV file
data = pd.read_csv('sample_data/sample.csv', delimiter='\t')

# Generate time axis based on number of rows and sampling time
time = data.index*ts

def plot_impedance(data):
    fig, ax = plt.subplots()
    ax.plot(data['Time'], data['R5'])
    ax.set_xlabel('Time (t)')
    ax.set_ylabel('Resistance (Ohms)')
    ax.set_title('Impedance vs Time')
    plt.grid()
    plt.show()