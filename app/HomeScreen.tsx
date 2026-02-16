import { useState } from "react";
import { View } from "react-native";
import { HomeNavigationProp, ScreenNames } from "../index";
import InputBox from "./components/InputBox";
import TaskList from "./components/TaskList";

export default function HomeScreen({ navigation }: HomeNavigationProp) {
  const [newNoteText, setNewNoteText] = useState("");
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
    </View>
  );
}
