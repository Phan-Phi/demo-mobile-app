import React from "react";
import { ScrollView, useWindowDimensions, View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./containers/Home/Home";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Register from "./screens/Register/Register";
import Navigation from "./components/Navigation";
import Icon from "react-native-vector-icons/FontAwesome5";

const Tab = createBottomTabNavigator();

const App = () => {
  const { height, width, scale, fontScale } = useWindowDimensions();

  return (
    // <ScrollView>
    //   <View>
    //     <Text>sadasd</Text>
    //   </View>
    //   <Navigation />
    // </ScrollView>

    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: (el) => {
            console.log("🚀 ~ file: App.js:37 ~ App ~ el", el);
            let iconName = "home";
            if (route.name === "Home") {
              iconName = el.focused ? "home" : "home";
            }
            if (route.name === "Register") {
              iconName = el.focused ? "registered" : "registered";
            }
            return <Icon name={iconName} size={18} color={el.color} />;
          },
        })}
      >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Register" component={Register} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
