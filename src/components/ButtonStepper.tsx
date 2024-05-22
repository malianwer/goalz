import React, {FC} from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import {Text} from '.';
import {Colors} from '../common';

interface ButtonStepperProps {
  data: string[];
  selectedItem: number;
  onSelect: (value: number) => void;
}

const ButtonStepper: FC<ButtonStepperProps> = ({
  data,
  selectedItem,
  onSelect,
}) => {
  return (
    <View style={styles.innerContainer}>
      {data.map((i: string, index: number) => (
        <TouchableOpacity
          style={{
            borderRadius: 20,
            borderWidth: 1,
            borderColor:
              index === selectedItem ? Colors.primary : Colors.lightGray,
            padding: 2,
            backgroundColor:
              index === selectedItem ? Colors.primary : Colors.white,
          }}
          key={index}
          onPress={() => onSelect(index)}>
          <Text
            style={{
              ...styles.headingText,
              color: index === selectedItem ? Colors.white : Colors.gray,
            }}>
            {i}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  headingText: {
    fontSize: 12,
    fontWeight: '600',
    // lineHeight: 18,
    marginHorizontal: 10,
  },
  innerContainer: {
    flexDirection: 'row',
    // borderBottomWidth: 1,
    borderBottomColor: Colors.lightgrey,
    justifyContent: 'space-evenly',
  },
});

export default ButtonStepper;
