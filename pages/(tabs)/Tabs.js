import React from "react";
import { View, StyleSheet, Button, TouchableOpacity, Text } from "react-native";

export default function Tabs({ navigation }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Privacy Policy")}
      >
        <Text style={styles.text}>Privacy policy</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate("About Us")}
        style={styles.button}
      >
        <Text style={styles.text}>About us</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    padding: 20,
  },
  button: {
    padding: 10,
    borderRadius: 5,
    width: "45%",
  },
  text: {
    zIndex: 1,
    color: "black",
    fontSize: 18,
    fontWeight: "700",
    textTransform: "uppercase",
    textDecorationColor: "black",
    textDecorationStyle: "solid",
    textDecorationLine: "underline",
    textAlign: "center",
  },
});
