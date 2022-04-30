import React from "react";
import { View, Text, Pressable } from "react-native";
import calculatorPad from "../styles/calculator-pad";
import { PadButtonType } from "../types/pad-buttons";

type props = {
  onClick: (value: string) => void;
  buttons: PadButtonType[][];
};

const CalculatorPadComponent = ({ onClick, buttons }: props) => {
  return (
    <View style={calculatorPad.container}>
      {
        buttons.map((row, i) => {
          return (
            <View key={i} style={calculatorPad.row}>
              {
                row.map((button, j) => {
                  return (
                    button.available ? 
                    (
                      <Pressable
                        key={j}
                        style={[calculatorPad.button, { backgroundColor: button.backgroundColor }]}
                        onPress={() => onClick(button.value)}
                      >
                        {button.value}
                      </Pressable>
                    ) : (
                      <Text 
                        key={j}
                        style={[calculatorPad.button, { backgroundColor: button.backgroundColor }]}
                      >
                        {button.value}
                      </Text>
                    )
                  )
                })
              }
            </View>
          )
        })
      }
    </View>
  );
}

export default CalculatorPadComponent;