
import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/MaterialIcons';


import RegistroUser from '../screens/registroUser';
import InicioScreen from '../screens/inicio';
import UserScreen from '../screens/user';
import NotificationsScreen from '../screens/notifications';
import HelpScreen from '../screens/help';
import NormsScreen from '../screens/normas';
import DetalleScreen from '../screens/detalleNorma';
import EditUser from '../screens/editUser';

import HeaderMenu from '../components/headerMenu';

const Stack = createStackNavigator();

const MainStackNavigator = () => {
  return (
    <View style={{ flex: 1 }}> 
    <Stack.Navigator initialRouteName="Inicio"
      screenOptions={{
        headerStyle: {
          backgroundColor: '#9694FF',
          height: 140
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
    >
      <Stack.Screen
        name="Inicio"
        component={InicioScreen}
        options={({ navigation }) => ({
          headerStyle: { backgroundColor: '#9694FF', height: 140 },
          headerTintColor: '#fff',
          headerTitleStyle: { fontWeight: 'bold' },
          headerLeft: () => (
            <View style={styles.headerLeftContainer}>
              <TouchableOpacity onPress={() => navigation.navigate('User')}>
                <Icon name="person" size={30} color="white" />
              </TouchableOpacity>
            </View>
          ),
          headerRight: () => <HeaderMenu navigation={navigation} />,
        })}
      />
      <Stack.Screen name="RegistroUser"
      options={{
        headerTitle: 'Registro de Usuario', 
      }}
      component={RegistroUser} />
      <Stack.Screen name="User"
      options={{
          headerTitle: 'Perfil de Usuario', 
        }}
      component={UserScreen} />
      <Stack.Screen name="Notifications"
      options={{
        headerTitle: 'Notificaciones',
      }}
      component={NotificationsScreen} />
      <Stack.Screen name="Help"
      options={{
        headerTitle: 'Ayuda', 
      }}
      component={HelpScreen} />
      <Stack.Screen
        name="Norms"
        component={NormsScreen}
        options={{
          headerTitle: 'Normas de Obras Sociales', 
        }}
      />
      
      <Stack.Screen 
  name="DetalleScreen"
  component={DetalleScreen}
  options={({ route }) => ({
    headerTitle: route.params?.item.Siglas ?? 'Detalle Screen',
   
  })}
/>
      
      <Stack.Screen name="EditUser"
        options={{
          headerTitle: '', 
        }} component={EditUser} />
    </Stack.Navigator>
  </View>
  );
};

const styles = StyleSheet.create({
  headerLeftContainer: {
    marginLeft: 30,
  },
});

export default MainStackNavigator;
