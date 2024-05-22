import {StyleSheet} from 'react-native';
import {Colors} from '../../../common';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
  },
  img: {
    width: 100,
    height: 100,
  },
  inputContainer: {marginVertical: 10},
  accountContainer: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginTop: 10,
  },
  imgGoogle: {
    width: 30,
    height: 30,
    backgroundColor: 'white',
    marginRight: 10,
  },
  googleContainer: {
    borderRadius: 4,
    borderColor: Colors.grey,
    backgroundColor: Colors.white,
    borderWidth: 1,
    paddingVertical: 10,
    elevation: 3,
  },
  innerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imgVector: {
    width: '30%',
    height: 2,
  },
  divider: {
    marginVertical: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  forgetPassword: {
    color: Colors.primary,
    fontSize: 14,
  },
  contentContainer: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  imglogin: {
    width: 150,
    height: 80,
    objectFit: 'contain',
    marginLeft: 10,
  },
  logoContainer: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  description: {
    color: Colors.grey,
  },
  innerInput: {
    marginTop: 5,
    marginBottom: 5,
  },
  socialButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 5,
  },
  signUp: {
    color: Colors.primary,
    fontWeight: 'bold',
    marginLeft: 5,
  },
  signUpContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  signUpText: {
    color: Colors.black,
    fontWeight: '800',
  },
  width45: {
    width: '45%',
  },
});

export default styles;
