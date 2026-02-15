import { useState } from "react";
import { View } from "react-native";
import InputBox from "./components/InputBox";
import TaskList from "./components/TaskList";

export default function HomeScreen() {
  const [newNoteText, setNewNoteText] = useState("");

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "flex-start",

        backgroundColor: "#F5F5F7",
      }}
    >
      <InputBox text={newNoteText} handleText={setNewNoteText} />
      <TaskList />
    </View>
  );
}
