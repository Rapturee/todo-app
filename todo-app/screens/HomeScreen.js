import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

export default function HomeScreen({ navigation }) {
  const [todos, setTodos] = useState([
    { id: '1', title: 'Städa', description: 'Städa beskrivning', done: false },
    { id: '2', title: 'Diska', description: 'Diska beskrivning', done: false }
  ]);

  const addTodo = (title, description) => {
    const newTodo = { id: Date.now().toString(), title, description, done: false };
    setTodos([...todos, newTodo]);
  };

  const markAsDone = (id) => {
    setTodos(todos.map(todo => todo.id === id ? { ...todo, done: true } : todo));
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={todos}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.item}
            onPress={() => navigation.navigate('Detail', { item, markAsDone, deleteTodo })}
          >
            <Text style={styles.title}>{item.title}</Text>
            <Text>{item.done ? 'Genomfört' : 'Ej genomfört'}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={item => item.id}
      />
      <TouchableOpacity
        style={styles.addButton}
        onPress={() => navigation.navigate('Add', { addTodo })}
      >
        <Text style={styles.buttonText}>Add</Text>
      </TouchableOpacity>
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
  item: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    backgroundColor: '#fff',
    borderRadius: 10,
    marginVertical: 5,
    width: '100%',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  addButton: {
    backgroundColor: '#6200ee',
    padding: 15,
    borderRadius: 10,
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
  },
});
