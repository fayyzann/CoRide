import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import { View, Image, Text } from "react-native";
import User from "./assets/images/user.png";
import SplashScreen1 from "./screens/splashScreens/SplashScreen1";
import SplashScreen2 from "./screens/splashScreens/SplashScreen2";
import SplashScreen3 from "./screens/splashScreens/SplashScreen3";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Ionicons from "react-native-vector-icons/Ionicons";
import LoginScreen from "./screens/login-out-signupScreens/LoginScreen";
import SignupScreen from "./screens/login-out-signupScreens/SignupScreen";
import ForgotPassScreen from "./screens/login-out-signupScreens/ForgotPassScreen";
import HomeScreen from "./screens/homeScreens/HomeScreen";
import {
  createDrawerNavigator,
  DrawerItemList,
} from "@react-navigation/drawer";
import { Provider } from "react-redux";
import store from "./store/index";
import { useSelector } from "react-redux";
import SearchScreen from "./screens/homeScreens/SearchScreen";
import PassengerScreen from "./screens/passengerScreens/PassengerScreen";
import DriverScreen from "./screens/driverScreens/DriverScreen";
import ProfileScreen from "./screens/profileScreens/ProfileScreen";
import EditProfileScreen from "./screens/profileScreens/EditProfileScreen";
import { useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useDispatch } from "react-redux";
import { authActions } from "./store/auth-slice";
import UserProfile from "./components/UserProfile";

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
  const firstTime = AsyncStorage.getItem("firstTime");
  const ifFirstTime = firstTime === "true";
  return (
    <Stack.Navigator>
      {!ifFirstTime  && (
        <Stack.Screen
          name="SplashScreens"
          component={SplashScreens}
          options={{ headerShown: false }}
        />
      )}
      {/* <Stack.Screen
        name="SplashScreens"
        component={SplashScreens}
        options={{ headerShown: false }}
      /> */}
      <Stack.Screen
        name="AuthenticationScreens"
        component={AuthenticationScreens}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
function ProfileScreens() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="EditProfileScreen"
        component={EditProfileScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

function AuthenticatedStack() {
  return (
    <Drawer.Navigator
      drawerContent={(props) => {
        return (
          <SafeAreaView>
            <UserProfile />
            <DrawerItemList {...props} />
          </SafeAreaView>
        );
      }}
      screenOptions={{
        drawerStyle: {
          backgroundColor: "#fff",
          width: "65%",
        },
      }}
    >
      <Drawer.Screen
        name="HomeScreens"
        component={HomeScreens}
        options={{
          headerShown: false,
          drawerItemStyle: {
            display: "none",
          },
        }}
      />
      <Drawer.Screen
        name="ProfileScreens"
        component={ProfileScreens}
        options={{
          headerShown: false,
          drawerLabel: "View Profile",
          drawerLabelStyle: {
            fontSize: 16,
            fontWeight: "bold",
            color: "#454545",
          },
          drawerIcon: ({ focused, size }) => (
            <Ionicons name="person" size={size} color="#454545" />
          ),
        }}
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
  const dispatch = useDispatch();
  useEffect(() => {
    const checkToken = async () => {
      const token = await AsyncStorage.getItem("Token");
      if (token) {
        dispatch(authActions.login(token));
      }
    };
    checkToken();
  }, []);
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
