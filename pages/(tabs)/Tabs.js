import React from "react";
import { View, StyleSheet, Button, TouchableOpacity, Text } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function Tabs({ navigation }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Privacy Policy")}
      >
        <Text>
          <Ionicons
            name="information-circle-outline"
            size={40}
            color="#2fa192"
          />
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate("About Us")}
        style={styles.button}
      >
        <Text>
          <Ionicons name="shield-checkmark-outline" size={40} color="#2fa192" />
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    width: "100%",
    padding: 10,
  },
  button: {
    padding: 10,
    borderRadius: 5,
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
