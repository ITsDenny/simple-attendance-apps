
import { Text, View,StyleSheet } from "react-native";
import { Link } from "expo-router";

export default function DetailScreen() {
  return (
    <View style={styles.detailContainer}>
      <Text>Details tes dari root</Text>
      <Link href='/index'>Back to home</Link>
    </View>
  );
}

const styles = StyleSheet.create({
  detailContainer:{
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  }
});
