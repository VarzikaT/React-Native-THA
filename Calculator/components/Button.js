import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  Pressable,
} from 'react-native';
const buttonRipple ={
  color: 'lightgray',
  borderless : true,
}

class Button extends Component{
  render(){

    const{
      getbuttonpressedValue,
      clearall,
      deleteallcharacter,
      addhistory,
      openHistory,
      onEqualPress
    } =this.props;



    return(
      <View style ={styles.buttonComponent}>
      <View style={styles.leftbutton}>
       <Pressable style={styles.left}
        android_ripple ={buttonRipple}
       onPress={clearall}>
       <Text style={[styles.buttonText, {color:'red'}]}> AC </Text>
       </Pressable>
       <Pressable style={styles.left} android_ripple ={buttonRipple}
       onPress={deleteallcharacter}>
       <Text style={styles.buttonText}> DEL </Text>
       </Pressable>
       <Pressable style={styles.left} android_ripple ={buttonRipple}
        onPress={() => {getbuttonpressedValue('%')}}>
       <Text style={styles.buttonText}> % </Text>
       </Pressable>
        <Pressable 
        style={styles.left} 
        android_ripple ={buttonRipple}
        onPress={() => {getbuttonpressedValue('7')}}>
       <Text style={styles.buttonText}> 7 </Text>
       </Pressable>
       <Pressable style={styles.left} android_ripple ={buttonRipple}  
       onPress={() => {getbuttonpressedValue('8')}}>
       <Text style={styles.buttonText}> 8 </Text>
       </Pressable>
       <Pressable style={styles.left} android_ripple ={buttonRipple}
        onPress={() => {getbuttonpressedValue('9')}}>
       <Text style={styles.buttonText}> 9 </Text>
       </Pressable>
        <Pressable style={styles.left} android_ripple ={buttonRipple}
         onPress={() => {getbuttonpressedValue('4')}}>
       <Text style={styles.buttonText}> 4 </Text>
       </Pressable>
       <Pressable style={styles.left} android_ripple ={buttonRipple} 
        onPress={() => {getbuttonpressedValue('5')}}>
       <Text style={styles.buttonText}> 5 </Text>
       </Pressable>
       <Pressable style={styles.left} android_ripple ={buttonRipple}
        onPress={() => {getbuttonpressedValue('6')}}>
       <Text style={styles.buttonText}> 6 </Text>
       </Pressable>
        <Pressable style={styles.left} android_ripple ={buttonRipple} 
         onPress={() => {getbuttonpressedValue('3')}}>
       <Text style={styles.buttonText}> 3 </Text>
       </Pressable>
       <Pressable style={styles.left} android_ripple ={buttonRipple} 
        onPress={() => {getbuttonpressedValue('2')}}>
       <Text style={styles.buttonText}> 2 </Text>
       </Pressable>
       <Pressable style={styles.left} android_ripple ={buttonRipple} 
        onPress={() => {getbuttonpressedValue('1')}}>
       <Text style={styles.buttonText}> 1 </Text>
       </Pressable>
        <Pressable style={styles.left} android_ripple ={buttonRipple}
         onPress={() => { openHistory()}}
        >
       <Text style={styles.buttonText}> H </Text>
       </Pressable>
       <Pressable style={styles.left} android_ripple ={buttonRipple}
        onPress={() => {getbuttonpressedValue('0')}}>
       <Text style={styles.buttonText}> 0 </Text>
       </Pressable>
       <Pressable style={styles.left} android_ripple ={buttonRipple}
        onPress={() => {getbuttonpressedValue('.')}}>
       <Text style={styles.buttonText}> . </Text>
       </Pressable>
      </View>
      <View style={styles.rightbutton}>
      <Pressable style={styles.right} android_ripple ={buttonRipple}
       onPress={() => {getbuttonpressedValue('÷')}}>
      <Text style={styles.buttonTextright}>÷</Text>
      </Pressable>
      <Pressable style={styles.right} android_ripple ={buttonRipple}
       onPress={() => {getbuttonpressedValue('×')}}>
      <Text style={styles.buttonTextright}>×</Text>
      </Pressable>
      <Pressable style={styles.right} android_ripple ={buttonRipple}
       onPress={() => {getbuttonpressedValue('−')}}>
      <Text style={styles.buttonTextright}>−</Text>
      </Pressable>
      <Pressable style={styles.right} android_ripple ={buttonRipple}
      onPress={() => {getbuttonpressedValue('+')}}>
      <Text style={styles.buttonTextright}>+</Text>
      </Pressable>
       <Pressable style={styles.right} android_ripple ={buttonRipple} 
       onPress={onEqualPress}>
      <Text style={[styles.equalbutton,{color:'white'}]}>=</Text>
      </Pressable>
      </View>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  buttonComponent: {
    flex:7,
    borderTopWidth:1,
    borderTopColor:'grey',
    backgroundColor:'black',
    color:'white',
    //borderWidth:1,
    //borderColor: 'red',
    flexDirection:'row',
  },
  leftbutton: {
    flex:8,
    //height : '20%',
    //borderWidth:1,
    //borderColor: 'black',
    color:'white',
    flexDirection: 'row',
    flexWrap :'wrap',
  },
  rightbutton: {
  flex:3,
  color:'white',
    //borderWidth:1,
    //borderColor: 'black'
},
left: {
 width: '33.33%',
 //borderColor: 'black',
 color:'white',
 //borderWidth: 1,
 justifyContent:'center',
height :'20%',
},
right: {
 height:'20%',
 color:'white',
 //width :'20%',
 //borderWidth :1,
 justifyContent: 'center',


},
buttonText:{
  //flex: 1,
  fontSize: 28,
  //borderWidth: 1,
  borderColor :'black',
  color:'white',
  //backgroundColor :'red',
  textAlign:'center',

},
equalbutton :{
  //flex: 1,
  fontSize: 30,
  //borderWidth: 1,
  borderColor :'black',
  backgroundColor :'lightgreen',
  marginBottom: 8,
  marginTop : 8,
  padding: 8,
  width : '60%',
  margin: 'auto',
  textAlign:'center',
  borderRadius: 50,
  color: 'white',
},
buttonTextright: {
  //flex: 1,
  fontSize: 30,
  //borderWidth: 1,
  color:'lightgreen',
  borderColor :'black',
  //backgroundColor :'red',
  marginBottom: 8,
  marginTop : 8,
  padding: 8,
  width : '60%',
  margin: 'auto',
  textAlign:'center',
  borderRadius: 50,
  backgroundColor:'gray'

}

});

export default Button;
