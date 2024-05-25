import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import * as ImagePicker from 'expo-image-picker';

const EditUser = () => {
  const navigation = useNavigation();
  const [avatarSource, setAvatarSource] = useState(null);

  const handleChoosePhoto = async () => {
    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (permissionResult.granted === false) {
      alert('Se necesitan permisos para acceder a la galería de imágenes.');
      return;
    }

    const pickerResult = await ImagePicker.launchImageLibraryAsync();
    if (pickerResult.cancelled === true) {
      return;
    }

    setAvatarSource({ uri: pickerResult.uri });
  };

  const handleTakeSelfie = async () => {
    const permissionResult = await ImagePicker.requestCameraPermissionsAsync();
    if (permissionResult.granted === false) {
      alert('Se necesitan permisos para acceder a la cámara.');
      return;
    }

    const pickerResult = await ImagePicker.launchCameraAsync();
    if (pickerResult.cancelled === true) {
      return;
    }

    setAvatarSource({ uri: pickerResult.uri });
  };

  const handleConfirmChanges = () => {
    console.log('Nueva imagen seleccionada:', avatarSource); 
    navigation.navigate('User'); 
  };
  

  return (
    <View style={styles.container}>
      {avatarSource && <Image source={avatarSource} style={styles.profileImage} />}
      <TouchableOpacity style={styles.button} onPress={handleChoosePhoto}>
        <Text style={styles.buttonText}>Seleccionar de la galería</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={handleTakeSelfie}>
        <Text style={styles.buttonText}>Tomar una selfie</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.confirmButton} onPress={handleConfirmChanges}>
        <Text style={styles.buttonText}>Confirmar cambios</Text>
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
  confirmButton: {
    width: '100%',
    height: 50,
    backgroundColor: '#52c41a',
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

export default EditUser;
