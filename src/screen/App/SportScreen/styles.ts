import {StyleSheet} from 'react-native';
import {Colors} from '../../../common';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
  },
  contentContainer: {
    marginBottom: 100,
  },
  banner: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    borderRadius: 10,
  },
  bannerContainer: {
    marginTop: 20,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
    color: Colors.black,
    marginVertical: 10,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

export default styles;
