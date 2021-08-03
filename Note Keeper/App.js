import * as React from 'react';
import { TextInput,ScrollView,TouchableOpacity,Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import Notes from './components/Notes'
import db from './config'


export default class App extends React.Component{

constructor(){
  super();
  this.state ={
    noteArr:[{Note:'React-Native', date:'13-Jul-2021'}],
    noteText:''
  }
}

markDone= (item) =>{

  const node = db.ref('tasks').child(this.state.noteArr[item].id)
  node.remove();

  this.state.splice(item,1);
 // this.setState({noteArr:this.state.noteArr})
};

componentDidMount(){
  const tasks = db.ref('tasks');
  tasks.on('value',(data)=>{
    const todos = data.val();
    const tasklist = [];

     for( var id in todos)
     {
       tasklist.push({id , ...todos[id]})
     }
     this.setState({noteArr:tasklist})
  })
}

  addtask = ()=>{
    const tasks = db.ref('tasks')
    var d= new Date()
    const month =[
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ];
    if(this.state.noteText){
      
      const newTask = {
      note: this.state.noteText,
      date: d.getDate() +' ' + month[d.getMonth()] + ' ' + d.getFullYear(),
    }

    tasks.push(newTask)
     // this.setState({noteArr:this.state.noteArr});
      this.setState({noteText:''})
       console.log(this.state.noteArr);
      }
    };
  render(){

    var notes = this.state.noteArr.map((index,item)=>{
      return (
        <Notes task={index} markDone = {() =>{this.markDone(item)}}/>
    );
    });
  return <View style={styles.container}>
  <View style={styles.header}>
  <Text style={{fontSize:20}}> Keep It</Text>
  </View>
  <ScrollView style={styles.scroll}>
  
    {notes}

  </ScrollView>
  <View style={styles.bottom}>
    <TextInput placeholder="Enter Task" style={styles.inputText}
    
    onChangeText ={(text)=>{this.setState({noteText:text})}}
    value= {this.state.noteText}
     />
    <TouchableOpacity style={styles.inputButton}
    onPress = {this.addtask}>
    <Text style={{fontSize:20}}>
    +
    </Text>
    </TouchableOpacity>
</View>
</View>;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
  },

  header: {
    backgroundColor:'gold', height:65 , justifyContent:'center' , alignItems:'center',borderBottomWidth: 3 , borderBottomColor:'black'
  },
  bottom:{
    position:'absolute',
    bottom:0, left:0, right:0,
    borderTopColor:'gold',borderTopWidth:2,
  },
  inputText:{
    padding:20,outline:'none',
  },
  inputButton:{
   position:'absolute', bottom:10, right:20, width:40, height:40, backgroundColor:'gold',justifyContent:'center' , alignItems:'center', borderRadius:50,
  },
  scroll:{
    flex:1,
    marginBottom:100,
  }
});
