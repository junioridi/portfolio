import React from 'react';
import { createElement } from 'react-native-web';

export default function WebDatePicker({ value, onChange }: Props) {
  
  return createElement('input', {
    type: 'date',
    value: value,
    onInput: onChange,
  })

}
