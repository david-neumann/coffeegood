import { StyleSheet } from "react-native";

import { ThemedText } from "@/components/ThemedText";
import { ThemedSafeAreaView } from "@/components/ThemedSafeAreaView";

export default function GearScreen() {
  return (
    <ThemedSafeAreaView style={styles.container}>
      <ThemedText>This is the Gear screen</ThemedText>
    </ThemedSafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
