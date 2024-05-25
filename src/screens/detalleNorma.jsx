import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const DetalleScreen = ({ route }) => {
  const { item } = route.params; 

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={styles.text}>Nombre: {item.Nombre}</Text>
      <Text style={styles.text}>Siglas: {item.Siglas}</Text>
      <Text style={styles.text}>Copago: {item.Copago ? 'Sí' : 'No'}</Text>
      <Text style={styles.text}>APB: {item.APB}</Text>
      <Text style={styles.text}>Planes: {item.Planes}</Text>
      <Text style={styles.text}>Ingreso por AOL: {item.IngresoAOL ? 'Sí' : 'No'}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  text: {
    fontSize: 18,
    marginBottom: 8,
  },
});

export default DetalleScreen;


