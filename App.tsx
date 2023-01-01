import { NavigationContainer } from "@react-navigation/native"
import Home from './src/pages/home/Home';
import SignIn from './src/pages/auth/signin/SignIn';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AuthProvider from "./src/context/userContext";
import { Provider } from "react-redux";
import store from "./src/store";

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <Provider store={store}>
      <AuthProvider>
        <NavigationContainer>
          <Stack.Navigator initialRouteName='home' screenOptions={{ headerShown: false }}>
            <Stack.Screen name="home" component={Home} options={{ }}/>
            <Stack.Screen name="signin" component={SignIn} />
          </Stack.Navigator>
        </NavigationContainer>
      </AuthProvider>
    </Provider>
  );
}