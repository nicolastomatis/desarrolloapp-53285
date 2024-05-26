import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const CierreFacturacion = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.instructionContainer}>
        <Text style={styles.instructionText}>
          1. Asegúrese de que todas las transacciones del día estén ingresadas en el sistema.
        </Text>
      </View>
      <View style={styles.instructionContainer}>
        <Text style={styles.instructionText}>
          2. Revise que no haya discrepancias entre el total de ventas y el dinero en efectivo.
        </Text>
      </View>
      <View style={styles.instructionContainer}>
        <Text style={styles.instructionText}>
          3. Genere el reporte de cierre de caja y guarde una copia para sus registros.
        </Text>
      </View>
      <View style={styles.instructionContainer}>
        <Text style={styles.instructionText}>
          4. Envíe el reporte de cierre a la contabilidad a través del sistema.
        </Text>
      </View>
      <View style={styles.instructionContainer}>
        <Text style={styles.instructionText}>
          5. Cierre la caja y asegure los fondos en la caja fuerte.
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

export default CierreFacturacion;
