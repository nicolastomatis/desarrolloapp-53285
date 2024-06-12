import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Image, Alert } from 'react-native';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase/realtimeDataBase';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as ImagePicker from 'expo-image-picker';
import { Camera } from 'expo-camera';
import userImg from '../../assets/userImg.jpg';

const getUserFromStorage = async () => {
  try {
    const storedUser = await AsyncStorage.getItem('user');
    if (storedUser !== null && storedUser !== undefined) {
      const parsedUser = JSON.parse(storedUser);
      if (typeof parsedUser === 'object' && Object.keys(parsedUser).length > 0) {
        return parsedUser;
      } else {
        return { avatar: userImg };
      }
    } else {
      return { avatar: userImg };
    }
  } catch (error) {
    return { avatar: userImg };
  }
};

const saveUserToStorage = async (user) => {
  try {
    await AsyncStorage.setItem('user', JSON.stringify(user));
  } catch (error) {
    console.error('Error al guardar el usuario en el almacenamiento:', error);
  }
};

const User = ({ navigation }) => {
  const [user, setUser] = useState({ avatar: userImg });
  
  useEffect(() => {
    getUserFromStorage().then(setUser);
  }, []);

  useEffect(() => {
    saveUserToStorage(user);
  }, [user]);

  const pickImageFromGallery = async () => {
    console.log('Intentando seleccionar una imagen de la galería');
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert('Permisos insuficientes', 'Se necesita permiso para acceder a la galería de imágenes');
      return;
    }

    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      const imageUri = result.assets[0].uri;
      console.log('Imagen seleccionada de la galería:', imageUri);
      setUser((prevUser) => ({ ...prevUser, avatar: imageUri }));
    }
  };

  const takeSelfie = async () => {
    const { status } = await Camera.requestCameraPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert('Permisos insuficientes', 'Se necesita permiso para acceder a la cámara');
      return;
    }

    let result = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      const imageUri = result.assets[0].uri;
      setUser((prevUser) => ({ ...prevUser, avatar: imageUri }));
    } 
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
      {user && user.avatar && (
        <Image source={{ uri: user.avatar }} style={styles.profileImage} />
      )}

      <TouchableOpacity style={styles.button} onPress={pickImageFromGallery}>
        <Text style={styles.buttonText}>Cambiar imagen desde galería</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={takeSelfie}>
        <Text style={styles.buttonText}>Cambiar imagen con selfie</Text>
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
    width: 300,
    height: 300,
    borderRadius: 150,
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
