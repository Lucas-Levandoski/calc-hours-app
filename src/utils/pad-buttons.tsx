import { PadButtonType } from '../types/pad-buttons';
import { PadButtonTypes } from './enums';

export const PaidPadButtons: PadButtonType[][] = [
  // row 1
  [
    { available: true, value: '+', type: PadButtonTypes.number}, 
    { available: true, value: '1', type: PadButtonTypes.number}, 
    { available: true, value: '2', type: PadButtonTypes.number},
    { available: true, value: '3', type: PadButtonTypes.number},
    { available: true, value: 'd', type: PadButtonTypes.operator},
  ],
  // row 2
  [
    { available: true, value: '-', type: PadButtonTypes.number},
    { available: true, value: '4', type: PadButtonTypes.number},
    { available: true, value: '5', type: PadButtonTypes.number},
    { available: true, value: '6', type: PadButtonTypes.number},
    { available: true, value: 'h', type: PadButtonTypes.operator},
  ],
  // row 3
  [
    { available: true, value: '*', type: PadButtonTypes.number},
    { available: true, value: '7', type: PadButtonTypes.number},
    { available: true, value: '8', type: PadButtonTypes.number},
    { available: true, value: '9', type: PadButtonTypes.number},
    { available: true, value: 'm', type: PadButtonTypes.operator},
  ],
  // row 4
  [
    { available: true, value: '/', type: PadButtonTypes.operator},
    { available: true, value: '(', type: PadButtonTypes.operator},
    { available: true, value: '0', type: PadButtonTypes.number},
    { available: true, value: ')', type: PadButtonTypes.operator},
    { available: true, value: 's', type: PadButtonTypes.operator},
  ]
];

export const FreePadButtons: PadButtonType[][] = [
  // row 1
  [
    { available: true, value: '+', type: PadButtonTypes.number}, 
    { available: true, value: '1', type: PadButtonTypes.number}, 
    { available: true, value: '2', type: PadButtonTypes.number},
    { available: true, value: '3', type: PadButtonTypes.number},
    { available: true, value: 'd', type: PadButtonTypes.operator},
  ],
  // row 2
  [
    { available: true, value: '-', type: PadButtonTypes.number},
    { available: true, value: '4', type: PadButtonTypes.number},
    { available: true, value: '5', type: PadButtonTypes.number},
    { available: true, value: '6', type: PadButtonTypes.number},
    { available: true, value: 'h', type: PadButtonTypes.operator},
  ],
  // row 3
  [
    { available: true, value: '*', type: PadButtonTypes.number},
    { available: true, value: '7', type: PadButtonTypes.number},
    { available: true, value: '8', type: PadButtonTypes.number},
    { available: true, value: '9', type: PadButtonTypes.number},
    { available: true, value: 'm', type: PadButtonTypes.operator},
  ],
  // row 4
  [
    { available: true, value: '/', type: PadButtonTypes.operator},
    { available: true, value: '(', type: PadButtonTypes.operator},
    { available: true, value: '0', type: PadButtonTypes.number},
    { available: true, value: ')', type: PadButtonTypes.operator},
    { available: true, value: 's', type: PadButtonTypes.operator},
  ]
];