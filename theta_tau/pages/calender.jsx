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
    require('../assets/1stDay.jpg'),
    require('../assets/chill_and_grill.jpg'),
    require('../assets/GabePizza.jpg'),
    require('../assets/Game_night.jpg'),
    require('../assets/Info1.jpg'),
    require('../assets/info2.jpg'),
    require('../assets/paint_night.jpg'),
    require('../assets/speedDating.jpg'),
  ];

  const eventImages = [
    "Info Session 1",
    "Info Session 2",
    "Game Night",
    "Meet The Brothers",
    "Pizza Night",
    "Paint Night",
    "D.I.Y. Bracelets",
    "First Day",
    "Chill and Grill",
    "Gabe Pizza",
    "Game Night Fall",
    "Info Session 1 Fall",
    "Info Session 2 Fall",
    "Paint Night Fall",
    "Speed Dating Fall"
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
        
        {/* Use map to iterate through eventImages */}
        {eventImages.map((eventName, index) => (
          <Event
            key={index} // Add a unique key for each Event component
            desc={Data.eventData[index].description}
            title={eventName}
            imageSource={placeholderImages[index]}
          />
        ))}

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
