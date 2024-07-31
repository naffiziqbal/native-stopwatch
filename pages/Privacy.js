import React from "react";
import { Text, View, StyleSheet, ScrollView } from "react-native";

export default function Privacy() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.content}>
        <Text style={styles.sectionTitle}>Introduction</Text>
        <Text style={styles.paragraph}>
          Welcome to Tempo StopWatch Privacy Policy. This policy outlines how we
          collect, use, and protect your personal information. By using our app,
          you agree to the practices described in this policy.
        </Text>

        <Text style={styles.sectionTitle}>Information We Collect</Text>
        <Text style={styles.paragraph}>
          We currently do not collect any personal information from you.
        </Text>

        <Text style={styles.sectionTitle}>Changes to This Privacy Policy</Text>
        <Text style={styles.paragraph}>
          We may update this Privacy Policy from time to time. We will notify
          you of any changes by posting the new Privacy Policy on this page.
        </Text>

        <Text style={styles.sectionTitle}>Contact Us</Text>
        <Text style={styles.paragraph}>
          If you have any questions about this Privacy Policy, please contact us
          at <Text style={styles.contactEmail}> f.nafiziqbal@gmail.com</Text>.
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  content: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  paragraph: {
    marginBottom: 15,
    lineHeight: 22,
  },
  contactEmail: {
    color: "blue",
    textDecorationLine: "underline",
  },
});
