import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, ActivityIndicator } from 'react-native';

const AttendanceHistory = () => {
  const [attendanceData, setAttendanceData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const accessToken = '3|IZCojMOPJbcCdNWAfWmwj7l4ZVKyBRj2fRGi9mF5d4b6a3c0';
    const apiUrl = 'http://warung-31.my.id/api/v1/attendance/list';

    fetch(apiUrl, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
      .then(response => response.json())
      .then(data => {
        setAttendanceData(data.data);
        setLoading(false);
      })
      .catch(error => {
        console.error(error);
        setLoading(false);
      });
  }, []);

  const renderItem = ({ item }) => {
    return (

      <View style={styles.itemContainer}>

        {item.map((data, index) => (

          <View key={index}>

            <Text style={styles.itemText}>{data.user}</Text>

            <Text style={styles.itemText}>{data.date}</Text>

            <Text style={styles.itemText}>Clock In: {data.clock_in}</Text>

            <Text style={styles.itemText}>Clock Out: {data.clock_out}</Text>

          </View>

        ))}

      </View>

    );

  };

  return (
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <FlatList
          data={attendanceData}
          renderItem={renderItem}
          keyExtractor={item => item.id} // Make sure to convert ID to string for keyExtractor
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  itemContainer: {
    padding: 15,
    marginBottom: 10,
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  itemText: {
    fontSize: 16,
    marginBottom: 5,
  },
});

export default AttendanceHistory;
