import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Dimensions, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Brother = (props) => {
  const navigation = useNavigation();

  return (
    <Pressable style={styles.container} onPress={() => {
      navigation.navigate('BrotherPage', {
        name: props.name,
        title: props.title,
        bio: props.bio,
        image: props.imageSource,
        linkedin: props.linkedin,
      });
    }}>
      <View style={styles.column}>
        <Image source= {props.imageSource} style={styles.icon} />
      </View>
      <View style={styles.column}>
        <Text style={styles.text}>{props.title}</Text>
        <Text style={styles.text}>{props.name}</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#B99B73',
      flexDirection: 'row', 
      justifyContent: 'space-between', 
      alignItems: 'center', 
      padding: 10,
      marginBottom: 10,
    },
    text: {
        color: '#FFFFFF',
        fontSize: 15
    },
    column: {
      justifyContent: 'center', 
      alignItems: 'center',
      flex: 1, 
      marginHorizontal: 5,
      
    },
    icon: {
        width: 90,
        height: 90,
        borderRadius: 50  
    },
  });

export default Brother;