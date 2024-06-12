import React from 'react';
import { View, Text, StyleSheet, Button, TouchableOpacity } from 'react-native';
import * as Print from 'expo-print';
import { shareAsync } from 'expo-sharing';

const DetalleScreen = ({ route }) => {
  const { item } = route.params;

  const generatePdf = async () => {
    const htmlContent = `
      <html>
        <head>
          <style>
            body {
              font-family: Arial, sans-serif;
              padding: 20px;
              background-color: #DAD9FF;
            }
            .card {
              background-color: #9694FF;
              border-radius: 10px;
              padding: 16px;
              margin-bottom: 10px;
              color: white;
            }
            .label {
              font-size: 22px;
              font-weight: bold;
              margin-bottom: 4px;
            }
            .value {
              font-size: 18px;
            }
          </style>
        </head>
        <body>
          <div class="card">
            <div class="label">Nombre:</div>
            <div class="value">${item.Nombre}</div>
          </div>
          <div class="card">
            <div class="label">Siglas:</div>
            <div class="value">${item.Siglas}</div>
          </div>
          <div class="card">
            <div class="label">Copago:</div>
            <div class="value">${item.Copago ? 'Sí' : 'No'}</div>
          </div>
          <div class="card">
            <div class="label">APB:</div>
            <div class="value">${item.APB}</div>
          </div>
          <div class="card">
            <div class="label">Planes:</div>
            <div class="value">${item.Planes}</div>
          </div>
          <div class="card">
            <div class="label">Ingreso por AOL:</div>
            <div class="value">${item.IngresoAOL ? 'Sí' : 'No'}</div>
          </div>
        </body>
      </html>
    `;
    const { uri } = await Print.printToFileAsync({ html: htmlContent });
    await shareAsync(uri);
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.label}>Nombre:</Text>
        <Text style={styles.value}>{item.Nombre}</Text>
      </View>
      <View style={styles.card}>
        <Text style={styles.label}>Siglas:</Text>
        <Text style={styles.value}>{item.Siglas}</Text>
      </View>
      <View style={styles.card}>
        <Text style={styles.label}>Copago:</Text>
        <Text style={styles.value}>{item.Copago ? 'Sí' : 'No'}</Text>
      </View>
      <View style={styles.card}>
        <Text style={styles.label}>APB:</Text>
        <Text style={styles.value}>{item.APB}</Text>
      </View>
      <View style={styles.card}>
        <Text style={styles.label}>Planes:</Text>
        <Text style={styles.value}>{item.Planes}</Text>
      </View>
      <View style={styles.card}>
        <Text style={styles.label}>Ingreso por AOL:</Text>
        <Text style={styles.value}>{item.IngresoAOL ? 'Sí' : 'No'}</Text>
      </View>
      <TouchableOpacity style={styles.button} onPress={generatePdf}>
        <Text style={styles.buttonText}>Generar PDF</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#DAD9FF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    width: '90%',
    backgroundColor: '#9694FF',
    borderRadius: 10,
    padding: 16,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.4,
    shadowRadius: 4,
    elevation: 5,
  },
  label: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 4,
    color: 'white',
  },
  value: {
    fontSize: 18,
    color: 'white',
  },
  button: {
    backgroundColor: '#4CAF50',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default DetalleScreen;
