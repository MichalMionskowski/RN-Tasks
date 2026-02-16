import { NavigationContainer } from "@react-navigation/native";
import {
  createNativeStackNavigator,
  NativeStackScreenProps,
} from "@react-navigation/native-stack";
import HomeScreen from "./app/HomeScreen";
import { TaskDetailScreen } from "./app/components/TaskDetail";

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

export const ScreenNames = {
  Home: "Home",
  Details: "Details",
} as const;

type RootStackParamList = {
  [ScreenNames.Home]: undefined;
  [ScreenNames.Details]: DetailScreenNavigationProps;
};

type DetailScreenNavigationProps = {
  taskId: String;
};
type HomeNavigationProp = NativeStackScreenProps<
  RootStackParamList,
  typeof ScreenNames.Home
>;

type TaskDetailsNavigationProp = NativeStackScreenProps<
  RootStackParamList,
  typeof ScreenNames.Details
>;

export type { HomeNavigationProp, TaskDetailsNavigationProp };
