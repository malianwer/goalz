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
    marginBottom: 5,
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
  iconImage: {
    width: 25,
    height: 25,
    resizeMode: 'contain',
  },
  text: {
    color: Colors.black,
    fontWeight: '600',
    marginHorizontal: 5,
    fontSize: 12,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: -20,
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
  upperText: {
    color: Colors.gray,
    fontWeight: '600',
    marginHorizontal: 5,
    fontSize: 12,
    marginBottom: 3,
  },
  lowerText: {
    color: Colors.black,
    fontWeight: 'bold',
    marginHorizontal: 5,
    fontSize: 14,
  },
  infoContainer: {
    borderRadius: 8,
    overflow: 'hidden',
    margin: 10,
    elevation: 2,
    padding: 10,
    backgroundColor: Colors.white,
    width: 150,
  },
  infoContainerOverview: {
    borderRadius: 8,
    overflow: 'hidden',
    margin: 10,
    elevation: 2,
    padding: 10,
    backgroundColor: Colors.white,
    width: '95%',
  },
  infoContainerText: {
    borderRadius: 8,
    overflow: 'hidden',
    margin: 10,
    elevation: 2,
    padding: 10,
    backgroundColor: Colors.white,
    width: 80,
  },
  playerStats: {
    marginBottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  statsText: {
    color: Colors.black,
    fontWeight: 'bold',
    marginHorizontal: 5,
    fontSize: 14,
    marginTop: 10,
  },
  centerText: {
    textAlign: 'center',
    color: Colors.black,
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainChart: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    overflow: 'hidden',
    margin: 10,
    elevation: 2,
    padding: 10,
    backgroundColor: Colors.white,
  },

  innerChartText: {flexDirection: 'column', justifyContent: 'center'},
});

export default styles;
