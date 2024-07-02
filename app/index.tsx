import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native"; 

export default function Page() {
  const navigation = useNavigation(); 

  const handleNavigation = () => {
    // navigation.navigate(); 
  };

  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Text style={styles.title}>Connexus</Text>
        <Text style={styles.subtitle}>
          Your all-in-one app for campus news, lost and found, events, and more.
        </Text>
        <TouchableOpacity style={styles.button} onPress={handleNavigation}>
          <Text style={styles.buttonText}>Let's Get Started</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 24,
    backgroundColor: "beige",
  },
  main: {
    flex: 1,
    justifyContent: "center",
    maxWidth: 960,
    marginHorizontal: "auto",
    alignItems: "center", 
  },
  title: {
    fontSize: 64,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 36,
    color: "#38434D",
    textAlign: "center",
    marginTop: 24,
    marginBottom: 24,
  },
  button: {
    backgroundColor: "black",
    padding: 14,
    borderRadius: 8,
    marginTop: 24,
    minWidth: 200, 
    alignItems: "center", 
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
});
