import {StyleSheet} from 'react-native';
import {Colors} from '../../../common';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
  },
  contentContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    marginBottom: 100,
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
  mainContainer: {
    backgroundColor: Colors.white,
    elevation: 5,
    marginVertical: 10,
    borderRadius: 10,
    marginHorizontal: 5,
  },
  groupHeading: {
    fontWeight: 'bold',
    fontSize: 15,
    color: Colors.black,
    width: '45%',
  },

  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    padding: 10,
  },
  w45: {width: '45%'},
});

export default styles;
