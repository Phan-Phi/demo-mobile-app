import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  StatusBar,
  Button,
  ScrollView,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./containers/Home/Home";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Register from "./screens/Register/Register";
import Navigation from "./components/Navigation";
import Icon from "react-native-vector-icons/FontAwesome5";
import Demo from "./containers/Demo";
import { Container, NativeBaseProvider } from "native-base";
import MyStack from "./components/Navigation";

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <SafeAreaView style={[styles.container, { backgroundColor: "#6a51ae" }]}>
      <StatusBar barStyle="light-content" backgroundColor="#6a51ae" />
      <NativeBaseProvider>
        <NavigationContainer>
          <MyStack />

          {/* <Tab.Navigator
            defaultScreenOptions={Register}
            screenOptions={({ route }) => ({
              headerShown: false,
              tabBarIcon: (el) => {
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
            <Tab.Screen name="Demo" component={Demo} />
          </Tab.Navigator> */}
        </NavigationContainer>
      </NativeBaseProvider>
    </SafeAreaView>
  );
};

export default App;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#3B5323",
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    color: "black",
  },
});
