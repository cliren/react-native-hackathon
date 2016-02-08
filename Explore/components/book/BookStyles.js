import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
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
    height: 200,
    width: 200
  },
  bookWrapper: {
  },
  bookSlide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB'
  },
  bookSlide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5'
  },
  bookText: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold'
  }
});
