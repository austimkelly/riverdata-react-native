import React, {Component} from 'react';
import { StatusBar } from 'expo-status-bar';
import { FlatList, ActivityIndicator, StyleSheet, Button, Text, View, SafeAreaView, Alert } from 'react-native';

export default class App extends Component {
    constructor(props) {
      super(props);

      this.state = {
        data: [],
        isLoading: true
      };
    }

    
    _onPressButton() {
	console.debug("text");
      this.getMovies();
	alert(this.state.data);
	render() {
	      if (this.show) {
		  <View style={{ flex: 1, padding: 24 }}>
                      {this.state.isLoading ? <ActivityIndicator/> : (
                      <FlatList
                      data={this.state.data}
                      keyExtractor={({ id }, index) => id}
                      renderItem={({ item }) => (
                      return <Text>{item.title}, {item.releaseYear}</Text>
              )}
              />
            )}
          </View>)
	this.forceUpdate();
	window.location.reload(false);
	}


    async getMovies() {
      try {
        const response = await fetch('https://reactnative.dev/movies.json');
        const json = await response.json();
	console.debug(json);
        this.setState({ data: json.movies });
      } catch (error) {
        console.log(error);
      } finally {
        this.setState({ isLoading: false });
      }
    }

    componentDidMount() {
      this.getMovies();
    }
    
    render() {
	const {data, isLoading} = this.state;
      return (
       
 <View style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center"
          }}>
          <Text>Hello, world!</Text>

          <Button
            title="Top button"
            onPress={() => this._onPressButton()}
          />
          <Button
            title="Mid button"
            onPress={() => Alert.alert('Right button pressed')}
          />
          <Button
            title="Bottom button"
            onPress={() => Alert.alert('Bottom button pressed')}
          />
        </View>
        
       );
     }
};

