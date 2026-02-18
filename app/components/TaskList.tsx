import React from "react";
import { FlatList, View } from "react-native";
import { useTaskStore } from "../store/store";
import Task from "./Task";

interface taskListProp {
  navigateToDetails: (taskId: string) => void;
}

export default function TaskList({ navigateToDetails }: taskListProp) {
  const taskList = useTaskStore((state) => state.tasks);

  return (
    <View>
      <FlatList
        data={taskList}
        keyExtractor={(task) => task.id}
        renderItem={({ item }) => {
          return <Task task={item} onTaskClick={navigateToDetails}></Task>;
        }}
      />
    </View>
  );
}
