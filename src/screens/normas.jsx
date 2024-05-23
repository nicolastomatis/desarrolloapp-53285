// src/components/Normas.jsx
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, FlatList, Button } from 'react-native';
import { fetchData } from '../firebase/firebaseService';
import DetalleObraSocial from './detalleNorma';

const Normas = () => {
  const [data, setData] = useState([]);
  const [selectedObraSocial, setSelectedObraSocial] = useState(null);

  useEffect(() => {
    fetchData(setData);
  }, []);

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Button title={item.Siglas} onPress={() => setSelectedObraSocial(item)} />
    </View>
  );

  if (selectedObraSocial) {
    return <DetalleObraSocial obraSocial={selectedObraSocial} onBack={() => setSelectedObraSocial(null)} />;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Normas de Obras Sociales</Text>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        ListEmptyComponent={<Text>No hay datos disponibles.</Text>}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 50,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 10,
    width: '90%',
  },
});

export default Normas;
