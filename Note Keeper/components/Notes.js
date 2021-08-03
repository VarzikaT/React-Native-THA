import React from 'react'
import {View,Text,StyleSheet,TouchableOpacity} from 'react-native'

export default class Notes extends React.Component
{
  render()
  {
    return(
    <View style = {styles.note} key={this.props.task}>
    <Text style = {styles.noteText}>{this.props.task.note}
    </Text>
    <Text style = {styles.noteText}>{this.props.task.date}</Text>
    <TouchableOpacity style ={ styles.notDelete}
    onPress={this.props.markDone}>
    <Text style={{color:'white'}}> Done </Text>
    </TouchableOpacity>
    </View>
    )
  }
}

const styles = StyleSheet.create({
  note:{
    position:'relative',
    padding:20,
    paddingRight:190,
    borderBottomColor:'#ededed',
    borderBottomWidth:2,
  },
  noteText:{
    paddingLeft:20,
    borderLeftColor:'#ededed',
    borderLeftWidth:10,
  },
  notDelete:{
   position:'absolute',
   right:10, bottom:10 , top:10,
   padding:10,
   justifyContent:'center', alignItems:'center',
  backgroundColor:'grey',
  borderRadius:10,
  }
})
