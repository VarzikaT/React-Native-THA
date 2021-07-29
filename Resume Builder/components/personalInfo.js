import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  Pressable,
  ScrollView,
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';
import db from '../config';

export default class PresonalInfo extends React.Component {
  constructor({ props }) {
    super(props);
    this.state = {
      data: [],
      firstName: '',
      lastName: '',
      email: '',
      mob: null,
      linkedin: '',
      github: '',
    };
  }

  onPressNext = () => {
    const { navigation } = this.props;
    const personalinfo = db.ref('Personal Info');

    const {
      data,
      firstName,
      lastName,
      email,
      mob,
      linkedin,
      github,
    } = this.state;

    if (firstName && lastName && email && mob && linkedin && github) {
      const dat = { firstName, lastName, email, mob, linkedin, github };

      personalinfo.push(dat);
      this.setState({ firstName: '' });
      this.setState({ lastName: '' });
      this.setState({ email: '' });
      this.setState({ mob: '' });
      this.setState({ linkedin: '' });
      this.setState({ github: '' });
      navigation.navigate('Educational Info');
    } else {
      alert('please fill all the mandatory feilds');
    }
  };

  render() {
    const {
      data,
      firstName,
      lastName,
      email,
      mob,
      linkedin,
      github,
    } = this.state;
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Icon
            style={styles.icon}
            name={'list-alt'}
            color={'white'}
            size={36}
          />
          <Text style={styles.headerTxt1}>Build Resume</Text>
          <Text style={styles.headerTxt2}>Presonal Info</Text>
        </View>
        <View style={styles.body}>
          <ScrollView contentContainerStyle={{ alignItems: 'center' }}>
            <TextInput
              style={[styles.txtInp, { borderWidth: 1.7 }]}
              placeholder={'First Name'}
              onChangeText={(text) => {
                this.setState({ firstName: text });
              }}
            />
            <TextInput
              style={[styles.txtInp, { borderWidth: 1.7 }]}
              placeholder={'Last Name'}
              onChangeText={(text) => {
                this.setState({ lastName: text });
              }}
            />
            <TextInput
              style={[styles.txtInp, { borderWidth: 1.7 }]}
              placeholder={'Email'}
              onChangeText={(text) => {
                this.setState({ email: text });
              }}
            />
            <TextInput
              style={[styles.txtInp, { borderWidth: 1.7 }]}
              placeholder={'Phone'}
              onChangeText={(text) => {
                this.setState({ mob: text });
              }}
            />
            <TextInput
              style={[styles.txtInp, { borderWidth: 1.7 }]}
              placeholder={'LinkedIn'}
              onChangeText={(text) => {
                this.setState({ linkedin: text });
              }}
            />
            <TextInput
              style={[styles.txtInp, { borderWidth: 1.7 }]}
              placeholder={'github'}
              onChangeText={(text) => {
                this.setState({ github: text });
              }}
            />
            <Pressable
              style={styles.button}
              onPress={() => {
                this.onPressNext();
              }}>
              <Text style={styles.buttonTxt}>Next</Text>
            </Pressable>
          </ScrollView>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  icon: {
    marginLeft: 8,
    marginTop: 10,
  },
  header: {
    flex: 1,
    borderColor: 'black',
    borderWidth: 1,
    padding: 5,
    backgroundColor: 'black',
    flexDirection: 'row',
  },
  body: {
    flex: 9,
    padding: 10,
    alignItems: 'center',

    marginTop: 50,
  },
  headerTxt1: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    width: '30%',
    textAlign: 'center',
    marginTop: 5,
  },
  headerTxt2: {
    color: 'lightgray',
    flex: 1,
    textAlignVertical: 'center',
    textAlign: 'right',
    fontSize: 20,
  },
  txtInp: {
    borderColor: 'black',
    borderWidth: 1,
    color: 'gray',
    borderRadius: 8,
    backgroundColor: 'white',
    height: 46,
    width: 300,
    margin: 20,
    fontSize: 18,
    padding: 13,
  },
  button: {
    backgroundColor: 'black',
    width: 100,
    height: 35,
    borderRadius: 10,
    justifyContent: 'center',
    marginTop: 30,
    border: 'black',
    borderWidth: 5,
  },
  buttonTxt: {
    color: 'white',
    fontSize: 19,
    textAlign: 'center',
  },
});
