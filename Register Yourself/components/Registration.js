import * as React from 'react';
import { Text, View, StyleSheet, Image,TextInput,Pressable } from 'react-native';
import { Input, Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

import db from '../Config';

export default class Registration extends React.Component {
  constructor({ props }) {
    super(props);
    this.state = {
      data: [],
      user: '',
      email: '',
      mob: null,
      add: '',
    };
  }

  addData = () => {
    const { data, user, email, mob, add } = this.state;

    if (user && email && mob && add) {
      const profile = db.ref('profile');
      const newProfile = {
        user: user,
        email: email,
        mob: mob,
        add: add,
      };
      profile.push(newProfile);
      console.log(newProfile);
      this.setState({ user: '' });
      this.setState({ email: '' });
      this.setState({ mob: '' });
      this.setState({ add: '' });
    }
  };

  render() {
    const { data, user, email, mob, add } = this.state;

    return (
      <View style={styles.container}>
        <Input
          placeholder="Enter Name"
          leftIcon={{ type: 'font-awesome', name: 'user' }}
          style={{ margin: 5}}
          onChangeText={(text) => {
            this.setState({ user: text });
          }}
          value={user}
        />
        <Input
          placeholder="Enter Email-ID"
          leftIcon={{ type: 'font-awesome', name: 'envelope' }}
          style={{ margin: 5 }}
          onChangeText={(text) => {
            this.setState({ email: text });
          }}
          value={email}
        />
        <Input
          placeholder="Enter Mobile"
          leftIcon={{ type: 'font-awesome', name: 'mobile' }}
          style={{ margin: 5, padding: 10 }}
          onChangeText={(text) => {
            this.setState({ mob: text });
          }}
          value={mob}
        />
        <Input
          placeholder="Enter City Name"
          leftIcon={{ type: 'font-awesome', name: 'map-marker' }}
          style={{ margin: 5 }}
          onChangeText={(text) => {
            this.setState({ add: text });
          }}
          value={add}
        />
        <Button
          title="Register"
          style={{ width: 100, marginTop: 20 }}
          onPress={this.addData}
        />
        <Button
          title="Check Profile"
          style={{
            width: 200,
            marginTop: 30,
            marginLeft: 'auto',
            marginRight: 'auto',
          }}
          onPress={() => this.props.navigation.navigate('Profile')}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
});
