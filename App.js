import React from "react";
import { useWindowDimensions } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./containers/Home/Home";
import Detail from "./containers/Detail/Detail";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Register from "./screens/Register/Register";

const Tab = createBottomTabNavigator();

const App = () => {
  const { height, width, scale, fontScale } = useWindowDimensions();

  return (
    <NavigationContainer>
      <Tab.Navigator
      // screenOptions={({ route }) => {
      //   tabBarIcon: ({ focused: boolean, colour: string, size: number }) => {
      //     console.log("🚀 ~ file: App.js:21 ~ App ~ focused", focused);
      //     let iconName;
      //     if (route.name === "Home") {
      //       iconName = focused ? "ios-home" : "ios-home-outline";
      //     }
      //     return <Ionic name={iconName} size={size} colour={colour} />;
      //   };
      // }}
      // screenOptions={({ route }) => ({
      //   tabBarIcon: ({ focused: boolean, color: string, size: number }) => {
      //     console.log("🚀 ~ file: App.js:31 ~ App ~ focused", focused);
      //     let iconName;
      //     if (route.name === "Home") {
      //       iconName = focused ? "ios-home" : "ios-home-outline";
      //     }
      //     return <Ionic name={iconName} size={30} color={"red"} />;
      //   },
      // })}
      >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Detail" component={Detail} />
        <Tab.Screen name="Register" component={Register} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
