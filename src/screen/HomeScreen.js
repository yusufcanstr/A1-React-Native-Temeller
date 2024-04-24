import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";

export default function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>HomeScreen</Text>
      <Button
        title="Go to Courses Screen"
        onPress={() => navigation.navigate("CoursesScreen")}
      />
      <Button
        title="Go to Courses Information"
        color={"red"}
        onPress={() => navigation.navigate("CoursesInformation")}
      />
      <Button
        title="Go to Counter Project"
        color={"blue"}
        onPress={() => navigation.navigate("CounterScreen")}
      />
      <Button
        title="Go to Box Project"
        color={"orange"}
        onPress={() => navigation.navigate("BoxScreen")}
      />
      <Button
        title="Go to Color Change Screen"
        color={"purple"}
        onPress={() => navigation.navigate("ColorChangeScreen")}
      />
      <Button
        title="Şifre Ekranına git"
        color={"black"}
        onPress={() => navigation.navigate("PasswordScreen")}
      />
      <Button
        title="Design Ekranı"
        color={"black"}
        onPress={() => navigation.navigate("DesigneScreen")}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
