import React, {
  Component,
  View,
  Text,
  ListView,
  Image,
  TouchableHighlight,
  TouchableOpacity
} from 'react-native';
import AppStyles from '../AppStyles';
import BookListStyles from './BookListStyles';
import {compact} from 'lodash';
import {getBooks} from '../service/BookService';

const { bindActionCreators } = require('redux');
const { connect } = require('react-redux/native');
const BookActions = require('../actions/BookActions');

const bookListDataSource = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

class BookList extends Component {

  constructor(props) {
    super(props);
  }

  renderBooks() {
    if (this.props.books) {
      return (
        <View>
          {this.props.books.map((book) => {
            return <Text>{book.name}</Text>;
          })}
        </View>
      );
    } else {
      return null;
    }
  }

  fetchBooks() {
    getBooks()
      .then((response) => response.json())
      .then((booksJson) => {
        this.props.loadBooks(compact(booksJson));
      })
      .catch((error) => {
        console.warn(error);
      });
  }

  componentDidMount() {
    this.fetchBooks();
  }

  renderBook(book) {
    return (
        <View style={BookListStyles.container}>
          <Image
            style={BookListStyles.bookImage}
            source={{uri: book.imageUrl}}
            />
          <View style={BookListStyles.rightContainer}>
            <Text style={BookListStyles.bookTitle}>{book.title}</Text>
          </View>
        </View>
    );


  }

  render() {
    return (
      <ListView
        style={AppStyles.listView}
        dataSource={bookListDataSource.cloneWithRows(this.props.books)}
        renderRow={(rowData) => this.renderBook(rowData)}
        />
    );
  }
}


function mapStateToProps(state) {
  return {
    books: state.book.books
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(BookActions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(BookList)