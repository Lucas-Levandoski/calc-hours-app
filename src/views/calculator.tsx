import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, Pressable } from 'react-native';
import { ReturnTypes } from '../utils/enums';
import { SubmitEquation } from '../utils/submit-equation';
import CalculatorPadComponent from '../components/calculator-pad';
import { PadButtonType } from '../types/pad-buttons';
import { PaidPadButtons } from '../utils/pad-buttons';
import calculatorView from '../styles/calculator-view';
import { useToast } from 'react-native-fast-toast';


const CalculatorView = () => {
  const toast = useToast();
  const [equation, setEquation] = useState<string>('');
  const [builtButtons, setBuiltButtons] = useState<PadButtonType[][]>(); //TODO - make this a class

  const handleSubmit = (equation: string) => {
    try {
      setEquation(SubmitEquation(equation, ReturnTypes.days));
    } catch (e: any) {
      toast.show(e.message);
    }
  }

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
  }

  return (
    <View>
      <View style={calculatorView.resultContainer}>
        <Text style={calculatorView.resultInput}>
          {equation}
        </Text>
      </View>
      <View style={calculatorView.padContainer}>
        <CalculatorPadComponent onClick={handleClick} buttons={PaidPadButtons} />
      </View>
    </View>
  );
}

export default CalculatorView;