import { Button, StyleSheet, Text, View, FlatList } from "react-native";
import React, { useState } from "react";

export default function BoxScreen() {
  // Renklerin tutulacağı state'i tanımlıyoruz. İlk değeri boş bir dizi.
  const [colors, setColors] = useState([]);

  // Rastgele renk oluşturan fonksiyon. Her çağrıldığında farklı bir renk döndürür.
  const randomColor = () => {
    const red = Math.floor(Math.random() * 256); // Kırmızı bileşen için rastgele bir değer (0-255)
    const green = Math.floor(Math.random() * 256); // Yeşil bileşen için rastgele bir değer (0-255)
    const blue = Math.floor(Math.random() * 256); // Mavi bileşen için rastgele bir değer (0-255)
    return `rgb(${red},${green},${blue})`; // Rastgele oluşturulan renk değeri (rgb formatında)
  };

  return (
    <View>
      {/* 'Kutu Ekle' butonu, basıldığında 'colors' state'ine yeni bir rastgele renk ekler */}
      <Button
        title="Kutu Ekle"
        onPress={() => {
          setColors([...colors, randomColor()]);
        }}
      />
      {/* 'colors' dizisinin her öğesi için bir 'View' oluşturulur ve FlatList içinde listelenir */}
      <FlatList
        data={colors} // FlatList'e 'colors' dizisi verilir
        renderItem={({ item }) => {
          return (
            <View
              style={{
                height: 150, // Kutunun yüksekliği
                width: 150, // Kutunun genişliği
                backgroundColor: item, // Kutunun arka plan rengi
                marginVertical: 20, // Kutular arası dikey boşluk
              }}
            />
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({}); // Stil tanımlamaları için boş bir stil nesnesi
