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
    fontSize: 17,
    color: Colors.black,
    marginVertical: 10,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  backIcon: {
    marginVertical: 5,
  },
  coverImage: {
    width: '100%',
    height: 250,
    resizeMode: 'cover',
    borderRadius: 10,
  },
  description: {
    fontSize: 15,
    color: Colors.gray,
    marginVertical: 10,
  },
  infoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  category: {
    color: Colors.primary,
    marginRight: 5,
    fontSize: 12,
  },
  date: {
    color: Colors.gray,
    marginRight: 5,
    fontSize: 12,
  },
  time: {
    color: Colors.gray,
    marginRight: 5,
    fontSize: 12,
  },
  author: {
    color: Colors.black,
    fontWeight: 'bold',
    fontSize: 14,
  },
  authorImage: {
    width: 40,
    height: 40,
    borderRadius: 15,
    marginRight: 10,
  },
  authorContainer: {
    flexDirection: 'column',
  },
  mainContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconImage: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
  },
  iconContainer: {
    borderRadius: 20,
    borderWidth: 1,
    borderColor: Colors.lightGray,
    padding: 6,
    marginLeft: 3,
  },
  iconMainContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});

export default styles;
