import React, { useState } from 'react';
import { Keyboard, View } from 'react-native';
import { ReturnTypes } from '../utils/enums';
import { SubmitEquation } from '../utils/submit-equation';
import CalculatorPadComponent from '../components/calculator-pad';
import calculatorView from '../styles/calculator-view';
import { useToast } from 'react-native-fast-toast';
import { Button, RadioButton, TextInput, withTheme } from 'react-native-paper';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { DotsThree, Backspace } from 'phosphor-react';


const CalculatorView = ({ theme }: any) => {
  const toast = useToast();
  const userType = useSelector((state: RootState) => state.userType.value);
  const [displayType, setDisplayType] = useState(ReturnTypes.hours);
  const [equation, setEquation] = useState<string>('');

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

  const backSpace = () => {
    setEquation(equation.slice(0, -1));
  }

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
        {/* <View style={calculatorView.displaySideMenuContainer}>
          <View style={[
            calculatorView.displaySideMenuContent, 
            { backgroundColor: theme.colors.accent }
          ]}>
            <Button 
              onPress={() => backSpace()}
            >
              <Backspace size={30} />
            </Button>
            <RadioButton 
              value={ReturnTypes.hours}
              status={displayType === ReturnTypes.hours ? 'checked' : 'unchecked'}
              onPress={() => setDisplayType(ReturnTypes.hours)}
            />
            <RadioButton 
              value={ReturnTypes.hours}
              status={displayType === ReturnTypes.hours ? 'checked' : 'unchecked'}
              onPress={() => setDisplayType(ReturnTypes.hours)}
            />
          </View>
        </View> */}
      </View>
      <View style={calculatorView.padContainer}>
        <CalculatorPadComponent onClick={handleClick} buttons={userType.buttons} />
      </View>
    </View>
  );
}

export default withTheme(CalculatorView);