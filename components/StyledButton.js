import React from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";

const StyledButton = ({ type, title, onPress }) => {
  const backgroundColor = type === "primary" ? "#000" : "#fff";
  const textColor = type === "primary" ? "#fff" : "#000";

  return (
    <View style={styles.container}>
      <Pressable
        style={{ ...styles.button, backgroundColor }}
        onPress={onPress}
      >
        <Text style={{ ...styles.text, color: textColor }}>{title}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    padding: 10,
  },
  button: {
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
  },
  text: {
    fontSize: 12,
    fontWeight: "500",
    textTransform: "uppercase",
  },
});

export default StyledButton;
