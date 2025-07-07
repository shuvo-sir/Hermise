import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Switch,
  SafeAreaView,
} from "react-native";

export default function Settings() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleSwitch = () => setIsDarkMode(!isDarkMode);

  const themeStyles = isDarkMode ? darkStyles : lightStyles;

  return (
    <SafeAreaView style={[styles.container, themeStyles.container]}>
      {/* Profile Section */}
      <View style={styles.profileBox}>
        <Image
          source={require("@/assets/images/shuvo.jpg")}
          style={styles.avatar}
        />
        <View>
          <Text style={[styles.name, themeStyles.text]}>Shuvo Halder</Text>
          <Text style={[styles.email, themeStyles.text]}>shuvo@gmail.com</Text>
        </View>
      </View>

      {/* Dark Mode Toggle */}
      <View style={styles.toggleBox}>
        <Text style={[styles.toggleText, themeStyles.text]}>Dark Mode</Text>
        <Switch value={isDarkMode} onValueChange={toggleSwitch} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "flex-start",
  },
  profileBox: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 40,
    marginBottom: 30,
  },
  avatar: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginRight: 15,
  },
  name: {
    fontSize: 20,
    fontWeight: "600",
  },
  email: {
    fontSize: 14,
    color: "#777",
  },
  toggleBox: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 20,
  },
  toggleText: {
    fontSize: 16,
  },
});

// Light Theme
const lightStyles = StyleSheet.create({
  container: {
    backgroundColor: "#f9f9f9",
  },
  text: {
    color: "#111",
  },
});

// Dark Theme
const darkStyles = StyleSheet.create({
  container: {
    backgroundColor: "#121212",
  },
  text: {
    color: "#f0f0f0",
  },
});
