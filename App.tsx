import { NavigationContainer } from "@react-navigation/native"
import Home from './src/pages/home/Home';
import SignIn from './src/pages/auth/signin/SignIn';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AuthProvider from "./src/context/userContext";
import { Provider } from "react-redux";
import store from "./src/store";
import Chat from "./src/pages/chat/Chat";
import Profile from "./src/pages/profile/Profile";
import SignUp from "./src/pages/auth/signup/SignUp";
import { StatusBar } from "react-native";

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <Provider store={store}>
      <StatusBar barStyle={"dark-content"} backgroundColor="#E5E5E5"/>
      <AuthProvider>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="signin" screenOptions={{ headerShown: false }}>
            <Stack.Screen name="home" component={Home} />
            <Stack.Screen name="signin" component={SignIn} />
            <Stack.Screen name="signup" component={SignUp} />
            <Stack.Screen name="chat" component={Chat} />
            <Stack.Screen name="profile" component={Profile} options={{ headerShown: true, title: "Profile" }} />
          </Stack.Navigator>
        </NavigationContainer>
      </AuthProvider>
    </Provider>
  );
}