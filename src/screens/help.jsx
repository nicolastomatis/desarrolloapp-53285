import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const HelpScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Ayuda</Text>
    </View>
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

export default HelpScreen;
