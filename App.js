import React, { Component,View } from 'react';
import RouterComp from './src/router';

// import {AsyncStorage } from 'react-native';
// import { PhoneHeight } from './src/components/config/env';
export default class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {

    return (
  
<Provider store={store}>
        <PersistGate persistor={persisStore} loading={null}>
          <RouterComp />
        </PersistGate>
      </Provider>


    )
  }
 }