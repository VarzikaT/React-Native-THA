import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  StatusBar,
  TextInput,
  ToastAndroid,
} from 'react-native';

import History from './History';
import Button from './Button';
import Screen from './Screen';

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expression: '',
      actualExpression: '',
      result: '',
      history: [],
      ishistoryvisible: false,
      isEqualPress:false
    };
    this.HistoryRef = React.createRef();
  }

  openHistory = () => {
    this.setState({
      ishistoryvisible: true,
    });
  };

  closeHistory = () => {
    this.HistoryRef.current.slideOut(()=>{
    });
    setTimeout(() => {
        this.setState({
          ishistoryvisible: false,
        });
      }, 500);
  };

  getbuttonpressedValue = (buttonpressed) => {
    const { expression, actualExpression, result,isEqualPress } = this.state;
    let newExpression;
    let newActualExpression;
    if (isEqualPress) {
      newExpression = `${buttonpressed}`;
    } else {
      newExpression = `${expression}${buttonpressed}`;
    }
    this.setState({
      expression: newExpression,
    });

    let actualCharacter = buttonpressed;
    if (buttonpressed === '÷') {
      actualCharacter = '/';
    } else if (buttonpressed === '×') {
      actualCharacter = '*';
    } else if (buttonpressed === '−') {
      actualCharacter = '-';
    }
    if(isEqualPress){newActualExpression=`${actualCharacter}`}
    else{
     newActualExpression = `${actualExpression}${actualCharacter}`;}

    this.setState({
      actualExpression: newActualExpression,
      isEqualPress:false
    });
    try {
      this.setState({
        result: eval(newActualExpression).toString(),
      });
    } catch (e) {
      console.log(e);
    }
  };

  clearall = () => {
    this.setState({
      expression: '',
      actualExpression: '',
      result: '',
    });
  };

  deleteallcharacter = () => {
    //console.log("inside the delete character")
    const { expression, actualExpression } = this.state;

    const slicedexpression = expression.slice(0, expression.length - 1);
    const slicedactualExpression = actualExpression.slice(
      0,
      expression.length - 1
    );
    this.setState({
      expression: slicedexpression,
      actualExpression: slicedactualExpression,
    });
    console.log(slicedactualExpression);

    if (slicedactualExpression === '') {
      this.setState({
        result: '',
        expression: 'Calculator',
      });
    }
    try {
      this.setState({
        result: eval(slicedactualExpression).toString(),
      });
    } catch (e) {
      console.log(e);
    }
  };

  onEqualPress = () => {
    const { expression, result, history } = this.state;
    const hist = { expression, result };
    if (expression != '') {
      history.push(hist);
    }
    this.setState({
      historyarr: history,
      expression: result,
      result:'',
      isEqualPress:true
    });
    console.log(history);
  };

  clearHist = () => {
    this.setState({
      historyarr: [],
    });
  };
  render() {
    const {
      expression,
      result,
      ishistoryvisible,
      addhistory,
      history,
    } = this.state;

    return (
      <View style={styles.calculatorComponent}>
        <StatusBar barStyle="default" backgroundColor="darkred" />
        {ishistoryvisible ? (
          <View style={styles.historywrapper}>
            <History
              history={history}
              closeHistory={this.closeHistory}
              clearHist={this.clearHist}
              ref={this.HistoryRef}
            />
          </View>
        ) : null}
        <Screen
          expression={expression}
          result={result}
          //ClearAll = {this.ClearAll}
        />
        <Button
          getbuttonpressedValue={this.getbuttonpressedValue}
          clearall={this.clearall}
          deleteallcharacter={this.deleteallcharacter}
          addhistory={this.addhistory}
          openHistory={this.openHistory}
          onEqualPress={this.onEqualPress}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  calculatorComponent: {
    flex: 1,
  },
  historywrapper: {
    position: 'absolute',
    top: 5,
    zIndex: 3,
    height: '100%',
    width: '100%',
    backgroundColor: 'white',
  },
});

export default Calculator;
