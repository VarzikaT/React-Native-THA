import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

// You can import from local files
import AssetExample from './components/AssetExample';
import Cardio from './components/c1';
import Cardio1 from './components/c2';
import Cardio2 from './components/c3';
import Cardio3 from './components/c4';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default function App(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}></Text>
      <Card style={{backgroundColor:'pink'}} >
        <AssetExample name='ID Card'  pic='' classname='GLA University' profession='B.tech(CSE)' />
      </Card>
      <Card style={styles.box}><Cardio question='Name:' answer='Varzika Tiwari' /></Card>
      <Card style={styles.box}><Cardio1 question='Section:' answer='D' /></Card>
      <Card style={styles.box}><Cardio2 question='Roll Number:' answer={67} /></Card>
      <Card style={styles.box}><Cardio3 question='Univ. Roll No:' answer={191500899} /></Card>
      <Card></Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: 'grey',
    padding:8,
  },
  paragraph: {
    fontSize: 8,
    fontWeight: 'bold',
    textAlign: 'undefined',
  },
  box:{
    height:80,
    fontSize:8,
  },
});
