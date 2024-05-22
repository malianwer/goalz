import {StyleSheet} from 'react-native';
import {Colors} from '../../../common';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
  },
  iconContainer: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
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
    marginBottom: 5,
  },
  titleScore: {
    fontWeight: 'bold',
    fontSize: 20,
    color: Colors.black,
    marginHorizontal: 5,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  backIcon: {
    marginVertical: 5,
  },
  avatarImage: {
    width: 110,
    height: 110,
    resizeMode: 'contain',
    borderRadius: 60,
    marginLeft: 5,
    marginTop: 5,
  },
  coverImage: {
    width: '100%',
    height: 80,
    resizeMode: 'contain',
  },
  headingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  text: {
    color: Colors.gray,
    fontWeight: '600',
    marginHorizontal: 3,
    fontSize: 12,
  },
  textPoints: {
    color: Colors.black,
    fontWeight: 'bold',
    marginHorizontal: 3,
    fontSize: 12,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: -10,
    marginBottom: 15,
  },
  mainHeadingContainer: {
    marginHorizontal: 10,
  },
  imageContainer: {
    backgroundColor: Colors.white,
    borderRadius: 60,
    elevation: 5,
    width: 120,
    height: 120,
    marginLeft: 3,
  },

  buttonContainer: {
    flexDirection: 'row',
    borderRadius: 20,
    marginVertical: 5,
    elevation: 2,
    padding: 5,
    backgroundColor: Colors.primary,
    width: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: Colors.white,
    fontWeight: '600',
    fontSize: 14,
    marginLeft: 5,
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
  flexDirection: {flexDirection: 'row', justifyContent: 'space-between'},

  image: {
    width: '100%',
    height: 250,
    resizeMode: 'cover',
  },
  textContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 5,
    marginBottom: 20,
  },
  avatarContainer: {flexDirection: 'row', justifyContent: 'flex-end'},
  leagueLogo: {
    width: 25,
    height: 25,
    resizeMode: 'contain',
    marginHorizontal: 10,
  },
  ImageContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
    backgroundColor: Colors.lightgrey,
    paddingVertical: 10,
    borderRadius: 25,
    width: 150,
    justifyContent: 'center',
  },
  directionTeams: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  iconImage: {
    width: 15,
    height: 15,
    resizeMode: 'contain',
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
  contentHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

export default styles;
