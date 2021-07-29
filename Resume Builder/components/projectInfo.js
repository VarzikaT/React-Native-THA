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

export default class ProjectInfo extends React.Component {
  constructor({ props }) {
    super(props);
    this.state = {
      data: [],
      title1: '',
      link1: '',
      discription1: '',
      title2: '',
      link2: '',
      discription2: '',
    };
  }

  onPressNext = () => {
    const { navigation } = this.props;
    const projectinfo = db.ref('Project Info');

    const {
      title1,
      link1,
      discription1,
      title2,
      link2,
      discription2,
      data,
    } = this.state;

    if (title1 && link1 && discription1 && title2 && link2 && discription2) {
      const dat = { title1, link1, discription1, title2, link2, discription2 };

      projectinfo.push(dat);
      this.setState({ title1: '' });
      this.setState({ link1: '' });
      this.setState({ discription1: '' });
      this.setState({ title2: '' });
      this.setState({ link2: '' });
      this.setState({ discription1: '' });
      navigation.navigate('Skills/Intrest');
    } else {
      alert('please fill all the mandatory feilds');
    }
  };

  render() {
    const {
      title1,
      link1,
      discription1,
      title2,
      link2,
      discription2,
      data,
    } = this.state;

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
          <Text style={styles.headerTxt2}>Project Info</Text>
        </View>
        <View style={styles.body}>
          <ScrollView contentContainerStyle={{ alignItems: 'center' }}>
            <View
              style={{
                justifyContent: 'center',
                borderBottomWidth: 1,
                bordeBottomrColor: 'grey',
                alignItems: 'center',
                marginBottom: 20,
              }}>
              <Text style={{ fontSize: 19, fontWeight: 'bold' }}>
                Project 1
              </Text>
              <TextInput
                style={[styles.txtInp, { borderWidth: 1.7 }]}
                placeholder={'Title'}
                onChangeText={(text) => {
                  this.setState({ title1: text });
                }}
              />
              <TextInput
                style={[styles.txtInp, { borderWidth: 1.7 }]}
                placeholder={'Link'}
                onChangeText={(text) => {
                  this.setState({ link1: text });
                }}
              />
              <TextInput
                style={[styles.txtInp, { borderWidth: 1.7 }]}
                placeholder={'Discription'}
                onChangeText={(text) => {
                  this.setState({ discription1: text });
                }}
              />
            </View>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                marginBottom: 12,
              }}>
              <Text style={{ fontSize: 19, fontWeight: 'bold' }}>
                Project 2
              </Text>
              <TextInput
                style={[styles.txtInp, { borderWidth: 1.7 }]}
                placeholder={'Title'}
                onChangeText={(text) => {
                  this.setState({ title2: text });
                }}
              />
              <TextInput
                style={[styles.txtInp, { borderWidth: 1.7 }]}
                placeholder={'Link'}
                onChangeText={(text) => {
                  this.setState({ link2: text });
                }}
              />
              <TextInput
                style={[styles.txtInp, { borderWidth: 1.7 }]}
                placeholder={'Discription'}
                onChangeText={(text) => {
                  this.setState({ discription2: text });
                }}
              />
            </View>
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
    margin: 15,
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
