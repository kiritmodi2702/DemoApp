import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

const Plus = props => {
  const {onPress} = props;
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={{fontSize: 15}}>+</Text>
    </TouchableOpacity>
  );
};

export default Plus;

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
