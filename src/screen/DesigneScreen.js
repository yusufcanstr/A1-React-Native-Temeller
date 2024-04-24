import { StyleSheet, View } from "react-native";
import React from "react";

export default function DesigneScreen() {
  return (
    <View style={{ width: "100%", height: "100%" }}>
      <View style={{ width: "25%", height: "25%", backgroundColor: "red" }} />
      <View
        style={{
          width: "25%",
          height: "25%",
          backgroundColor: "blue",
          position: "absolute",
          right: 0,
          top: 0,
        }}
      />
      <View
        style={{
          width: "25%",
          height: "25%",
          backgroundColor: "green",
          position: "absolute",
          left: 0,
          bottom: 0,
        }}
      />
      <View
        style={{
          width: "25%",
          height: "25%",
          backgroundColor: "yellow",
          position: "absolute",
          right: 0,
          bottom: 0,
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "yellow",
  },
  box: {
    width: "25%",
    height: "25%",
    backgroundColor: "red",
  },
  mainView: {
    borderWidth: 2,
    borderColor: "black",
    margin: 14,
    borderRadius: 20,
    //alignItems: 'flex-start',
    //alignItems: 'flex-start',
    //flexDirection: 'column', // dikey bir şekilde dizer, 'row' ile de yatayda dizer.
    //justifyContent: 'flex-end', // en sağa çekmek için kullanılır. 'start' dersen en başa gelir.
    //justifyContent: 'center',
    height: 400,
  },
  mainTextOne: {
    borderWidth: 1,
    borderColor: "red",
    //margin: 40,
    marginHorizontal: 30,
    marginVertical: 10,
    padding: 20,
    position: "absolute",
    //bottom:20, // aşağı hizanladi ve ağaıdan 20 birim boşluk bıraktı.
    bottom: 0,
    left: 0,
    right: 0,
    top: 0,
    fontSize: 19,
    fontStyle: "italic",
    //alignSelf: 'flex-end',
    borderRadius: 10,
    //flex: 4, // %40 yer kaplar
  },
  /*
  mainTextTwo: {
    borderWidth: 1,
    borderColor: "red",
    //margin: 40,
    marginHorizontal: 30,
    marginVertical: 10,
    padding: 20,
    fontSize: 19,
    fontStyle: "italic",
    //alignSelf: 'flex-start',
    borderRadius: 10,
    //left: 20,
    //bottom: 20,
    
    //flex: 5, //  _%50 yer kaplar
  },
  mainTextThree: {
    borderWidth: 1,
    borderColor: "red",
    //margin: 40,
    marginHorizontal: 30,
    marginVertical: 10,
    padding: 20,
    fontSize: 19,
    fontStyle: "italic",
    //alignSelf: 'center',
    borderRadius: 10,
    //flex: 1, // %10 yer kaplar
  },
  */
});
