import { useState } from "react";
import { View } from "react-native";
import InputBox from "./components/InputBox";
import TaskList from "./components/TaskList";

export default function Index() {
  const [newNoteText, setNewNoteText] = useState("");

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <InputBox text={newNoteText} handleText={setNewNoteText} />
      <TaskList />
    </View>
  );
}
