// import React, { useState } from 'react';
// import { View, Text, TouchableOpacity, Button, StyleSheet } from 'react-native';

// const Voting = ({ navigation }) => {
//     const [pollOptions, setPollOptions] = useState([
//         { id: 1, text: 'Option 1', count: 0 },
//         { id: 2, text: 'Option 2', count: 0 },
//         // Add more options as needed
//     ]);

//     const handleVote = (optionId) => {
//         setPollOptions((prevOptions) =>
//             prevOptions.map((option) =>
//                 option.id === optionId ? { ...option, count: option.count + 1 } : option
//             )
//         );
//     };

//     return (
//         <View style={styles.container}>
//             <Button title="Go to Homepage" onPress={() => navigation.navigate('Homepage')} />
//             <Text style={styles.heading}>Vote</Text>
//             {pollOptions.map((option) => (
//                 <TouchableOpacity
//                     key={option.id}
//                     style={styles.optionButton}
//                     onPress={() => handleVote(option.id)}
//                 >
//                     <Text style={styles.optionText}>{option.text}</Text>
//                     <Text style={styles.voteCount}>{option.count} votes</Text>
//                 </TouchableOpacity>
//             ))}
//         </View>
//     );
// };

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         alignItems: 'center',
//         justifyContent: 'center',
//     },
//     heading: {
//         fontSize: 24,
//         marginBottom: 20,
//     },
//     optionButton: {
//         backgroundColor: '#B99B73',
//         padding: 20,
//         marginVertical: 10,
//         width: '80%',
//         alignItems: 'center',
//         borderRadius: 8,
//     },
//     optionText: {
//         fontSize: 18,
//         color: '#710000',
//     },
//     voteCount: {
//         marginTop: 8,
//         color: '#501315',
//     },
// });

// export default Voting;
