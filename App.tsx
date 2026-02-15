import { NavigationContainer } from "@react-navigation/native";
import {
  createNativeStackNavigator,
  NativeStackScreenProps,
} from "@react-navigation/native-stack";
import HomeScreen from "./app/HomeScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  const Stack = createNativeStackNavigator<RootStackParamList>();
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={() => <HomeScreen />} />
          <Stack.Screen name="Details" component={() => <></>} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

type RootStackParamList = {
  Home: undefined;
  Details: DetailScreenNavigationProps;
};

type DetailScreenNavigationProps = {
  taskId: String;
};
type TaskListNavigationProp = NativeStackScreenProps<
  RootStackParamList,
  "Home"
>;

type TaskDetailsNavigationProp = NativeStackScreenProps<
  RootStackParamList,
  "Details"
>;
