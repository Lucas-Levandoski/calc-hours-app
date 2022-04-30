import { ReturnTypes } from "./enums";
import SecondsTo from "./seconds-to";
import SplitEquation from "./split-equation";
import ValidateInput from "./validate-input";


export const SubmitEquation = (calcInput: string, resultType: ReturnTypes): string => { 

  if (!calcInput) {
    throw new Error("Please enter an equation");
  }
  
  const preparedEquation = SplitEquation(calcInput);
  const error = ValidateInput(preparedEquation);
  
  if (error) {
    throw new Error(error);
  }
  
  const result = SecondsTo(preparedEquation, resultType);
  return result;
}
