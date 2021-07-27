import React, { Component } from 'react';
import { Text, StyleSheet, View, Pressable, ScrollView, TouchableOpacity,Animated } from 'react-native';
import Constants from 'expo-constants';
const closetripple ={
  color:'black',
  borderless :'true',
}
class History extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slideIn: new Animated.Value(0),
    };
  }
  componentDidMount() {
    this.slideIn();
    // this.slideOut()
  }
  slideIn = () => {
    Animated.timing(this.state.slideIn, {
      toValue: 1,
      duration: 500,
    }).start();
  };

  slideOut = () => {
    Animated.timing(this.state.slideIn, {
      toValue: 0,
      duration: 500,
    }).start();
  };
  render() {
    const { closeHistory,clearHist,history} = this.props;
    return (
      <View style={styles.history}>
        <Animated.View
        style={{
          ...styles.history,
          bottom: this.state.slideIn.interpolate({
            inputRange: [0, 1],
            outputRange: ['100%', '0%'],
          }),
        }}>
        <View style={styles.historyContainer}>
          <View style={styles.header}>
            <Text style={styles.historyTxt}>History</Text>
            <Pressable style={styles.clearBtn} android_ripple={closetripple} onPress={() => {
                clearHist();
              }}>
              <Text style={styles.clearTxt}>Clear</Text>
            </Pressable>
          </View>
          <View style={styles.historyContent}>
         <ScrollView style={{ flex: 1 }}>
              {history.map((item) => {
                return (
                  <View style={styles.historyItem}>
                    <Text style={styles.historyExpression}>
                      {item.expression}
                    </Text>
                    <Text style={styles.historyResult}>= {item.result}</Text>
                  </View>
                );
              })}
            </ScrollView>
          </View>
          <View style={styles.close}>
            <Pressable android_ripple={closetripple}
              onPress={() => {
                closeHistory();
              }} >
              <Text style={styles.closeTxt}>Close</Text>
            </Pressable>
          </View>
        </View></Animated.View>
        <View style={styles.disabledArea}></View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  history: { flex: 1, paddingTop: Constants.statusBarHeight },
  historyContainer: {
    backgroundColor: 'black',
    flex: 7,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  disabledArea: {
    flex: 2,
    color:'lightgray',
  },
  header: {
    flex: 1,
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: 'white',
  },
  close: {
    flex: 1,
    justifyContent: 'center',
    borderTopWidth: 1,
    borderTopColor: 'white',
  },
  historyContent: {
    flex: 8,
  },
  historyTxt: {
    textAlign: 'left',
    margin: 3,
    fontStyle:'bold',
    color: 'white',
    fontSize: 28,
  },
  clearTxt: {
    width: '65%',
    color: 'lightgreen',
    fontSize: 20,
    textAlign: 'right',
    margin: 15,
  },
  clearBtn: {
    width: '90%',
  },
  closeTxt: {
    textAlign: 'center',
    color: 'white',
    fontSize: 25,
    fontStyle: 'italic',
  },
  historyItem: {
    borderBottomColor: 'lightgrey',
    borderBottomWidth: 1,
    padding: 8,

    marginHorizontal: '5%',
  },
  historyExpression: {
    color: 'white',
    fontSize: 17,
    textAlign: 'right',
    margin: 3,
  },
  historyResult: {
    color: 'lightgreen',
    fontSize: 22,
    textAlign: 'right',
    margin: 4,
  },
});
export default History;
