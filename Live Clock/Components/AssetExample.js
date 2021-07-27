import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

export default class AssetExample extends React.Component {
  constructor()
  {
    super()
      this.state={
        time: new Date()
    }
  }
  currentTime()
  {
    this.setState({
      time: new Date()
    })
  }
  componentWillMount()
  {
    console.log("ComponentWillMount() called")
    setInterval(()=>this.currentTime() , 1000)
  }
  render()
  {
     return (
    <View style={styles.container}>
      <Text style={styles.paragraph}> 
    {this.state.time.toLocaleTimeString('en-US')}  </Text>
    </View>
  );
}}
 
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  paragraph: {
    margin: 15,
    marginTop: 0,
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    fontFamily:'arial',
    color:'purple',
  },
});

