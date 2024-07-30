import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "./pages/Home";
import Privacy from "./pages/Privacy";
import AboutUs from "./pages/AboutUs";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Privacy Policy" component={Privacy} />
        <Stack.Screen name="About Us" component={AboutUs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
