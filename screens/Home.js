import React, { useEffect, useState } from "react";
import { View, Text, SafeAreaView, ScrollView } from "react-native";
import Categories from "../components/Categories";
import Header from "../components/Header";
import RestaurantItem, { localRestaurants } from "../components/RestaurantItem";
import Searchbar from "../components/Searchbar";

export default function Home() {

  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    const url = 'https://api.edamam.com/api/food-database/v2/parser?app_id=3af4f842&app_key=f6ee723356228cdead909ed6c9c94645%09&ingr=chicken&nutrition-type=cooking';
    const fetchData = async() => {
      try {
        const response = await fetch(url);
        const json = await response.json();
        const res = json.hints;
        console.log(res,'hshhhhshshhs');
        setRestaurants(json)
      } catch(error){
        console.log('error',error)
      }
    } ;
    fetchData();
  },[]);

  return (
    <SafeAreaView style={{ backgroundColor: "#eee", flex: 1 }}>
      <View style={{ backgroundColor: "white", padding: 15, marginTop: 40 }}>
        {/* <Header /> */}
        <Searchbar />
      </View>
      <ScrollView>
        {/* <Categories /> */}
        {/* <RestaurantItem restaurantData={restaurants}/> */}
      </ScrollView>
    </SafeAreaView>
  );
}
