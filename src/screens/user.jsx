import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase/realtimeDataBase';
import { useNavigation, useRoute } from '@react-navigation/native';

const User = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const [avatarSource, setAvatarSource] = useState(require('../../assets/user.png'));

  useEffect(() => {
    if (route.params?.newAvatar) {
      setAvatarSource(route.params.newAvatar);
    }
  }, [route.params?.newAvatar]);

  const handleEditProfile = () => {
    navigation.navigate('EditUser');
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigation.navigate('Login');
    } catch (error) {
      console.error('Error al cerrar sesión:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Image source={avatarSource} style={styles.profileImage} />
      <TouchableOpacity style={styles.button} onPress={handleEditProfile}>
        <Text style={styles.buttonText}>Editar Perfil</Text>
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
    marginBottom: 20,
  },
  button: {
    width: '100%',
    height: 50,
    backgroundColor: '#9694FF',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginBottom: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
});

export default User;
