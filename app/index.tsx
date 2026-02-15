import { useState } from "react";
import { View } from "react-native";
import InputBox from "./components/InputBox";
import { Task } from "./components/Task";
import TaskList from "./components/TaskList";

export default function Index() {
  const [newNoteText, setNewNoteText] = useState("");
  const [tasklist, setTaskList] = useState<Task[]>([]);

  const handleAddTask = (task: Task) => {
    console.log(task);

    setTaskList((prev) => {
      console.log(prev);
      return [...prev, task];
    });
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <InputBox
        text={newNoteText}
        handleText={setNewNoteText}
        handleAddTask={handleAddTask}
      />
      <TaskList taskList={tasklist}></TaskList>
    </View>
  );
}
