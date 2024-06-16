import React from 'react';
import { View, Text, StyleSheet, Button, Alert } from 'react-native';
import axios from 'axios';

export default function Tab() {
  const accessToken = '3|IZCojMOPJbcCdNWAfWmwj7l4ZVKyBRj2fRGi9mF5d4b6a3c0'; // Token manual

  const getCurrentDateTime = () => {
    const now = new Date();
    const date = now.toISOString().split('T')[0];
    const time = now.toTimeString().split(' ')[0].substring(0, 5);
    return { date, time };
  };

  const handleClockIn = async () => {
    const { date, time } = getCurrentDateTime();
    try {
      const response = await axios.post(
        'http://warung-31.my.id/api/v1/attendance/clock-in',
        {
          date: date,
          clock_in: time,
        },
        {
          headers: {
            Authorization: `Bearer ${accessToken}`, // Gunakan token manual di sini
          },
        }
      );
      Alert.alert('Clock In Successful');
    } catch (error) {
      Alert.alert('Clock In Failed', `Error: ${error.message}`);
    }
  };

  const handleClockOut = async () => {
    const { date, time } = getCurrentDateTime();
    try {
      const response = await axios.post(
        'http://warung-31.my.id/api/v1/attendance/clock-out',
        {
          date: date,
          clock_out: time,
        },
        {
          headers: {
            Authorization: `Bearer ${accessToken}`, // Gunakan token manual di sini
          },
        }
      );
      Alert.alert('Clock Out Successful');
    } catch (error) {
      Alert.alert('Clock Out Failed', `Error: ${error.message}`);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Attendance</Text>
      <View style={styles.buttonContainer}>
        <Button title="Clock In" onPress={handleClockIn} color="#4CAF50" />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Clock Out" onPress={handleClockOut} color="#f44336" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  header: {
    fontSize: 24,
    marginBottom: 20,
  },
  buttonContainer: {
    marginVertical: 10,
    width: '80%',
    borderRadius: 5,
    overflow: 'hidden',
  },
});
