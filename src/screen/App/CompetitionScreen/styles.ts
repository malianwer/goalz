import {StyleSheet} from 'react-native';
import {Colors} from '../../../common';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
  },
  contentContainer: {
    marginTop: 10,
    marginBottom: 100,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
    color: Colors.black,
    marginVertical: 5,
  },
  groupHeading: {
    fontWeight: 'bold',
    fontSize: 18,
    color: Colors.black,
    margin: 10,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  mainContainer: {
    backgroundColor: Colors.white,
    elevation: 5,
    marginVertical: 10,
    borderRadius: 10,
    marginHorizontal: 5,
  },
  groupContainer: {
    marginBottom: 10,
  },
});

export default styles;
