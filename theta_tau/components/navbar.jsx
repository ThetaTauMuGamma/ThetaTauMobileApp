import React from 'react';
import { View, StyleSheet, Image, Dimensions, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Navbar = () => {
  const navigation = useNavigation();


  return (
      <View style={styles.navbar}>
          <Pressable style={styles.button} onPress={() => {navigation.navigate('Homepage')}}>
              <Image source={require('../assets/home.png')} style={styles.icon} />
          </Pressable>
          <Pressable style={styles.button} onPress={() => {navigation.navigate('Brothers')}}>
              <Image source={require('../assets/brothers.png')} style={styles.icon} />
          </Pressable>
          {/* <Pressable style={styles.button} onPress={() => {navigation.navigate('Pollcode')}}>
              <Image source={require('../assets/icon.png')} style={styles.icon} />
          </Pressable> */}
          <Pressable style={styles.button} onPress={() => {navigation.navigate('Login')}}>
              <Image source={require('../assets/icon.png')} style={styles.icon} />
          </Pressable>
          <Pressable style={styles.button} onPress={() => {navigation.navigate('Calender')}}>
              <Image source={require('../assets/calendar.png')} style={styles.icon} />
          </Pressable>
          <Pressable style={styles.button} onPress={() => {navigation.navigate('Pillars')}}>
              <Image source={require('../assets/Pillars.png')} style={styles.icon} />
          </Pressable>
      </View>
  );
};

const styles = StyleSheet.create({

  navbar: {
    backgroundColor: '#ffffff',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    width: Dimensions.get('window').width,
    position: 'fixed',
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 5,
    borderWidth: 2, // Border width in pixels
    borderColor: '#000', // Border color
    padding: 10, // Optional: Add padding to the component
  },
  icon: {
    marginHorizontal: 20,
    width: 40,
    height: 40,  
  },
})

export default Navbar;
