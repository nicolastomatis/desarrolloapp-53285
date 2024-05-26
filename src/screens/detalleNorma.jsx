import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const DetalleScreen = ({ route }) => {
  const { item } = route.params; 

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.label}>Nombre:</Text>
        <Text style={styles.value}>{item.Nombre}</Text>
      </View>
      <View style={styles.card}>
        <Text style={styles.label}>Siglas:</Text>
        <Text style={styles.value}>{item.Siglas}</Text>
      </View>
      <View style={styles.card}>
        <Text style={styles.label}>Copago:</Text>
        <Text style={styles.value}>{item.Copago ? 'Sí' : 'No'}</Text>
      </View>
      <View style={styles.card}>
        <Text style={styles.label}>APB:</Text>
        <Text style={styles.value}>{item.APB}</Text>
      </View>
      <View style={styles.card}>
        <Text style={styles.label}>Planes:</Text>
        <Text style={styles.value}>{item.Planes}</Text>
      </View>
      <View style={styles.card}>
        <Text style={styles.label}>Ingreso por AOL:</Text>
        <Text style={styles.value}>{item.IngresoAOL ? 'Sí' : 'No'}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#DAD9FF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    width: '90%',
    backgroundColor: '#9694FF',
    borderRadius: 10,
    padding: 16,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.4,
    shadowRadius: 4,
    elevation: 5,
  },
  label: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 4,
    color: 'white',
  },
  value: {
    fontSize: 18,
    color: 'white',
  },
});

export default DetalleScreen;
