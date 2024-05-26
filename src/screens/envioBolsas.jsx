import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const EnvioBolsas = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.instructionContainer}>
        <Text style={styles.instructionText}>
          1. Verifique que todas las bolsas estén correctamente etiquetadas y selladas.
        </Text>
      </View>
      <View style={styles.instructionContainer}>
        <Text style={styles.instructionText}>
          2. Registre el contenido de cada bolsa en el sistema.
        </Text>
      </View>
      <View style={styles.instructionContainer}>
        <Text style={styles.instructionText}>
          3. Organice las bolsas por destino y asegúrese de que los datos del destinatario sean correctos.
        </Text>
      </View>
      <View style={styles.instructionContainer}>
        <Text style={styles.instructionText}>
          4. Programe la recolección de las bolsas con el servicio de mensajería.
        </Text>
      </View>
      <View style={styles.instructionContainer}>
        <Text style={styles.instructionText}>
          5. Confirme que todas las bolsas han sido recogidas y envíe la confirmación a la administración.
        </Text>
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
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  instructionContainer: {
    backgroundColor: '#9694FF',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    width: '100%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  instructionText: {
    fontSize: 18,
    color: 'white',
  },
});

export default EnvioBolsas;
