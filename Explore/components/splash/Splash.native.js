import React, {
  Component,
  View,
  Text
} from 'react-native';

class Splash extends Component {

  render() {
    return (
      <View
        style={{flex: 1, backgroundColor: '#246dd5', alignItems: 'center', justifyContent: 'center'}}>
        <Text style={{color: 'white', fontSize: 32}}>E X P L O R E</Text>
      </View>
    );
  }
}

export default Splash;