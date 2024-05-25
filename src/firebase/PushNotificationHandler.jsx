import messaging from '@react-native-firebase/messaging';
import { useEffect } from 'react';
import { Alert } from 'react-native';

const registerForPushNotifications = async () => {
  try {
    await messaging().registerDeviceForRemoteMessages();

    const token = await messaging().getToken();
    console.log('Token de registro del dispositivo:', token);
    
    messaging().onMessage(async (remoteMessage) => {
      Alert.alert('Nueva notificación', remoteMessage.notification.body);
    });

    messaging().setBackgroundMessageHandler(async (remoteMessage) => {
      console.log('Notificación push en segundo plano:', remoteMessage);
    });
  } catch (error) {
    console.error('Error al registrar para notificaciones push:', error);
  }
};

const PushNotificationHandler = () => {
  useEffect(() => {
    registerForPushNotifications();

    return () => {};
  }, []);

  return null;
};

export default PushNotificationHandler;
