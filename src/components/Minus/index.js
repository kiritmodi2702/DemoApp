import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

const Minus = props => {
  const {onPress} = props;
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text>-</Text>
    </TouchableOpacity>
  );
};

export default Minus;

const styles = StyleSheet.create({
  container: {
    width: 30,
    height: 30,
    borderRadius: 15,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
