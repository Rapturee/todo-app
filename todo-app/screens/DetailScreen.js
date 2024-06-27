import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function DetailScreen({ route, navigation }) {
  const { item, markAsDone, deleteTodo } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.description}>{item.description}</Text>
      <Button title="Klar" onPress={() => {
        markAsDone(item.id);
        navigation.goBack();
      }} />
      <Button title="Delete" onPress={() => {
        deleteTodo(item.id);
        navigation.goBack();
      }} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  description: {
    fontSize: 18,
    marginBottom: 20,
  },
});
