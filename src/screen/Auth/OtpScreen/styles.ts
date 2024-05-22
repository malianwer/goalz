import {StyleSheet} from 'react-native';
import {Colors} from '../../../common';

const styles = StyleSheet.create({
  contentContainer: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  logoContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 10,
  },
  description: {
    color: Colors.grey,
    textAlign: 'center',
  },
  email: {
    color: Colors.black,
    textAlign: 'center',
    fontWeight: 'bold',
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
  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  otpInput: {
    width: 50,
    height: 50,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 8,
    textAlign: 'center',
  },
  otpMainContainer: {
    marginVertical: 10,
    marginTop: 20,
  },
  backIcon: {
    marginTop: 20,
  },
});

export default styles;
