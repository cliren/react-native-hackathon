import React, {
  StyleSheet,
  Component,
  View,
  Text
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#246dd5',
    alignItems: 'center',
    justifyContent: 'center'
  },
  splashText: {
    color: 'white',
    fontSize: 32
  }
});

class Splash extends Component {

  render() {
    return (
      <View
        style={styles.container}>
        <Text style={styles.splashText}>E X P L O R E</Text>
      </View>
    );
  }
}

export default Splash;