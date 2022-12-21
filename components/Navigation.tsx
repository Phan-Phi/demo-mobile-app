import { createStackNavigator } from "@react-navigation/stack";
import WelCome from "../containers/Home/WelCome";
import SignUp from "./SignUp";

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="WelCome" component={WelCome} />
      <Stack.Screen name="SignUp" component={SignUp} />
      {/* <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Notifications" component={Notifications} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Settings" component={Settings} /> */}
    </Stack.Navigator>
  );
}

export default MyStack;
