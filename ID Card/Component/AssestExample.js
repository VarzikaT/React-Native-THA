import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

export default function AssetExample(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>{props.name}</Text>
      <Image style={styles.logo} source={require('../assets/DSC_7412 (2).JPG')} />
      <Text style={styles.paragraph , { fontWeight:'bold' , color:'white'}}>{props.classname}</Text>
      <Text style={{fontWeight:'bold' , marginTop:5, color:'black' }}>{props.profession}</Text>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    
    alignItems: 'center',
    justifyContent: 'center',
   borderWidth: 1
  },
  paragraph: {
    padding: 24,
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  logo: {
    height: 128,
    width: 128,
    borderRadius:80
  }
});
