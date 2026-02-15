import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { useTaskStore } from "../store";

export default function TaskList() {
  const taskList = useTaskStore((state) => state.tasks);

  return (
    <View style={styles.taskColumn}>
      <FlatList
        data={taskList}
        keyExtractor={(task) => task.id}
        renderItem={({ item }) => {
          return <Text>{item.title}</Text>;
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  taskColumn: {
    flex: 1,
    flexDirection: "column",
  },
});
