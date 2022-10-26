import React, { useEffect, useState } from 'react';
import { Button, View, Text, FlatList  } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function HomeScreen({ navigation }) {
  console.log(">>HomeScreen")
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
}

function DetailsScreen({ navigation }) {
  console.log(">>DetailsScreen")
  console.log(">>calling getMoviewFromApi function");
  var movies = getMoviesFromApi()
  console.log(">>called getMoviewFromApi function");
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
      <Button
        title="Loading movies . . . "
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}



const getMoviesFromApi = () => {
  return fetch('https://reactnative.dev/movies.json')
    .then((response) => response.json())
    .then((json) => {
      console.log("<<getMoviesFromApi OK");
      console.log(json.movies);
      return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
      <Button
        title= "loading moveis"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
    })
    .catch((error) => {
      console.log("<<getMoviesFromApi err");
      console.error(error);
    });
};

export default App;



