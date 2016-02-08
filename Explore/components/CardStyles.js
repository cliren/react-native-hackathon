import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'flex-start',
    flexDirection: 'row'
  },
  body: {
    flex: 1,
    paddingLeft:5,
    justifyContent: 'space-around',
    alignItems: 'flex-start',
    flexDirection: 'column'
  },
  footer: {
    flex: 1,
    paddingTop:5
  },
  image: {
    height: 100,
    width: 60
  }
});
