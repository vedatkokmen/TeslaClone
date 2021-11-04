import React from "react";
import { View, Text, StyleSheet, FlatList, Dimensions } from "react-native";
import CarItem from "./CarItem";

const data = [
  {
    name: "Model S",
    tagline: "Starting at $69,420",
    image: require("../assets/images/ModelS.jpeg"),
  },
  {
    name: "Model 3",
    tagline: "Order Online for",
    taglineCTA: "Touchless Delivery",
    image: require("../assets/images/Model3.jpeg"),
  },
  {
    name: "Model X",
    tagline: "Order Online for",
    taglineCTA: "Touchless Delivery",
    image: require("../assets/images/ModelX.jpeg"),
  },
  {
    name: "Model Y",
    tagline: "Order Online for",
    taglineCTA: "Touchless Delivery",
    image: require("../assets/images/ModelY.jpeg"),
  },
];

const CarsList = () => {
  return (
    <View>
      <FlatList
        data={data}
        keyExtractor={() => Math.random().toString()}
        renderItem={({ item }) => <CarItem car={item} />}
        snapToAlignment="start"
        decelerationRate="fast"
        snapToInterval={Dimensions.get("window").height}
        showsVerticalScrollIndicator={false}
      ></FlatList>
    </View>
  );
};

const styles = StyleSheet.create({});

export default CarsList;
