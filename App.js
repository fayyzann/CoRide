import { StatusBar } from "expo-status-bar";
import SplashScreen1 from "./screens/splashScreens/SplashScreen1";
import SplashScreen2 from "./screens/splashScreens/SplashScreen2";
import SplashScreen3 from "./screens/splashScreens/SplashScreen3";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "./screens/login-out-signupScreens/LoginScreen";
import SignupScreen from "./screens/login-out-signupScreens/SignupScreen";
import ForgotPassScreen from "./screens/login-out-signupScreens/ForgotPassScreen";
import HomeScreen from "./screens/homeScreens/HomeScreen";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Provider } from "react-redux";
import store from "./store/index";
import { useSelector } from "react-redux";
import SearchScreen from "./screens/homeScreens/SearchScreen";
import PassengerScreen from "./screens/passengerScreens/PassengerScreen";
import DriverScreen from "./screens/driverScreens/DriverScreen";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function SplashScreens() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="SplashScreen1"
        component={SplashScreen1}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SplashScreen2"
        component={SplashScreen2}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SplashScreen3"
        component={SplashScreen3}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

function AuthenticationScreens() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SignupScreen"
        component={SignupScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ForgotPassScreen"
        component={ForgotPassScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

function HomeScreens() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SearchScreen"
        component={SearchScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="PassengerScreen"
        component={PassengerScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="DriverScreen"
        component={DriverScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

function AuthenticationStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="SplashScreens"
        component={SplashScreens}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="AuthenticationScreens"
        component={AuthenticationScreens}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

function AuthenticatedStack() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="HomeScreens"
        component={HomeScreens}
        options={{ headerShown: false }}
      />
    </Drawer.Navigator>
  );
}

function Navigation() {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  return (
    <Stack.Navigator>
      {isAuthenticated ? (
        <Stack.Screen
          name="AuthenticatedStack"
          component={AuthenticatedStack}
          options={{ headerShown: false }}
        />
      ) : (
        <Stack.Screen
          name="AuthenticationStack"
          component={AuthenticationStack}
          options={{ headerShown: false }}
        />
      )}
    </Stack.Navigator>
  );
}

function Root() {
  return (
    <NavigationContainer>
      <Navigation />
    </NavigationContainer>
  );
}

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <Provider store={store}>
        <Root />
      </Provider>
    </>
  );
}
