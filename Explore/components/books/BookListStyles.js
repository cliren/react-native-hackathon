import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
    paddingLeft: 5,
    paddingRight: 5,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    backgroundColor: '#F5FCFF',
    flexDirection: 'row'
  },
  bookTitle: {
    flex: 1,
    paddingLeft: 10
  },
  bookImage: {
    height: 60,
    width: 40
  }
});
