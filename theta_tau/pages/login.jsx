import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from 'react-native-vector-icons/FontAwesome'; // Adjust the icon set based on your preference
import styles from './styles';


Icon.loadFont(); // Load the icon font

const Login = () => {
  const [theme, setTheme] = useState('light');

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

  return (
    <View style={[styles.app, { backgroundColor: theme === 'dark' ? '#000000' : '#ffffff' }]}>
      <View style={styles.loginContainer}>
        <Text style={[styles.title, { color: theme === 'dark' ? '#ffffff' : '#000000' }]}>Login</Text>
        <View style={styles.container}>
          <View style={styles.top}> 
          {/*Add your social login buttons here */}
          </View>
          <Text style={styles.divider}><Text>Or</Text></Text>
          <View style={styles.form}>
            <Text>Email</Text>
            <TextInput style={styles.input} placeholder="Enter your email" keyboardType="email-address" />
            <Text>Password</Text>
            <TextInput style={styles.input} placeholder="Enter your password" secureTextEntry={true} />
            <View style={styles.remember}>
             {/*Add your checkbox and text here*/}
            </View>
            <TouchableOpacity style={styles.button}><Text style={styles.buttonText}>Log In</Text></TouchableOpacity>
          </View>
          <View style={styles.bottom}>
            {<TouchableOpacity style={styles.button}><Text style={styles.buttonText}>Forgot Password</Text></TouchableOpacity>}
          </View>
          <Text style={styles.create}>Sign up here</Text>
        </View>
        <View style={styles.themeToggle}>
        <Text style={[styles.themeText, { color: theme === 'dark' ? '#ffffff' : '#000000' }]}>
          {theme.charAt(0).toUpperCase() + theme.slice(1)} Theme
        </Text>
        <TouchableOpacity onPress={switchTheme}>
          <Icon name={theme === 'dark' ? 'toggle-on' : 'toggle-off'} size={32} color={theme === 'dark' ? '#ffffff' : '#000000'} />
        </TouchableOpacity>
      </View>
    </View>
    </View>
  );
};
export default Login;
