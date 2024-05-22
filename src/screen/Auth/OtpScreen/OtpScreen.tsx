import React, {FC, useState} from 'react';
import {View, TouchableOpacity, ScrollView} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {Screen, Label, Button, Text} from '../../../components';
import styles from './styles';
import OTPTextView from 'react-native-otp-textinput';
import {Colors, Icons, Routes} from '../../../common';

// import {Routes} from '../../../common';

const OtpScreen: FC = () => {
  const navigation = useNavigation();
  const [otpValue, setOtpValue] = useState('123456');

  const handleOTPChange = (otp: any) => {
    setOtpValue(otp);
  };

  const handleSubmit = () => {
    // @ts-ignore
    console.log(otpValue, 'here');
    // @ts-ignore

    // navigation.navigate(Routes.SportScreen);
  };

  return (
    <Screen>
      <View style={styles.backIcon}>
        <Icons.AntDesign
          name="arrowleft"
          color={Colors.primary}
          size={30}
          onPress={() => navigation.goBack()}
        />
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.contentContainer}>
        <View>
          <View style={styles.logoContainer}>
            <Label title="Enter Verification Code" size="lg" />
          </View>
          <Text style={styles.description}>
            We’ve sent a verification code to the email
          </Text>
          <Text style={styles.email}>hi.everteam@gmail.com</Text>
          <View style={styles.otpMainContainer}>
            <OTPTextView
              containerStyle={styles.otpContainer}
              textInputStyle={styles.otpInput}
              handleTextChange={handleOTPChange}
              defaultValue={otpValue}
              inputCount={6}
              tintColor={Colors.primary}
            />
          </View>

          <View style={styles.signUpContainer}>
            <Text style={styles.signUpText}>Need a new code?</Text>
            <TouchableOpacity
              onPress={() => {
                // @ts-ignore
                // navigation.navigate(Routes.LoginScreen);
              }}>
              <Text style={styles.signUp}>Resend Code</Text>
            </TouchableOpacity>
          </View>
          <Button
            title="Verify"
            style={{marginVertical: 20}}
            onPress={() => {
              handleSubmit();
            }}
          />
        </View>
      </ScrollView>
    </Screen>
  );
};

export default OtpScreen;
