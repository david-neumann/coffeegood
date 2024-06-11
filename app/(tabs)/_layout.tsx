import { Tabs } from "expo-router";
import { Home, Coffee } from "lucide-react-native";
import React from "react";
import { Platform } from "react-native";

import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        headerShown: false,
        tabBarStyle: {
          height: 90,
          paddingHorizontal: 16,
        },
        tabBarLabelStyle: {
          fontFamily: Platform.select({
            ios: "LibreFranklin-Regular",
          }),
        },
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: "Home",
          tabBarIcon: ({ color, size }) => (
            <Home color={color} size={size} style={{ marginBottom: -8 }} />
          ),
        }}
      />
      <Tabs.Screen
        name="brews"
        options={{
          title: "Brews",
          tabBarIcon: ({ color, size }) => (
            <Coffee color={color} size={size} style={{ marginBottom: -8 }} />
          ),
        }}
      />
      <Tabs.Screen
        name="beans"
        options={{
          title: "Beans",
          tabBarIcon: ({ color, size }) => (
            <Coffee color={color} size={size} style={{ marginBottom: -8 }} />
          ),
        }}
      />
      <Tabs.Screen
        name="gear"
        options={{
          title: "Gear",
          tabBarIcon: ({ color, size }) => (
            <Coffee color={color} size={size} style={{ marginBottom: -8 }} />
          ),
        }}
      />
    </Tabs>
  );
}
