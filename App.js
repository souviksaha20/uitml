import { StatusBar, StyleSheet, Text, View } from "react-native";
import React, { Component } from "react";
import SPACING from "./app/config/SPACING";
import colors from "./app/config/colors";
import HomeScreen from "./app/screens/HomeScreen";
import CompanyScreen from "./app/screens/CompanyScreen";
import  feature1sorket from "./app/data/webSorketFeature1"


export default class APP extends Component{

  componentDidMount(){   
    console.log("yess");
  }

render(){
  return (
        <View
          style={{
            paddingHorizontal: SPACING * 2,
            flex: 1,
            backgroundColor: colors.black,
          }}
        >
          <HomeScreen />
          {/* <CompanyScreen /> */}
          <StatusBar barStyle="light-content" />
        </View>
      );
  }
}





const styles = StyleSheet.create({});