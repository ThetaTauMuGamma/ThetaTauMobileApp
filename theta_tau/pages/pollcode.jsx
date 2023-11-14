import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './styles';

Icon.loadFont();

const Pollcode = () => {
  const [theme, setTheme] = useState('light');
  const [randomCode, setRandomCode] = useState(null);

  useEffect(() => {
    const loadTheme = async () => {
      try {
        const savedTheme = await AsyncStorage.getItem('theme');
        if (savedTheme) {
          setTheme(savedTheme);
        }
      } catch (error) {
        console.error('Error loading theme from AsyncStorage:', error);
      }
    };

    loadTheme();
  }, []);

  const switchTheme = async () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);

    try {
      await AsyncStorage.setItem('theme', newTheme);
    } catch (error) {
      console.error('Error saving theme to AsyncStorage:', error);
    }
  };

  const generateRandomCode = () => {
    // Generate a random 6-digit code
    const code = Math.floor(100000 + Math.random() * 900000);
    setRandomCode(code);

    // Display an alert with the generated code
    Alert.alert('Generated Code', `Your 6-digit code: ${code}`);
  };

  return (
    <View style={[styles.app, { backgroundColor: theme === 'dark' ? '#000000' : '#ffffff' }]}>
      <View style={styles.loginContainer}>
        <Text style={[styles.title, { color: theme === 'dark' ? '#ffffff' : '#000000' }]}>Generate Meeting Code</Text>
        <View style={styles.container}>
          {/* ... (other components) */}
          <TouchableOpacity style={styles.button} onPress={generateRandomCode}>
            <Text style={styles.buttonText}>Generate Code!</Text>
          </TouchableOpacity>
          {/* ... (other components) */}
        </View>
        <View style={styles.themeToggle}>
          {/* ... (theme toggle components) */}
        </View>
      </View>
    </View>
  );
};

export default Pollcode;
