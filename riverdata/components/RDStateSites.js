// RDStateSites.js
import React, { Component } from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const RDStateSitesScreen = ({ route, navigation }) => {
  return (
  <>  
    <Text>The state paramenter passed in is: {route.params.name}. 
    This is where we will make an asynchronous API call to get the sites for the chosen stated.
    </Text>
    <Button
          title="Go to selected site gauge list"
          onPress={() =>
            navigation.navigate('Site Gauges', { gaugeId: '123' })
          }
        />
    </>
  );
};

export default RDStateSitesScreen;