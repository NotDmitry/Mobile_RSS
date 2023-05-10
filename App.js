import React from "react";
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import HomeScreen from "./components/screens/HomeScreen";
import PostWebView from "./components/screens/PostWebView";


const Stack = createNativeStackNavigator();

export default function App() {

  return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">

          <Stack.Screen
              name="Home"
              component={HomeScreen}
              options={{
                title: "News",
                headerStyle: {
                  backgroundColor: "#d929ef"
                },
                headerTitleAlign: "center",
                headerTintColor: "#fff",
                headerTitleStyle: {
                  fontWeight: "500",
                  fontSize: 24,
                },
              }}
          />

          <Stack.Screen
              name="PostWebView"
              component={PostWebView}
              options={{
                title: "Choose feed",
                headerStyle: {
                  backgroundColor: "#d929ef"
                },
                headerTitleAlign: "center",
                headerTintColor: "#fff",
                headerTitleStyle: {
                  fontWeight: "500",
                  fontSize: 24,
                },
              }}
          />

        </Stack.Navigator>
      </NavigationContainer>
  );

}
