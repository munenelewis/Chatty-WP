import * as React from "react";

import { ColorSchemeName, StyleSheet } from "react-native";
/**
 * If you are not familiar with React Navigation, check out the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
} from "@react-navigation/native";
import { MaterialCommunityIcons, Octicons } from "@expo/vector-icons";

import BottomTabNavigator from "./MainTabNavigator";
import Colors from "../constants/Colors";
import LinkingConfiguration from "./LinkingConfiguration";
import NotFoundScreen from "../screens/NotFoundScreen";
import { RootStackParamList } from "../types";
import { View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

Colors;
export default function Navigation({
  colorScheme,
}: {
  colorScheme: ColorSchemeName;
}) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === "dark" ? DarkTheme : DefaultTheme}
    >
      <RootNavigator />
    </NavigationContainer>
  );
}

// A root stack navigator is often used for displaying modals on top of all other content
// Read more here: https://reactnavigation.org/docs/modal
const Stack = createStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: Colors.light.tint,
          shadowOpacity: 0,
          elevation: 0,
        },
        headerTintColor: Colors.light.background,
        headerTitleAlign: "left",
        headerTitleStyle: {
          fontWeight: "bold",
        },

      }}
    >
      <Stack.Screen
        options={{
          title: "Whatsapp",
          headerRight: () => (
            <View style={styles.headerTopRightIcons}>
              <Octicons name="search" size={22} color={"white"} />
              <MaterialCommunityIcons
                name="dots-vertical"
                size={22}
                color={"white"}
              />
            </View>
          ),
        }}
        name="Root"
        component={BottomTabNavigator}
      />
      <Stack.Screen
        name="NotFound"
        component={NotFoundScreen}
        options={{ title: "Oops!" }}
      />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  headerTopRightIcons: {
    flexDirection: "row",
    width: 60,
    justifyContent: "space-between",
    marginRight: 10,
  },
});
