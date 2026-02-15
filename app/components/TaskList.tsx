import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { useTaskStore } from "../store";
import Task from "./Task";

export default function TaskList() {
  const taskList = useTaskStore((state) => state.tasks);

  return (
    <View style={styles.taskColumn}>
      <FlatList
        data={taskList}
        keyExtractor={(task) => task.id}
        renderItem={({ item }) => {
          return <Task task={item}></Task>;
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  taskColumn: {
    flex: 5,
    flexDirection: "column",
    height: "100%",
    width: "100%",
  },
});
