import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import Information from "../../components/Information";

// rnfs kısa yolu ile ekranımızı oluştura biliriz. !

export default function CoursesInformation() {
  return (
    <ScrollView>
      <Information
        title="Beşiktaş"
        imageSource={require("../../assets/besiktas.png")}
        desc="Daha filimi güzel bir filimdir izlemenizi tavsiye ederim."
      />
      <Information
        title="Fenerbahçe"
        imageSource={require("../../assets/fenerbahce.jpg")}
        desc="Daha filimi güzel bir filimdir izlemenizi tavsiye ederim."
      />
      <Information
        title="Galatasaray"
        imageSource={require("../../assets/galatasaray.png")}
        desc="Daha filimi güzel bir filimdir izlemenizi tavsiye ederim."
      />
      <Information
        title="Trabzonspor"
        imageSource={require("../../assets/trabzonspor.png")}
        desc="Extraction filimi güzel bir filimdir izlemenizi tavsiye ederim."
      />
      <Information
        title="Başakşehir Spor"
        imageSource={require("../../assets/basaksehir.png")}
        desc="Joker filimi güzel bir filimdir izlemenizi tavsiye ederim."
      />
      <Information
        title="Konya Spor"
        imageSource={require("../../assets/konyaspor.png")}
        desc="Joker filimi güzel bir filimdir izlemenizi tavsiye ederim."
      />
      <Information
        title="İstanbul Spor"
        imageSource={require("../../assets/istanbulspor.png")}
        desc="Joker filimi güzel bir filimdir izlemenizi tavsiye ederim."
      />
      <Information
        title="Alanya Spor"
        imageSource={require("../../assets/alanya.png")}
        desc="Joker filimi güzel bir filimdir izlemenizi tavsiye ederim."
      />
      <Information
        title="Anakaragücü Spor"
        imageSource={require("../../assets/ankaragucu.png")}
        desc="Joker filimi güzel bir filimdir izlemenizi tavsiye ederim."
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({});
