// login.jsx
import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, ImageBackground } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './styles';

Icon.loadFont();

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

  const appStyles = styles(theme);

  return (
    <View style={appStyles.app}>
      {theme === 'light' ? (
        <ImageBackground
          source={require('../assets/loginlightbkgd.png')} // Replace with the actual path to your light mode background image
          style={{ ...appStyles.app, flex: 1 }} // Adjust the styles as needed
        >
          <View style={appStyles.loginContainer}>
            <Text style={[appStyles.title, { color: theme === 'dark' ? '#ffffff' : '#000000' }]}>Login</Text>
            <View style={appStyles.container}>
              <View style={appStyles.top}>
                {/* Add your social login buttons here */}
              </View>
              <Text style={appStyles.divider}><Text>Or</Text></Text>
              <View style={appStyles.form}>
                <Text style={appStyles.label}>Email</Text>
                <TextInput style={appStyles.input} placeholder="Enter your email" keyboardType="email-address" />
                <Text style={appStyles.label}>Password</Text>
                <TextInput style={appStyles.input} placeholder="Enter your password" secureTextEntry={true} />
                <View style={appStyles.remember}>
                  {/* Add your checkbox and text here */}
                </View>
                <TouchableOpacity style={appStyles.button}><Text style={appStyles.buttonText}>Log In</Text></TouchableOpacity>
              </View>
              <View style={appStyles.bottom}>
                {/* Add your Forgot Password and Reset Password links here */}
              </View>
              <Text style={appStyles.create}>Sign up here</Text>
            </View>
            <View style={appStyles.themeToggle}>
              <Text style={[appStyles.themeText, { color: theme === 'dark' ? '#ffffff' : '#000000' }]}>
                {theme.charAt(0).toUpperCase() + theme.slice(1)} Theme
              </Text>
              <TouchableOpacity onPress={switchTheme}>
                <Icon name={theme === 'dark' ? 'toggle-on' : 'toggle-off'} size={32} color={theme === 'dark' ? '#ffffff' : '#000000'} />
              </TouchableOpacity>
            </View>
          </View>
        </ImageBackground>
      ) : (
        // For dark mode or any other theme, no background image
        <View style={appStyles.loginContainer}>
          <Text style={[appStyles.title, { color: theme === 'dark' ? '#ffffff' : '#000000' }]}>Login</Text>
          <View style={appStyles.container}>
            <View style={appStyles.top}>
              {/* Add your social login buttons here */}
            </View>
            <Text style={appStyles.divider}><Text>Or</Text></Text>
            <View style={appStyles.form}>
              <Text style={appStyles.label}>Email</Text>
              <TextInput style={appStyles.input} placeholder="Enter your email" keyboardType="email-address" />
              <Text style={appStyles.label}>Password</Text>
              <TextInput style={appStyles.input} placeholder="Enter your password" secureTextEntry={true} />
              <View style={appStyles.remember}>
                {/* Add your checkbox and text here */}
              </View>
              <TouchableOpacity style={appStyles.button}><Text style={appStyles.buttonText}>Log In</Text></TouchableOpacity>
            </View>
            <View style={appStyles.bottom}>
              {/* Add your Forgot Password and Reset Password links here */}
            </View>
            <Text style={appStyles.create}>Sign up here</Text>
          </View>
          <View style={appStyles.themeToggle}>
            <Text style={[appStyles.themeText, { color: theme === 'dark' ? '#ffffff' : '#000000' }]}>
              {theme.charAt(0).toUpperCase() + theme.slice(1)} Theme
            </Text>
            <TouchableOpacity onPress={switchTheme}>
              <Icon name={theme === 'dark' ? 'toggle-on' : 'toggle-off'} size={32} color={theme === 'dark' ? '#ffffff' : '#000000'} />
            </TouchableOpacity>
          </View>
        </View>
      )}
    </View>
  );
};

export default Login;
