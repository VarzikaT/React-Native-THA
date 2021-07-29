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

export default class SkillsAndIntrest extends React.Component {
  constructor({ props }) {
    super(props);
    this.state = {
      data: [],
      skill1: '',
      skill2: '',
      skill3: '',
      intrest1: '',
      intrest2: '',
      intrest3: '',
    };
  }

  onPressNext = () => {
    const { navigation } = this.props;
    const {
      data,
      skill1,
      skill2,
      skill3,
      intrest1,
      intrest2,
      intrest3,
    } = this.state;
    const skillandintrest = db.ref('skillsandintrest');
    if (skill1 && skill2 && skill3 && intrest1 && intrest2 && intrest3) {
      const dat = { skill1, skill2, skill3, intrest1, intrest2, intrest3 };

      skillandintrest.push(dat);
      this.setState({ skill1: '' });
      this.setState({ skill2: '' });
      this.setState({ skill3: '' });
      this.setState({ intrest1: '' });
      this.setState({ intrest2: '' });
      this.setState({ intrest3: '' });
      navigation.navigate('Resume');
    } else {
      alert('please fill all the mandatory feilds');
    }
  };

  render() {
    const {
      data,
      skill1,
      skill2,
      skill3,
      intrest1,
      intrest2,
      intrest3,
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
          <Text style={styles.headerTxt2}>Skills/Intrest</Text>
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
              <Text style={{ fontSize: 19, fontWeight: 'bold' }}>Skills</Text>
              <TextInput
                style={[styles.txtInp, { borderWidth: 1.7 }]}
                placeholder={'Skill 1'}
                onChangeText={(text) => {
                  this.setState({ skill1: text });
                }}
              />
              <TextInput
                style={[styles.txtInp, { borderWidth: 1.7 }]}
                placeholder={'Skill 2'}
                onChangeText={(text) => {
                  this.setState({ skill2: text });
                }}
              />
              <TextInput
                style={[styles.txtInp, { borderWidth: 1.7 }]}
                placeholder={'skill 3'}
                onChangeText={(text) => {
                  this.setState({ skill3: text });
                }}
              />
            </View>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                marginBottom: 12,
              }}>
              <Text style={{ fontSize: 19, fontWeight: 'bold' }}>Intrest</Text>
              <TextInput
                style={[styles.txtInp, { borderWidth: 1.7 }]}
                placeholder={'Intrest 1'}
                onChangeText={(text) => {
                  this.setState({ intrest1: text });
                }}
              />
              <TextInput
                style={[styles.txtInp, { borderWidth: 1.7 }]}
                placeholder={'Intrest 2'}
                onChangeText={(text) => {
                  this.setState({ intrest2: text });
                }}
              />
              <TextInput
                style={[styles.txtInp, { borderWidth: 1.7 }]}
                placeholder={'Intrest 3'}
                onChangeText={(text) => {
                  this.setState({ intrest3: text });
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
