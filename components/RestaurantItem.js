import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";


export const localRestaurants = [
    {
        name: "Beachside Bar",
        image_url:
          "https://static.onecms.io/wp-content/uploads/sites/9/2020/04/24/ppp-why-wont-anyone-rescue-restaurants-FT-BLOG0420.jpg",
        categories:['Cafe','Bar'],
        price:'$$$',
        reviews:1233,
        rating:4.5
    },
    {
        name:"Farmhouse  thai pizza",
        image_url:'https://media.istockphoto.com/photos/top-view-table-full-of-food-picture-id1220017909?k=20&m=1220017909&s=170667a&w=0&h=4I_l8ZyiZ8sebPsRo6UpFmdrV-MZgEvxb3smE-TbgLE=',
        categories:['Cafe','Bar'],
        price:'$$$',
        reviews:1233,
        rating:4.5
    },
    {
        name:"Farmhouse kitchen thai pizza",
        image_url:'https://media.istockphoto.com/photos/top-view-table-full-of-food-picture-id1220017909?k=20&m=1220017909&s=170667a&w=0&h=4I_l8ZyiZ8sebPsRo6UpFmdrV-MZgEvxb3smE-TbgLE=',
        categories:['Cafe','Bar'],
        price:'$$$',
        reviews:1233,
        rating:4
    }
]

export default function RestaurantItem({restaurantData}) {
  return (
    <TouchableOpacity activeOpacity={1} style={{marginBottom:30}}>
          {restaurantData.map((items,index) => (
      <View style={{ marginTop: 10, padding: 15, backgroundColor: "white" }} key={index}>
              <RestaurantImage image={items.image_url}/>
              <RestaurantInfo name={items.name} rating={items.rating}  />
      </View>
          ))}
    </TouchableOpacity>
  );
}

const RestaurantImage = ({image}) => (
  <View>
    <Image
      source={{uri:image}}
      style={{ width: "100%", height: 180 }}
    />
    <TouchableOpacity style={{ position: "absolute", right: 20, top: 20 }}>
      <MaterialCommunityIcons name="heart-outline" size={25} color="white" />
    </TouchableOpacity>
  </View>
);

const RestaurantInfo = ({name,rating}) => (
  <View
    style={{
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      marginTop: 10,
    }}
  >
    <View>
      <Text style={{ fontSize: 15, fontWeight: "bold" }}>
       {name}
      </Text>
      <Text style={{ fontSize: 13, color: "gray" }}>30-45 : min</Text>
    </View>
    <View
      style={{
        backgroundColor: "#eee",
        height: 30,
        width: 30,
        alignItems: "center",
        borderRadius: 15,
        justifyContent: "center",
      }}
    >
      <Text>{rating}</Text>
    </View>
  </View>
);
