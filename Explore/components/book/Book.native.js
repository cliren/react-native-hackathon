import React, {
  Component,
  View,
  Image,
  Text,
} from 'react-native';
import BookStyles from './BookStyles';
import Swiper from 'react-native-swiper';


class Book extends Component {

  render() {
    return (
      <Swiper showsButtons={false}>
        <View style={BookStyles.bookSlide1}>
          <Image
            style={BookStyles.bookImage}
            source={{uri: this.props.imageUrl}}
            />
        </View>
        <View style={BookStyles.bookSlide2}>
          <Text style={BookStyles.bookText}>
            {this.props.title}
          </Text>
          <Text style={BookStyles.bookText}>
            {this.props.authorName}
          </Text>
        </View>
      </Swiper>

    );
  }
}


export default Book;
