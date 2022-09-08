import React, { useState } from 'react';
import { Keyboard, View } from 'react-native';
import { ReturnTypes } from '../utils/enums';
import { SubmitEquation } from '../utils/submit-equation';
import CalculatorPadComponent from '../components/calculator-pad';
import ReturnTypePadComponent from '../components/return-type-pad';
import calculatorView from '../styles/calculator-view';
import { useToast } from 'react-native-fast-toast';
import { TextInput } from 'react-native-paper';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';


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
      <View style={calculatorView.displayContainer}>
        <TextInput
          style={calculatorView.displayTextInput}
          mode='outlined'
          multiline={true}
          onChange={(e) => setEquation(e.nativeEvent.text)}
          value={equation}
          autoComplete='off'
          onFocus={() => Keyboard.dismiss()}
        />
      </View>
      <View style={calculatorView.historyPadContainer}>
        
      </View>
      <View style={calculatorView.returnTypePadContainer}>
        <ReturnTypePadComponent onClick={console.log}/>
      </View>
      <View style={calculatorView.calcPadContainer}>
        <CalculatorPadComponent onClick={handleClick} buttons={userType.buttons} />
      </View>
    </View>
  );
};

export default CalculatorView;