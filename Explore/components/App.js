import React, {
  Component,
} from 'react-native';
import {delay} from 'lodash/function'
import Splash from "./splash";
import BookList from "./books";
import { Provider } from 'react-redux/native';
import { createStore} from 'redux';
import reducers from './reducers';
const store = createStore(reducers);

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      loadApp: false
    };
  }

  componentWillMount() {
    delay(() => {
      this.setState({
        loadApp: true
      });
    }, 1000);
  }

  render() {
    if (this.state.loadApp === true) {
      return (
        <Provider store={store}>
          {() => <BookList />}
        </Provider>
      );
    } else {
      return <Splash />;
    }

  }
}
