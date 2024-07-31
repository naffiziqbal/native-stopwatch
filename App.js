import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "./pages/Home";
import Privacy from "./pages/Privacy";
import AboutUs from "./pages/AboutUs";
import ActionBarImage from "./assets/icon.png";
import { Image } from "react-native";

const Stack = createNativeStackNavigator();

const myTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "transparent",
  },
};

export default function App() {
  return (
    <NavigationContainer theme={myTheme}>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            backgroundColor: "#50C878",
          },
          headerTintColor: "#fff",

          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      >
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            title: "Tempo StopWatch",
            headerTitleAlign: "start",
            headerRight: () => (
              <Image
                source={ActionBarImage}
                style={{
                  width: 40,
                  height: 40,
                  marginRight: 10,
                  borderRadius: 20,
                  padding: 5,
                }}
              />
            ),
          }}
        />
        <Stack.Screen
          name="Privacy Policy"
          component={Privacy}
          options={{
            title: "Privacy Policy",
            headerTitleAlign: "center",
            headerRight: () => (
              <Image
                source={ActionBarImage}
                style={{
                  width: 40,
                  height: 40,
                  marginRight: 10,
                  borderRadius: 20,
                  padding: 5,
                }}
              />
            ),
          }}
        />
        <Stack.Screen
          name="About Us"
          component={AboutUs}
          options={{
            title: "About Us",
            headerTitleAlign: "center",
            headerRight: () => (
              <Image
                source={ActionBarImage}
                style={{
                  width: 40,
                  height: 40,
                  marginRight: 10,
                  borderRadius: 20,
                  padding: 5,
                }}
              />
            ),
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
