import "expo-dev-client";
import { Redirect } from "expo-router";
import "react-native-gesture-handler";
import "react-native-reanimated";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function AppEntry() {
  return (
    <SafeAreaProvider>
      <Redirect href="/home" />
    </SafeAreaProvider>
  );
}
