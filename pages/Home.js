import React from "react";
import { View, StyleSheet, Button } from "react-native";
import Stopwatch from "./StopWatch";
import { StatusBar } from "expo-status-bar";
import Tabs from "./(tabs)/Tabs";

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <Stopwatch />
      <StatusBar style="auto" />
      <Tabs navigation={navigation} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
