import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
} from 'react-native';


class Screen extends Component{
  render(){

    const {
  expression,
  //actualexpression,
  result,
} = this.props;

    return(
      <View style ={styles.screenComponent}>
      <Text style={styles.expression}>{expression}</Text>
      <Text style={styles.result}>{result}</Text>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  screenComponent: {
    flex:3,
    //borderWidth:1,
    //borderColor: 'red',
    backgroundColor:'black',
  },
  expression:{
    fontSize:30,
    //borderColor:'white',
    //borderWidth:1,
    color:'white',
    textAlign:'right',
    padding: 10,
  },
  result:{
    fontSize:20,
    //borderColor:'white',
    //borderWidth:1,
    color:'lightgreen',
    textAlign:'right',
    padding:8,
  },
});

export default Screen;
