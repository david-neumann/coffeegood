import "expo-dev-client";
import { Redirect } from "expo-router";
import "react-native-gesture-handler";
import "react-native-reanimated";

export default function AppEntry() {
  return <Redirect href="/home" />;
}
