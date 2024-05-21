import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Inicio = () => {
  return (
    <View style={styles.container}>
      <Text>Esta es la pantalla de Inicio</Text>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#DAD9FF', // Color de fondo para la pantalla de inicio
      justifyContent: 'center',
      alignItems: 'center',
    },
  });

export default Inicio;
