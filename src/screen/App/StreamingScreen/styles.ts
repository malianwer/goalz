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
  backIcon: {
    marginVertical: 5,
  },
  backgroundVideo: {
    width: '100%',
    height: 230,
  },
  textContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 5,
    marginBottom: 20,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
    color: Colors.black,
    marginBottom: 5,
  },
  text: {
    color: Colors.gray,
    fontWeight: '600',
    marginHorizontal: 3,
    fontSize: 12,
  },
  avatarContainer: {flexDirection: 'row', justifyContent: 'flex-end'},
  flexDirection: {flexDirection: 'row', justifyContent: 'space-between'},
  contentHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  ImageContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.white,
    paddingVertical: 10,
    borderRadius: 10,
    width: '95%',
    justifyContent: 'space-around',
    elevation: 3,
    margin: 10,
  },
  directionTeams: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  leagueLogo: {
    width: 25,
    height: 25,
    resizeMode: 'contain',
    marginHorizontal: 10,
  },
  titleScore: {
    fontWeight: 'bold',
    fontSize: 20,
    color: Colors.black,
    marginHorizontal: 5,
  },
  buttonContainerTwo: {
    flexDirection: 'row',
    borderRadius: 20,
    marginVertical: 5,
    padding: 5,
    backgroundColor: Colors.white,
    width: 100,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: Colors.black,
  },
  buttonTextTwo: {
    color: Colors.black,
    fontWeight: '600',
    fontSize: 14,
    marginLeft: 5,
  },
  iconContainerList: {
    borderRadius: 20,
    borderWidth: 1,
    borderColor: Colors.black,
    marginLeft: 3,
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconImage: {
    width: 15,
    height: 15,
    resizeMode: 'contain',
  },
});

export default styles;
