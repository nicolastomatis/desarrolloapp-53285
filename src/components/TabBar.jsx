import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SafeAreaView, StyleSheet, View, Image } from 'react-native';

import Menu from '../components/menu';

import Inicio from '../screens/inicio';
import Normas from '../screens/normas';
import User from '../screens/usuario';

const globalHeaderStyles = {
  headerStyle: {
    backgroundColor: '#9694FF', // Color de fondo del encabezado
  },
  headerTintColor: '#FFFFFF', // Color del texto en el encabezado
};

const Tab = createBottomTabNavigator();

const TabBar = () => {
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <View style={styles.container}>
        <Tab.Navigator
          tabBar={(props) => <Menu {...props} />}
          screenOptions={{
            tabBarStyle: {
              backgroundColor: '#9694FF', // Color de fondo personalizado para el Tab.Navigator
            },
            tabBarShowLabel: false, // Oculta las etiquetas de las pestañas
            tabBarShowIcon: true, // Muestra los iconos de las pestañas
            tabBarActiveTintColor: '#007AFF', // Color del icono de la pestaña activa
            ...globalHeaderStyles, // Aplica los estilos globales del encabezado
          }}
        >
          <Tab.Screen
            name="Inicio"
            component={Inicio}
            options={{
              tabBarIcon: ({ color, size }) => (
                <Image source={require('../../assets/inicio.png')} style={{ width: size, height: size, tintColor: color }} />
              ),
            }}
          />
          <Tab.Screen
            name="Normas"
            component={Normas}
            options={{
              tabBarIcon: ({ color, size }) => (
                <Image source={require('../../assets/normas.png')} style={{ width: size, height: size, tintColor: color }} />
              ),
            }}
          />
          <Tab.Screen
            name="Usuario"
            component={User}
            options={{
              tabBarIcon: ({ color, size }) => (
                <Image source={require('../../assets/user.png')} style={{ width: size, height: size, tintColor: color }} />
              ),
            }}
          />
        </Tab.Navigator>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    backgroundColor: '#9694FF', // Color de fondo personalizado para el SafeAreaView
  },
  container: {
    flex: 1,
    backgroundColor: '#9694FF', // Color de fondo personalizado para el contenedor del Tab.Navigator
  },
});

export default TabBar;
