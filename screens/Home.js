import React, { useState } from "react";
import { View, Text, SafeAreaView, ScrollView } from "react-native";
import Categories from "../components/Categories";
import Header from "../components/Header";
import RestaurantItem, { localRestaurants } from "../components/RestaurantItem";
import Searchbar from "../components/Searchbar";

export default function Home() {

  const [restaurantData, setRestaurantData] = useState(localRestaurants)

  return (
    <SafeAreaView style={{ backgroundColor: "#eee", flex: 1 }}>
      <View style={{ backgroundColor: "white", padding: 15, marginTop: 40 }}>
        <Header />
        <Searchbar />
      </View>
      <ScrollView>
        <Categories />
        <RestaurantItem restaurantData={restaurantData}/>
      </ScrollView>
    </SafeAreaView>
  );
}
