import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

const DrawerCustomContent = ({ userImage, userName, onButtonClick }) => {
  return (
    <View style={styles.container}>
      <View style={styles.userContainer}>
        <Image source={{ uri: userImage }} style={styles.userImage} />
        <Text style={styles.userName}>Faizan</Text>
      </View>
      <TouchableOpacity style={styles.button} onPress={onButtonClick}>
        <Text style={styles.buttonText}>Button</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "30%",
    // flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  userContainer: {
    alignItems: 'center',
  },
  userImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  userName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  button: {
    marginTop: 20,
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#007bff',
  },
  buttonText: {
    fontSize: 16,
    color: '#fff',
    textAlign: 'center',
  },
});

export default DrawerCustomContent;
