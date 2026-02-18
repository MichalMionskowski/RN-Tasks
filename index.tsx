import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./app/navigation/HomeScreen";
import { RootStackParamList } from "./app/navigation/screens";
import { TaskDetailScreen } from "./app/navigation/TaskDetailScreen";

export default function App() {
  const Stack = createNativeStackNavigator<RootStackParamList>();
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Details" component={TaskDetailScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
