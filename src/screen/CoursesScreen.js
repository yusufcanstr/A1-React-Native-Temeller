import { FlatList, StyleSheet, Text, View } from 'react-native';
import React from 'react';

export default function CoursesScreen() {
  const courses = [
    {name: 'Angular', id: 1},
    {name: 'React Js', id: 2},
    {name: 'C#', id: 3},
    {name: 'C Programlama', id: 4},
    {name: 'Bootstarap', id: 5},    
  ];
  return (
    <FlatList
    data={courses}
    keyExtractor={(item) => item.id}
    renderItem={({ item }) => {
      return <Text style={styles.container}>{item.name}</Text>
    }}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    fontSize: 27,
    fontStyle: 'italic',
    backgroundColor: 'yellow',
    backgroundColor: '#fff',
    marginVertical: 10,
    padding: 30,
  },
})