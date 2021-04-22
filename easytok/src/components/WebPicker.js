import React from 'react';
import { createElement } from 'react-native-web';

const Option = ({
  label,
  value,
}) => createElement('option', {
  children: label,
  value,
});

export const WebPicker = ({
  style,
  currentValue,
  onChange,
  options,
}) => (
  createElement('select', {
    value: currentValue,
    className: style,
    onChange: (event) => onChange(event.target.value),
    children: options.map(option => (
      <Option key={`${option.label}_${option.value}`} {...option} />
    )),
  })
);


export default WebPicker;
