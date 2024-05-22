import React, {useState} from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {CountryPicker} from 'react-native-country-codes-picker';
import {Colors} from '../common';
import {InputText} from '.';

const CountryCodePicker = () => {
  const [show, setShow] = useState(false);
  const [countryCode, setCountryCode] = useState('+92');

  return (
    <View>
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => setShow(true)}
          style={styles.codeCountry}>
          <Text style={styles.text}>{countryCode}</Text>
        </TouchableOpacity>
        <View style={styles.widthInput}>
          <InputText
            borderRadius={1}
            borderTopRightRadius={30}
            borderBottomRightRadius={30}
          />
        </View>
      </View>
      <CountryPicker
        show={show}
        pickerButtonOnPress={item => {
          setCountryCode(item.dial_code);
          setShow(false);
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  widthInput: {width: '80%'},
  codeCountry: {
    width: '20%',
    height: 50,
    padding: 10,
    borderWidth: 1,
    borderColor: Colors.grey,
    borderTopLeftRadius: 30,
    borderBottomLeftRadius: 30,
    marginTop: 5,
  },
  text: {
    color: Colors.black,
    fontSize: 12,
    textAlign: 'center',
    marginTop: 5,
  },
});

export default CountryCodePicker;
