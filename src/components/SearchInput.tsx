import React, {ReactNode, useEffect, useState} from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  type TextInputProps,
  Platform,
} from 'react-native';

import {Colors, Icons} from '../common';

interface Props extends TextInputProps {
  icon?: ReactNode;
  error?: string;
  touched?: boolean;
}

const SearchInput: React.FC<Props> = ({
  value,
  onChangeText,
  editable = true,
  error,
  style,
  onBlur,
  touched,
  borderRadius = 30,
  borderTopRightRadius = 30,
  borderBottomRightRadius = 30,
  width = '100%',
  ...otherProps
}) => {
  const [borderColor, setBorderColor] = useState<string>(
    error ? 'red' : Colors.grey,
  );
  const [borderWidth, setBorderWidth] = useState<number>(1);

  useEffect(() => {
    setBorderWidth(1);

    if (error && touched) {
      setBorderColor('red');
    } else {
      setBorderColor(Colors.grey);
    }
  }, [error]);

  const handleSetFocus = () => {
    setBorderColor(Colors.primary);
    setBorderWidth(2);
  };

  const handleOnBlur = () => {
    setBorderColor(Colors.grey);
    setBorderWidth(1);
    // @ts-ignore
    // onBlur();
  };

  return (
    <View>
      <View
        style={{
          ...styles.container,
          borderColor,
          borderWidth,
          borderRadius,
          borderTopRightRadius,
          borderBottomRightRadius,
          width,
          backgroundColor: !editable ? Colors.lightGray : Colors.white,
        }}>
        <Icons.AntDesign name="search1" size={20} />
        <TextInput
          placeholderTextColor={Colors.grey}
          value={value}
          onChangeText={onChangeText}
          style={styles.input}
          onFocus={handleSetFocus}
          onBlur={handleOnBlur}
          {...otherProps}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 45,
    alignSelf: 'center',
    borderRadius: 30,
    backgroundColor: 'pink',
    flexDirection: 'row',
    paddingHorizontal: 16,
    justifyContent: 'center',
    paddingVertical: Platform.OS === 'ios' ? 12 : 0,
    alignItems: 'center',
  },
  input: {
    flex: 1,
    color: Colors.black,
  },
});

export default SearchInput;
