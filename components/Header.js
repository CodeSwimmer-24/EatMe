import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaViewBase,
  SafeAreaView,
} from "react-native";

export default function Header() {
  const [activeBtn, setActiveBtn] = useState('Delivery');

  return (
    <SafeAreaView>
      <View
        style={{ flexDirection: "row", alignSelf: "center" }}
      >
        <HeaderButton
          text="Delivery"
          btnColor="black"
          textColor="white"
          activeBtn={activeBtn}
          setActiveBtn={setActiveBtn}
        />
        <HeaderButton
          text="Pickup"
          btnColor="white"
          textColor="black"
          activeBtn={activeBtn}
          setActiveBtn={setActiveBtn}
        />
      </View>
    </SafeAreaView>
  );
}

const HeaderButton = ({ text, textColor, setActiveBtn, activeBtn }) => (
  <View>
    <TouchableOpacity
      style={{
        backgroundColor: activeBtn === textColor ? 'black' : 'white' ,
        paddingVertical: 8,
        paddingHorizontal: 18,
        borderRadius: 50,
      }}
      onPress={() => setActiveBtn(textColor)}
    >
      <Text style={{ color: activeBtn === textColor ? 'white' : 'black', fontSize: 15, fontWeight: "bold" }}>
        {text}
      </Text>
    </TouchableOpacity>
  </View>
);
