import * as math from 'mathjs';
import { operationChars } from './validate-input';

function TimeStringToNumber(timeString: string) {
  let result = timeString;

  if (+result) {
    return math.evaluate(result);
  }

  result = result.replaceAll('d', '*86400+');
  result = result.replaceAll('h', '*3600+');
  result = result.replaceAll('m', '*60+');
  result = result.replaceAll('s', '*1+');

  return math.evaluate(result.substr(0, result.length - 1));
}

export default function EquationToSeconds(preparedEquations: string[]) {
  const preparedEquation = preparedEquations;

  preparedEquation.forEach((item, index) => {
    if (!operationChars.includes(item)) {
      preparedEquation[index] = TimeStringToNumber(item);
    }
  });

  return Math.round(math.evaluate(preparedEquation.join('')));
}
