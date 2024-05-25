import React from 'react';

import { View, Text, StyleSheet } from 'react-native'; // Asegúrate de importar ActivityIndicator


const NotificationsScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Pantalla de notificaciones, si bien no es necesario para la entrega es algo que a futuro debo resolver debido a que me lo solicitan en mi trabajo</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#DAD9FF',
    padding: 50, // Ajusta el valor según tus necesidades

  },
  buttonsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  boton: {
    width: 100,
    height: 100,
    backgroundColor: '#9694FF',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
  },
  text : {
    textAlign: 'justify',

  }
});


export default NotificationsScreen;
