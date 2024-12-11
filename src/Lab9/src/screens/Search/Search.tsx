import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function SearchScreen({ navigation }: any) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pantalla de Búsqueda</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Details', { id: 2 })}
      >
        <Text style={styles.buttonText}>Ver Detalle del Destino</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
