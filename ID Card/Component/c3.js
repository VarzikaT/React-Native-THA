import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

export default function cardio2(props) {
  return (
    <View style={styles.container}>
    <Text style={styles.paragraph}>
      <Text style={{color:'black' , textAlign:'left' , paddingRight:45 }}>{props.question}</Text>
      <Text style={{color:'pink' , textAlign:'right'}}>{props.answer}</Text></Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    
    borderWidth:1,
  },
  paragraph: {
    padding: 30,
    fontSize: 14,
    fontWeight: 'bold',
  },
});
