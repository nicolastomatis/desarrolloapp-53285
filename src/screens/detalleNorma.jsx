import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const DetalleObraSocial = ({ obraSocial, onBack }) => {
  const { Nombre, id, Copago, APB, Planes, IngresoPorAOL } = obraSocial;

  return (
    <View style={styles.container}>
        <Text style={styles.title}>{Nombre}</Text>
        <Text>Mutual: {id}</Text>
        <Text>Ingreso por AOL: {IngresoPorAOL ? 'Sí' : 'No'}</Text>
        <Text>Planes: {Array.isArray(Planes) ? Planes.join(', ') : Planes}</Text>
        <Text>Copago: {Copago ? 'Sí' : 'No'}</Text>
        <Text>APB: $ {APB}</Text>
        <Button title="Volver" onPress={onBack} />
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default DetalleObraSocial;