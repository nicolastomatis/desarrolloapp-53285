import React from 'react';
import { View, Text, TouchableOpacity, Alert, StyleSheet } from 'react-native';

const HelpScreen = () => {
  const showExplanation = (title, message) => {
    Alert.alert(title, message, [{ text: 'Cerrar', style: 'cancel' }], { cancelable: true });
  };

  return (
    <View style={styles.container}>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity
          style={styles.boton}
          onPress={() => showExplanation('Norma 1', 'Explicación detallada sobre el funcionamiento de la Norma 1.')}
        >
          <Text style={styles.buttonText}>Norma 1</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.boton}
          onPress={() => showExplanation('Norma 2', 'Explicación detallada sobre el funcionamiento de la Norma 2.')}
        >
          <Text style={styles.buttonText}>Norma 2</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.boton}
          onPress={() => showExplanation('Norma 3', 'Explicación detallada sobre el funcionamiento de la Norma 3.')}
        >
          <Text style={styles.buttonText}>Norma 3</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.boton}
          onPress={() => showExplanation('Norma 4', 'Explicación detallada sobre el funcionamiento de la Norma 4.')}
        >
          <Text style={styles.buttonText}>Norma 4</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.boton}
          onPress={() => showExplanation('Norma 5', 'Explicación detallada sobre el funcionamiento de la Norma 5.')}
        >
          <Text style={styles.buttonText}>Norma 5</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.boton}
          onPress={() => showExplanation('Norma 6', 'Explicación detallada sobre el funcionamiento de la Norma 6.')}
        >
          <Text style={styles.buttonText}>Norma 6</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#DAD9FF',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  buttonsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  boton: {
    width: 150,
    height: 100,
    backgroundColor: '#9694FF',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
    marginHorizontal: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  buttonText: {
    color: '#FFF',
    fontWeight: 'bold',
    textAlign: 'center',
    paddingHorizontal: 10,
  },
});

export default HelpScreen;
