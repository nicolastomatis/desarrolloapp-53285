import React, { useEffect, useState } from 'react';
import { View, ScrollView, TouchableOpacity, Text, StyleSheet } from 'react-native';
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
        <Text>{item.Siglas}</Text>
      </TouchableOpacity>
    ));
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.buttonsContainer}>
        {renderBotones()}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#DAD9FF',
  },
  buttonsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    backgroundColor: '#DAD9FF',
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
});

export default InicioScreen;
