import { Text, View,StyleSheet } from "react-native";
import { Link } from "expo-router";
export default function Setting() {
  return (
    <View style={styles.settingContainer}>
      <Text>Home Screen</Text>
      <Link href='/details'>Details</Link>
    </View>
  );
}

const styles = StyleSheet.create({
  settingContainer:{
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  }
});
