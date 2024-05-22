import React, {FC} from 'react';
import {View, TouchableOpacity, Image, ScrollView} from 'react-native';

import {Screen, Label, InputText, Button, Text} from '../../../components';
import styles from './styles';
import SocialButton from './SocialButton';
import {useNavigation} from '@react-navigation/native';
import {Routes} from '../../../common';

const LoginScreen: FC = () => {
  const navigation = useNavigation();

  return (
    <Screen>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.contentContainer}>
        <View>
          <View style={styles.logoContainer}>
            <Label title="Log In to" size="lg" />
            <Image
              source={require('../../../assets/images/logo.jpeg')}
              style={styles.imglogin}
            />
          </View>
          <Text style={styles.description}>
            Welcome back! Get ready for live sports excitement. Stay connected
            and enjoy the game! Vamoss... 🔥
          </Text>
          <View style={styles.inputContainer}>
            <View style={styles.innerInput}>
              <Label title="Email or Phone number" size="sm" />
              <InputText placeholder="Enter your email or phone number" />
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
            <TouchableOpacity
              onPress={() =>
                // @ts-ignore
                navigation.navigate(Routes.ForgotPasswordEmailScreen)
              }>
              <Text style={styles.forgetPassword}>Forget Password?</Text>
            </TouchableOpacity>
          </View>
          <Button
            title="Log In"
            style={{marginVertical: 20}}
            onPress={() => {
              // @ts-ignore
              navigation.navigate(Routes.OtpScreen);
            }}
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
          <Text style={styles.signUpText}>Don’t have an account?</Text>
          <TouchableOpacity
            onPress={() => {
              // @ts-ignore
              navigation.navigate(Routes.SignUpScreen);
            }}>
            <Text style={styles.signUp}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </Screen>
  );
};

export default LoginScreen;
