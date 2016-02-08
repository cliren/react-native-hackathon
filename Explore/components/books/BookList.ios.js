import React, {
  Component,
  StyleSheet,
  NavigatorIOS
} from 'react-native';
import AppStyles from '../AppStyles';
import BookList from "./BookList.native";

let styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

class BookListWithNavigator extends Component {
  render() {
    return (
      <NavigatorIOS
        style={styles.container}
        initialRoute={{
            title: 'Recent Books',
            component: BookList
        }}/>
    );
  }
}

export default BookListWithNavigator;