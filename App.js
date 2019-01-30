

import React, {Component} from "react";
import {Platform, StyleSheet, View,ScrollView, TextInput} from "react-native";

 import PlaceInput from './src/component/PlaceInput/PlaceInput';
import PlaceList from "./src/component/PlaceList/PlaceList";
import Picker from "./src/component/Picker";
import { Priority } from "./src/mockdata/Priority";

const machines = require("./src/mockdata/machines.json")
const faults = require("./src/mockdata/faults.json")
const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});


export default class App extends Component {
 state = {
   places: [],
   obj:{},
   object:{},
 }; 




placeAddedHandler = placeName => {

  this.setState(prevState => {
    return {
      places: prevState.places.concat(placeName)
    };
  });
};

placeDeletedHandler = index => {
  this.setState(prevState =>{
   return{
    places: prevState.places.filter((place,i) => {  
      
      return i !== index;
    })
};
  });
}


  render() {
    console.log(this.state.obj)
    return (
      <View style={styles.container}>
       {/* <PlaceInput onPlaceAdded={this.placeAddedHandler} />
       <ScrollView>
      <PlaceList places={this.state.places} 
      onItemDeleted={this.placeDeletedHandler}
      /> 
      </ScrollView> */}
      <Picker text="Makine Arızası Giriniz" data={machines} onPress={(obj)=>{this.setState({obj})}}></Picker>
      {
        this.state.obj.id && <View><Picker text="Arıza Tipini Giriniz" data={faults} onPress={(object)=>{this.setState({object})}} date>
        </Picker>

        {/* <Picker text="Öncelik Giriniz" data1={Priority} onPress={(data1) => {this.setState({data1})}} </Picker>  */}

        <TextInput style ={ {
          height: 40,
          margin:20,
          padding:10,
          borderColor:'gray',
          borderWidth: 1
        }}
        keyboardType='Aciklama'
        placeholder='Aciklamanizi Giriniz'
          /></View>
      }
     
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 30,
    backgroundColor: 'white',
  }
});
