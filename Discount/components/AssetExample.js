import * as React from 'react';
import { Text, View, StyleSheet, TextInput , TouchableOpacity } from 'react-native';



export default class AssetExample extends React.Component {
  state = { amount:0 ,discount:0 ,result:0};
  render() {
    return(
      <View style={styles.container}>
      <View style={{ alignItems:'center',marginTop:11}}>
      <Text style={{ fontSize: 23, fontWeight:'bold', color:'orange'}}>
      Dicount Calculator</Text>
      </View>
      <View>

      <Text style={{padding:8}}>Amount</Text>
      <TextInput
      style={styles.textInput}

      onChangeText ={(text)=>{this.setState({amount:text})}}
      />
      </View>
      <View>
      <Text style={{padding:8, alignContent:'left'}}>Discount</Text> 
      <TextInput
      style={[styles.textInput,{textAlign:'center'}]}

      onChangeText ={(text)=>{this.setState({discount:text})}}
      />
      </View>
      <TouchableOpacity
      style={[styles.myButton,{backgroundColor:'orange'}]}
      onPress={() => {
      this.setState({
        result: (this.state.amount * this.state.discount)/100,
      });
      }}>
      <Text>Calculate</Text>
      </TouchableOpacity>
      <Text style ={[styles.result,{color: this.state.result ? 'green' : 'red'},]}>The Amount after Discount:</Text>
      <Text style = {[styles.result,{ color : this.state.result ? 'green' : 'red'},]}>{this.state.amount - this.state.result}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    backgroundColor: 'yellow',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  textInput:{
    backgroundColor:'white',
    padding: 8,
    borderRadius:8,
    borderWidth: 1,
    fontSize: 20,
    textAlign:'center',
  },
  myButton: { 
    backgroundColor:'white',
    padding: 15,
    color:'white',
    borderRadius: 11,
  },
  result:{
    margin: 10,
    backgroundColor:'lightpurple',
  },
  paragraph: {
    margin: 24,
    marginTop: 0,
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  logo: {
    height: 128,
    width: 128,
  }
});
