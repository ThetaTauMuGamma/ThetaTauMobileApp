import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './stylespoll';

Icon.loadFont();

const Pollcode = () => {
  
  const [randomCode, setRandomCode] = useState(null);

  const generateRandomCode = () => {
    // Generate a random 6-digit code
    const code = Math.floor(100000 + Math.random() * 900000);
    setRandomCode(code);

    // Display an alert with the generated code
    // Alert.alert('Generated Code', `Your 6-digit code: ${code}`);
  };

  return (
    <View style={styles.app}>
      <View style={styles.loginContainer}>
        <Text style={styles.title}>Generate Meeting Code</Text>
        <View style={styles.container}>
          {/* ... (other components) */}
          {randomCode && (
            <View style={styles.codeBox}>
              <Text style={styles.codeText}>{randomCode}</Text>
            </View>
          )}
          <TouchableOpacity style={styles.button} onPress={generateRandomCode}>
            <Text style={styles.buttonText}>Start Meeting</Text>
          </TouchableOpacity>
          {/* ... (other components) */}
        </View>

      </View>
    </View>
  );
};

export default Pollcode;