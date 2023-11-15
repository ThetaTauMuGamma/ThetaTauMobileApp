import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  Dimensions,
  SafeAreaView,
  Switch,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Navbar from '../components/navbar';
import Extra from '../components/extra';
import Event from '../components/event';
import Data from '../data/data.json';

const Brother = (props) => {
  const navigation = useNavigation();
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Image sources
  const placeholderImages = [
    require('../assets/infoSess1.png'), //info session
    require('../assets/infoSess2.png'), //info session II
    require('../assets/gameNight.png'), // game night
    require('../assets/meetTheBro.png'), // meet the brothers
    require('../assets/pizzaNight.png'), // pizza night
    require('../assets/paintNight.png'), // paint night
    require('../assets/bracelet.png'), // DIY BRACELETS
  ];

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <View style={[styles.container, isDarkMode && styles.darkMode]}>
      <ScrollView style={styles.scrollView}>
        <Text style={[styles.title, isDarkMode && styles.darkModeTitle]}>RUSH EVENTS</Text>
        <View style={styles.darkModeToggle}>
        <Text style={styles.darkModeText}>Dark Mode</Text>
        <Switch
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={isDarkMode ? "#f5dd4b" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleDarkMode}
          value={isDarkMode}
        />
      </View>
        <Image style={styles.logo} source={require('../assets/theta_tau_coa.png')} />
        <Event desc={Data.eventData[0].description} title="Info Session 1" imageSource={placeholderImages[0]} />
        <Event desc={Data.eventData[1].description} title="Info Session 2" imageSource={placeholderImages[1]} />
        <Event desc={Data.eventData[2].description} title="Game Night" imageSource={placeholderImages[2]} />
        <Event desc={Data.eventData[3].description} title="Meet The Brothers" imageSource={placeholderImages[3]} />
        <Event desc={Data.eventData[4].description} title="Pizza Night" imageSource={placeholderImages[4]} />
        <Event desc={Data.eventData[5].description} title="Paint Night" imageSource={placeholderImages[5]} />
        <Event desc={Data.eventData[6].description} title="D.I.Y. Bracelets" imageSource={placeholderImages[6]} />
        <Extra />
      </ScrollView>
      <Navbar style={styles.navbar} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  darkMode: {
    backgroundColor: '#121212', // Dark mode background color
  },
  title: {
    height: 100,
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 30, 
    textAlign: 'center',
    width: Dimensions.get('window').width,
    backgroundColor: '#501315',
    padding: 50
  },
  darkModeTitle: {
    backgroundColor: '#1E1E1E', // Dark mode title background color
  },
  logo: {
    width: 30,
    height: 50,
    position: 'absolute',
    right: 20,
    marginTop: 40,
  },
  navbar: {
    position: 'absolute',
    bottom: 0,
  },
  darkModeToggle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: 16,
  },
  darkModeText: {
    color: '#000000',
    marginRight: 10,
  },
});

export default Brother;
