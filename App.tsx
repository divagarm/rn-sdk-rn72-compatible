/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SmartHomeSDK} from 'smarthome-sdk';
import {View} from 'react-native';

const App = () => {
  return (
    <View style={{flex: 1, paddingHorizontal: 16, backgroundColor: '#F3FAFF'}}>
      <SmartHomeSDK
        accessToken={'accessToken'}
        propertyId={'218351'}
        handleExpiredToken={() => {
          console.log('testing');
        }}
      />
    </View>
  );
};

export default App;
