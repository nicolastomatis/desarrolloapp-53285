import React, { useContext } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { AuthContext } from '../context/AuthContext';

const User = () => {
  const { logout } = useContext(AuthContext);

  const handleLogout = () => {
    logout();
  };

  return (
    <View style={styles.container}>
      <Image source={require('../../assets/user.png')} style={styles.profileImage} />
      <TouchableOpacity style={styles.button} onPress={() => { /* Acción de edición de perfil */ }}>
        <Text style={styles.buttonText}>Edición de Perfil</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => { /* Acción de contacto */ }}>
        <Text style={styles.buttonText}>Contacto</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => { /* Acción de ayuda */ }}>
        <Text style={styles.buttonText}>Ayuda</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={handleLogout}>
        <Text style={styles.buttonText}>Cerrar Sesión</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#DAD9FF',
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 40,
  },
  button: {
    width: '100%',
    height: 50,
    backgroundColor: '#9694FF',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginBottom: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
});

export default User;
