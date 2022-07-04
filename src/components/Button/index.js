import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import colors from '../../utils/colors';

const Button = props => {
  const {onPress, title, buttonStyle, disabled} = props;
  return (
    <TouchableOpacity
      disabled={disabled}
      style={[
        {
          alignItems: 'center',
          justifyContent: 'center',
          height: 40,
          backgroundColor: disabled ? 'gray' : colors.SECONDARY,
        },
        buttonStyle,
      ]}
      onPress={onPress}>
      <Text style={{color: colors.WHITE}}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;
