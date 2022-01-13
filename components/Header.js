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
  const [activeBtn, setActiveBtn] = useState('Pickup');

  return (
    <SafeAreaView>
      <View
        style={{ flexDirection: "row", alignSelf: "center", marginTop: 50 }}
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

const HeaderButton = ({ text, btnColor, textColor, setActiveBtn, activeBtn }) => (
  <View>
    <TouchableOpacity
      style={{
        backgroundColor: activeBtn === btnColor ? 'white' : 'black' ,
        paddingVertical: 8,
        paddingHorizontal: 18,
        borderRadius: 50,
      }}
      onPress={() => setActiveBtn(textColor)}
    >
      <Text style={{ color: activeBtn === btnColor ? 'black' : 'white', fontSize: 15, fontWeight: "bold" }}>
        {text}
      </Text>
    </TouchableOpacity>
  </View>
);
