import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const HeaderMenu = ({ navigation }) => {
  return (
    <View style={styles.headerRightContainer}>
      <TouchableOpacity onPress={() => navigation.navigate('Notifications')}>
        <Icon name="notifications" size={30} color="white" />
      </TouchableOpacity>
      <View style={styles.separator} />
      <TouchableOpacity onPress={() => navigation.navigate('Help')}>
        <Icon name="help" size={30} color="white" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  headerRightContainer: {
    flexDirection: 'row',
    marginRight: 30,
  },
  separator: {
    width: 20,
  },
});

export default HeaderMenu;
