import React from "react";
import {NavigationContainer} from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import DestinationSearchScreen from "../screens/DestinationSearch";
import CalenderScreen from "../screens/Calender";
import PostScreen from "../screens/PostScreen";
import HomeTabNavigator from "./HomeTabNavigator";

const Stack = createStackNavigator();

const Router = (props) => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={"Home"}
          component={HomeTabNavigator}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name={"Destination Search"}
          component={DestinationSearchScreen}
          options={{
            title: "Search for cars"
          }}
        />

        <Stack.Screen
          name={"Calender"}
          component={CalenderScreen}
          options={{
            title: "Trip Dates?"
          }}
        />

        <Stack.Screen
          name={"Post"}
          component={PostScreen}
          options={{
            title: "Vehicle Details"
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;