// import React, { useState } from 'react';
// import { ScrollView, View, Text, TextInput, Button, StyleSheet, Dimensions } from 'react-native';

// const Meeting = ({ navigation }) => {
//     const [questions, setQuestions] = useState([]);
//     const [newQuestion, setNewQuestion] = useState('');

//     const handleAddQuestion = () => {
//         setQuestions([{ question: newQuestion, answers: [], newAnswer: '' }, ...questions]);
//         setNewQuestion('');
//     };

//     const handleAddAnswer = (index) => {
//         const updatedQuestions = [...questions];
//         updatedQuestions[index].answers.push(updatedQuestions[index].newAnswer);
//         updatedQuestions[index].newAnswer = '';
//         setQuestions(updatedQuestions);
//     };

//     const handleNewAnswerChange = (text, index) => {
//         const updatedQuestions = [...questions];
//         updatedQuestions[index].newAnswer = text;
//         setQuestions(updatedQuestions);
//     };

//     return (
//         <View style={styles.container}>
//             <Button title="Go to Homepage" onPress={() => navigation.navigate('Homepage')} />
//             <Text style={styles.heading}>Meeting</Text>
//             <TextInput
//                 style={styles.input}
//                 placeholder="Enter a question"
//                 value={newQuestion}
//                 onChangeText={setNewQuestion}
//             />
//             <Button title="Add Question" onPress={handleAddQuestion} />
//             <ScrollView style={styles.scrollView}>
//                 {questions.map((item, index) => (
//                     <View key={index} style={styles.questionContainer}>
//                         <Text style={styles.questionText}>{item.question}</Text>
//                         {item.answers.map((answer, i) => (
//                             <Text key={i} style={styles.answerText}>{answer}</Text>
//                         ))}
//                         <TextInput
//                             style={styles.input}
//                             placeholder="Enter an answer"
//                             value={item.newAnswer}
//                             onChangeText={(text) => handleNewAnswerChange(text, index)}
//                         />
//                         <Button title="Add Answer" onPress={() => handleAddAnswer(index)} />
//                     </View>
//                 ))}
//             </ScrollView>
//         </View>
//     );
// };

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         alignItems: 'center',
//         justifyContent: 'center',
//         backgroundColor: '#F5F5F5',
//         marginTop: 75,
//     },
//     heading: {
//         fontSize: 24,
//         marginBottom: 20,
//         color: '#333',
//     },
//     input: {
//         height: 40,
//         borderColor: '#ddd',
//         borderWidth: 1,
//         width: '80%',
//         marginBottom: 10,
//         borderRadius: 5,
//         padding: 10,
//     },
//     scrollView: {
//         width: '100%',
//     },
//     questionContainer: {
//         width: Dimensions.get('window').width * 0.9,
//         backgroundColor: '#fff',
//         padding: 15,
//         borderRadius: 5,
//         marginBottom: 20,
//         shadowColor: '#000',
//         shadowOffset: { width: 0, height: 2 },
//         shadowOpacity: 0.1,
//         shadowRadius: 5,
//         elevation: 3,
//     },
//     questionText: {
//         fontSize: 20,
//         color: '#000',
//         fontFamily: 'Arial',
//         marginBottom: 10,
//     },
//     answerText: {
//         fontSize: 18,
//         color: '#666',
//         fontFamily: 'Arial',
//         marginBottom: 10,
//     },
// });

// export default Meeting;