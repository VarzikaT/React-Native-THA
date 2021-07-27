import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import { Input, Button } from 'react-native-elements';

import db from '../Config';

export default class Profile extends React.Component {
  constructor({ props }) {
    super(props);
    this.state = {
      data: [{user:'Register Yourself First', email:'Register Yourself First', mob:'Register Yourself First', add:'Register Yourself First'}],
   
    };
  }

  componentDidMount() {
    const { data, user, email, mob, add } = this.state;

    const profile = db.ref('profile');
    profile.on('value', (data) => {
      const todos = data.val();
      const taskList = [];
      for (var id in todos) {
        taskList.push({ id, ...todos[id] });
      }
      console.log(taskList);
      if(taskList.length > 0)
      this.setState({data:taskList.slice(0,1)})
    
    });
  }

  render() {
    const { data, user, email, mob, add } = this.state;
    console.log(data)
    return (
      <View style={styles.container}>
        <View style={styles.profile}>
          <Text
            style={{
              margin: 20,
              color: 'grey',
              fontSize: 24,
              fontWeight: 'bold',
            }}>
            Profile
          </Text>
          <Image style={styles.logo} source={require('../assets/pngtree-business-male-icon-vector-png-image_916468.jpg')} />
          <Text style={{ marginTop: 10, color: 'white', fontSize: 24 }}>
            'Beta-Labs'
          </Text>
        </View>
        <View style={styles.details}>
          <View style={styles.items}>
            <Text
              style={{
                marginTop: 0,
                color: 'orange',
                fontSize: 18,
                flex: 0.8,
              }}>
              Name:
            </Text>
            <Text style={{ marginTop: 0, color: 'black', fontSize: 18 }}>
             {
               data.map((profile)=><Text>{profile.user}</Text>)
             }
            </Text>
          </View>
          <View style={styles.items}>
            <Text
              style={{
                marginTop: 0,
                color: 'orange',
                fontSize: 18,
                flex: 0.8,
              }}>
              Email:
            </Text>
            <Text style={{ marginTop: 0, color: 'black', fontSize: 18, }}>
              {
               data.map((profile)=><Text>{profile.email}</Text>)
             }
            </Text>
          </View>
          <View style={styles.items}>
            <Text
              style={{
                marginTop: 0,
                color: 'orange',
                fontSize: 18,
                flex: 0.8,
              }}>
              Mobile No:
            </Text>
            <Text style={{ marginTop: 0, color: 'black', fontSize: 18 }}>
               {
               data.map((profile)=><Text>{profile.mob}</Text>)
             }
            </Text>
          </View>
          <View style={styles.items}>
            <Text
              style={{
                marginTop: 0,
                color: 'orange',
                fontSize: 18,
                flex: 0.8,
              }}>
              Address:
            </Text>
            <Text style={{ marginTop: 0, color: 'black', fontSize: 18 }}>
               {
               data.map((profile)=><Text>{profile.add}</Text>)
             }
            </Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  profile: {
    flex: 0.4,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 30,
  },
  details: {
    flex: 0.6,
    backgroundColor: 'white',
  },

  logo: {
    width: 150,
    height: 150,
    borderRadius: 100,
  },
  items: {
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    flex: 0.25,
    borderTopColor: 'black',
    borderTopWidth: 1,
    flexDirection: 'row',
    paddingHorizontal: 20,
    alignItems: 'center',
  },
});
