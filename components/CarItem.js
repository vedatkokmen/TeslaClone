import React from "react";
import {
  Text,
  View,
  ImageBackground,
  StyleSheet,
  Dimensions,
} from "react-native";
import StyledButton from "./StyledButton";

const CarItem = (props) => {
  const { name, tagline, image, taglineCTA } = props.car;
  return (
    <View style={styles.carContainer}>
      <ImageBackground style={styles.image} source={image} />
      <View style={styles.titles}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.subtitle}>
          {tagline} <Text style={styles.subtitleCTA}>{taglineCTA}</Text>
        </Text>
      </View>
      <View style={styles.buttonContainer}>
        <StyledButton
          type="primary"
          title="Custom Order"
          onPress={() => console.warn("Custom order pressed")}
        />
        <StyledButton
          type="secondary"
          title="Existing Inventory"
          onPress={() => console.warn("Existing inventory pressed")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  carContainer: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
  titles: {
    marginTop: "30%",
    width: "100%",
    alignItems: "center",
  },
  title: {
    fontSize: 40,
    fontWeight: "500",
  },
  subtitle: {
    fontSize: 16,
    color: "#5c5e62",
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    position: "absolute",
  },
  buttonContainer: {
    position: "absolute",
    bottom: 70,
    width: "100%",
    alignItems: "center",
  },
  subtitleCTA: {
    fontSize: 16,
    textDecorationLine: "underline",
  },
});

export default CarItem;
