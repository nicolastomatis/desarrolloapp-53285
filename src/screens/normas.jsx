import React, { useState } from 'react';
import { View, ScrollView, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';

const NormsScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const { allData } = route.params || {};
  const [searchTerm, setSearchTerm] = useState('');
  
  const filteredData = allData.filter(item => {
    return item.Siglas.toLowerCase().includes(searchTerm.toLowerCase());
  });
  
  const handlePress = (item) => {
    navigation.navigate('DetalleScreen', { item });
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchInput}
        placeholder="Buscar..."
        value={searchTerm}
        onChangeText={setSearchTerm}
      />
      <ScrollView contentContainerStyle={styles.buttonsContainer}>
        {filteredData.map((item, index) => (
          <TouchableOpacity key={index} style={styles.boton} onPress={() => handlePress(item)}>
            <Text style={styles.buttonText}>{item.Siglas}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#DAD9FF',
  },
  searchInput: {
    height: 40,
    margin: 20,
    padding: 10,
    borderWidth: 1,
    borderColor: '#9694FF',
    borderRadius: 10,
    backgroundColor: '#FFF',
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

export default NormsScreen;
