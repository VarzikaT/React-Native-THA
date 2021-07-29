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

export default class EducationalInfo extends React.Component {
  constructor({ props }) {
    super(props);
    this.state = {
      data: [],
      collegeoruni: '',
      course: '',
      branch: '',
      fromdate: '',
      todate: '',
    };
  }

  onPressNext = () => {
    const { navigation } = this.props;
    const eduinfo = db.ref('Educational Info');

    const { data, collegeoruni, course, branch, fromdate, todate } = this.state;

    if (collegeoruni && course && branch && fromdate && todate) {
      const dat = { collegeoruni, course, branch, fromdate, todate };

      eduinfo.push(dat);
      this.setState({ collegeoruni: '' });
      this.setState({ course: '' });
      this.setState({ branch: '' });
      this.setState({ fromdate: '' });
      this.setState({ todate: '' });
      navigation.navigate('Project Info');
    } else {
      alert('please fill all the mandatory feilds');
    }
  };

  render() {
    const { collegeoruni, course, branch, fromdate, todate } = this.state;

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
          <Text style={styles.headerTxt2}>Educational Info</Text>
        </View>
        <View style={styles.body}>
          <ScrollView contentContainerStyle={{ alignItems: 'center' }}>
            <TextInput
              style={[styles.txtInp, { borderWidth: 1.7 }]}
              placeholder={'College/University'}
              onChangeText={(text) => {
                this.setState({ collegeoruni: text });
              }}
              value={collegeoruni}
            />
            <TextInput
              style={[styles.txtInp, { borderWidth: 1.7 }]}
              placeholder={'Course'}
              onChangeText={(text) => {
                this.setState({ course: text });
              }}
              value={course}
            />
            <TextInput
              style={[styles.txtInp, { borderWidth: 1.7 }]}
              placeholder={'Branch'}
              onChangeText={(text) => {
                this.setState({ branch: text });
              }}
              value={branch}
            />
            <TextInput
              style={[styles.txtInp, { borderWidth: 1.7 }]}
              placeholder={'From Year'}
              onChangeText={(text) => {
                this.setState({ fromdate: text });
              }}
              value={fromdate}
            />
            <TextInput
              style={[styles.txtInp, { borderWidth: 1.7 }]}
              placeholder={'To Year'}
              onChangeText={(text) => {
                this.setState({ todate: text });
              }}
              value={todate}
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
