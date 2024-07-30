import React from "react";
import { ScrollView, View, Text, StyleSheet, Image } from "react-native";

const AboutUs = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.sectionTitle}>Our Mission</Text>
      <Text style={styles.paragraph}>
        Welcome to Tempo StopWatch, your reliable companion for precise time
        tracking and management. Whether you’re a professional athlete, a coach,
        or simply need accurate timekeeping for your daily activities, Tempo
        StopWatch is here to ensure you stay on track.
      </Text>

      <Text style={styles.sectionTitle}>Features</Text>
      <Text style={styles.paragraph}>
        - Accurate Timing: Tempo StopWatch offers precise timing capabilities
        down to milliseconds, ensuring accuracy in every timing session.
      </Text>

      <Text style={styles.sectionTitle}>Meet the Team</Text>
      <View style={styles.teamMember}>
        <View style={styles.memberInfo}>
          <Text style={styles.memberName}>Nafiz Iqbal</Text>
          <Text style={styles.memberRole}>Co-Founder & CEO</Text>
          <Text style={styles.memberBio}>
            Nafiz is passionate about sports and technology, bringing over 1
            years of experience in app development and UI/UX design. He leads
            our team with a vision to innovate and simplify time tracking
            solutions.
          </Text>
        </View>
      </View>

      <View style={styles.teamMember}>
        <View style={styles.memberInfo}>
          <Text style={styles.memberName}>Emon Mustofa Nazmul</Text>
          <Text style={styles.memberRole}>Chief Technology Officer </Text>
          <Text style={styles.memberBio}>
            Emon oversees the technical development of Tempo StopWatch, ensuring
            the app runs smoothly and securely. With a background in software
            engineering, he’s dedicated to delivering a seamless user
            experience.
          </Text>
        </View>
      </View>

      <Text style={styles.sectionTitle}>Contact Us</Text>
      <Text style={styles.paragraph}>
        Have questions or feedback? We’d love to hear from you! Reach out to our
        team at <Text style={styles.contactEmail}>f.nafiziqbal@gmail.com</Text>
        or follow us on social media for updates and tips.
      </Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
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
  teamMember: {
    flexDirection: "row",
    marginBottom: 20,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginRight: 15,
  },
  memberInfo: {
    flex: 1,
  },
  memberName: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  memberRole: {
    fontSize: 16,
    marginBottom: 5,
  },
  memberBio: {
    fontSize: 14,
    lineHeight: 18,
  },
  contactEmail: {
    color: "blue",
    textDecorationLine: "underline",
  },
});

export default AboutUs;
