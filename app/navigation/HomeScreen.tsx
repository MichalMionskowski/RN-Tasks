import { useState } from "react";
import { Text, View } from "react-native";
import InputBox from "../components/InputBox";
import TaskList from "../components/TaskList";
import useDeviceName from "../hooks/useDeviceName";
import { HomeNavigationProp, ScreenNames } from "./screens";

export default function HomeScreen({ navigation }: HomeNavigationProp) {
  const [newNoteText, setNewNoteText] = useState("");
  const deviceModel = useDeviceName();

  const navigateToDetail = (taskId: string) => {
    navigation.navigate(ScreenNames.Details, { taskId: taskId });
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "flex-start",
        backgroundColor: "#F5F5F7",
      }}
    >
      <InputBox text={newNoteText} handleText={setNewNoteText} />
      <TaskList navigateToDetails={navigateToDetail} />
      <Text>{deviceModel}</Text>
    </View>
  );
}
