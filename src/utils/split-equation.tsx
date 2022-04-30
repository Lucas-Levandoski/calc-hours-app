import CleanRawEquation from './clean-raw-equation';
import { operationChars } from './validate-input';

export default function SplitEquation(equation: string): string[] {
  let preparedEquation = `${CleanRawEquation(equation)}`;

  operationChars.forEach((char) => {
    preparedEquation = preparedEquation.replaceAll(char, `~${char}~`);
  });

  const resultEquation = preparedEquation.split('~');

  return resultEquation;
}
