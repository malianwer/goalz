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
  groupHeading: {
    fontWeight: 'bold',
    fontSize: 14,
    color: Colors.black,
    margin: 10,
    width: '45%',
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
  groupHeadingContainer: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    marginTop: 10,
  },
  w45: {
    width: '45%',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
    color: Colors.black,
    marginVertical: 5,
  },
  titleTwo: {
    fontWeight: 'bold',
    fontSize: 14,
    color: Colors.black,
    marginVertical: 5,
  },

  mainGraphContainer: {
    padding: 20,
    borderWidth: 1,
    borderColor: Colors.lightGray,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 2,
  },
  flexDirection: {flexDirection: 'row', justifyContent: 'center'},
  heading: {fontWeight: 'bold', fontSize: 20},
  value: {
    fontSize: 12,
    color: Colors.lightGray,
  },
});

export default styles;
