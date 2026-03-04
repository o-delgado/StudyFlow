import { StyleSheet, Text, View } from "react-native";

export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to StudyFlow</Text>
      <Text style={styles.text}>Your study dashboard is coming next.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0F172A",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    color: "#E6F4FE",
    fontSize: 24,
    fontWeight: "bold",
  },
  text: {
    color: "#94A3B8",
    marginTop: 12,
  },
});