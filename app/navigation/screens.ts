import { NativeStackScreenProps } from "@react-navigation/native-stack";

export const ScreenNames = {
  Home: "Home",
  Details: "Details",
} as const;

type RootStackParamList = {
  [ScreenNames.Home]: undefined;
  [ScreenNames.Details]: DetailScreenNavigationProps;
};

type DetailScreenNavigationProps = {
  taskId: string;
};
type HomeNavigationProp = NativeStackScreenProps<
  RootStackParamList,
  typeof ScreenNames.Home
>;

type TaskDetailsNavigationProp = NativeStackScreenProps<
  RootStackParamList,
  typeof ScreenNames.Details
>;

export type {
    HomeNavigationProp, RootStackParamList, TaskDetailsNavigationProp
};

