import React, { useState } from 'react';
import { Keyboard, View } from 'react-native';
import { useToast } from 'react-native-fast-toast';
import { TextInput } from 'react-native-paper';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { LinearGradient } from 'expo-linear-gradient';

import calculatorView from '../styles/calculator-view';

import { ReturnTypes } from '../utils/enums';
import { SubmitEquation } from '../utils/submit-equation';
import CalculatorPadComponent from '../components/calculator-pad';
import ReturnTypePadComponent from '../components/return-type-pad';
import HistoryPadComponent from '../components/history-pad';
import CalculatorDisplay from '../components/calculator-display';


const CalculatorView = () => {
  const toast = useToast();
  const userType = useSelector((state: RootState) => state.userType.value);
  const [equation, setEquation] = useState<string>('');

  const handleSubmit = (equation: string) => {
    try {
      setEquation(SubmitEquation(equation, ReturnTypes.days));
    } catch (e) {
      if(e instanceof Error) {
        toast.show(e.message);
      }

      console.error(e);
    }
  };

  const handleClick = (value: string) => {
    switch (value) {
      case '=':
        handleSubmit(equation);
        break;
      case 'c':
        setEquation('');
        break;
      default:
        setEquation(equation + value);
        break;
    }
  };

  return (
    <View style={calculatorView.content}>
      <View style={calculatorView.topContainer}>
        <View style={calculatorView.displayContainer}>
          <CalculatorDisplay onClick={console.log} />
        </View>
      </View>
      <LinearGradient 
        colors={['#A430FF', '#F318AD', '#FF2171']}
        style={calculatorView.hr}
        start={{x: 0, y: 1}}
        end={{x: 1, y: 1}}
      />
      <View style={calculatorView.bottomContainer}>
        <View style={calculatorView.historyPadContainer}>
          <HistoryPadComponent onClick={console.log}/>
        </View>
        <View style={calculatorView.returnTypePadContainer}>
          <ReturnTypePadComponent onClick={console.log}/>
        </View>
        <View style={calculatorView.calcPadContainer}>
          <CalculatorPadComponent onClick={handleClick} buttons={userType.buttons} />
        </View>
      </View>
    </View>
  );
};

export default CalculatorView;