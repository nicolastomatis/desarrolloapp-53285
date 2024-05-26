import React, { useEffect, useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { fetchData } from '../firebase/firebaseService';
import { useNavigation } from '@react-navigation/native';

const InicioScreen = () => {
  const [dataFromDatabase, setDataFromDatabase] = useState([]);
  const [allData, setAllData] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    fetchData((data) => {
      const limitedData = data.slice(0, 5);
      setDataFromDatabase([...limitedData, { id: 'all', Siglas: 'Ver Todas' }]);
      setAllData(data);
    });
  }, []);

  const handlePress = (item) => {
    if (item.id === 'all') {
      navigation.navigate('Norms', { allData });
    } else {
      navigation.navigate('DetalleScreen', { item });
    }
  };

  const renderBotones = () => {
    return dataFromDatabase.map((item, index) => (
      <TouchableOpacity key={index} style={styles.boton} onPress={() => handlePress(item)}>
        <Text style={styles.buttonText}>{item.Siglas}</Text>
      </TouchableOpacity>
    ));
  };

  return (
    <View style={styles.container}>
      <View style={styles.topButtonsContainer}>
        <TouchableOpacity style={styles.topButton} onPress={() => navigation.navigate('cierreFacturacion')}>
          <Text style={styles.buttonText}>Cierre de facturación</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.topButton} onPress={() => navigation.navigate('envioBolsas')}>
          <Text style={styles.buttonText}>Envío de bolsas</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.buttonsContainer}>
        {renderBotones()}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#DAD9FF',
  },
  topButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 100,
    width: '100%',
  },
  topButton: {
    width: '40%',
    height: 150,
    backgroundColor: '#9694FF',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.4,
    shadowRadius: 4,
    elevation: 5,
  },
  buttonsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    backgroundColor: '#DAD9FF',
    maxHeight: '80%',
    width: '100%',
    marginBottom: 20,
  },
  boton: {
    width: 100,
    height: 100,
    backgroundColor: '#9694FF',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  buttonText: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center',
  },
});

export default InicioScreen;
