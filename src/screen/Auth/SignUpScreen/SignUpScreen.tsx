import React, {FC} from 'react';
import {View, TouchableOpacity, Image, ScrollView} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {
  Screen,
  Label,
  InputText,
  Button,
  Text,
  Checkbox,
} from '../../../components';
import styles from './styles';
import SocialButton from './SocialButton';
import {Routes} from '../../../common';
import CountryCodePicker from '../../../components/CountryCodePicker';

const SignUpScreen: FC = () => {
  const navigation = useNavigation();

  return (
    <Screen>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.contentContainer}>
        <View>
          <View style={styles.logoContainer}>
            <Label title="Sign Up to" size="lg" />
            <Image
              source={require('../../../assets/images/logo.jpeg')}
              style={styles.imglogin}
            />
          </View>
          <Text style={styles.description}>
            Welcome! Sign up and never miss a moment of the action. Let's get
            started! Vamoss... 🔥
          </Text>
          <View style={styles.inputContainer}>
            <View style={styles.innerInput}>
              <Label title="Full Name" size="sm" />
              <InputText placeholder="Enter your name" />
            </View>
            <View style={styles.innerInput}>
              <Label title="Phone Number" size="sm" />
              <CountryCodePicker />
            </View>
            <View style={styles.innerInput}>
              <Label title="Email" size="sm" />
              <InputText placeholder="Enter your email" />
            </View>
            <View style={styles.innerInput}>
              <Label title="Password" size="sm" />
              <InputText
                placeholder="Enter your password"
                secureTextEntry={true}
              />
            </View>
          </View>
          <View style={styles.row}>
            <Checkbox
              value={true}
              onChange={() => {}}
              title="I agree with Mabol Live Terms of Service and Privacy Policy."
            />
          </View>
          <Button
            title="Create Account"
            style={{marginVertical: 20}}
            onPress={() => {}}
          />
        </View>
        <View style={styles.socialButtonContainer}>
          <View style={styles.width45}>
            <SocialButton
              onPress={() => {}}
              img={require('../../../assets/images/Google.png')}
              text="Google"
            />
          </View>
          <View style={styles.width45}>
            <SocialButton
              onPress={() => {}}
              img={require('../../../assets/images/Facebook.png')}
              text="Facebook"
            />
          </View>
        </View>
        <View style={styles.signUpContainer}>
          <Text style={styles.signUpText}>Already have an account?</Text>
          <TouchableOpacity
            onPress={() => {
              // @ts-ignore
              navigation.navigate(Routes.LoginScreen);
            }}>
            <Text style={styles.signUp}>Login</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </Screen>
  );
};

export default SignUpScreen;
