import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { Task } from "./Task";

interface Props {
  taskList: Task[];
}

export default function TaskList({ taskList }: Props) {
  return (
    <View style={styles.taskColumn}>
      <FlatList
        data={taskList}
        keyExtractor={(task) => task.title}
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
