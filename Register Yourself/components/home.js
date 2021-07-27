import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

import { Card } from 'react-native-paper';
import { Input, Button } from 'react-native-elements';

export default function Home({navigation}) {
  return (
    <View style={styles.container}>
    <View style={styles.space}>
    </View>
        <Card style={styles.card}>
        <Text style={styles.paragraph}>Welcome to the Profile Creator App</Text>
         <Button
          title="Get Register"
          style={{ width: 200, marginTop: 40, marginLeft:'auto', marginRight:'auto' }}          
          onPress = {()=>navigation.navigate('Registration')}
        />
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',   
    paddingHorizontal:30,
    paddingVertical:30    
    
  },
  paragraph: {
    margin: 54,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },space :{flex:1}, card:{flex:8, justifyContent:'center', alignItems:"center"}
 
});
