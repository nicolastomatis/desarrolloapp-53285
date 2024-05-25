import React from 'react';
import { View, ScrollView, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';

const NormsScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const { allData } = route.params || {}; 
  
  if (!allData || allData.length === 0) {
    return (
      <View style={styles.container}>
        <Text>No hay datos disponibles.</Text>
      </View>
    );
  }

  const handlePress = (item) => {
    navigation.navigate('DetalleScreen', { item });

  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.buttonsContainer}>
        {allData.map((item, index) => (
          <TouchableOpacity key={index} style={styles.boton} onPress={() => handlePress(item)}>
            <Text>{item.Siglas}</Text>
          </TouchableOpacity>
        ))}
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

export default NormsScreen;
