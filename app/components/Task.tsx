import Checkbox from "expo-checkbox";
import { StyleSheet, Text, View } from "react-native";
import { useTaskStore } from "../store";

export interface TaskProp {
  task: Task;
}

export type Task = {
  id: string;
  title: string;
  completed: boolean;
};

export default function Task({ task }: TaskProp) {
  const setTaskCompleted = useTaskStore(
    (state) => state.setTaskCompletionStatus,
  );

  return (
    <View style={styles.taskCard}>
      <Text>{task.title}</Text>
      <Checkbox
        value={task.completed}
        onValueChange={() => setTaskCompleted(task.id, !task.completed)}
      ></Checkbox>
    </View>
  );
}

const styles = StyleSheet.create({
  taskCard: {
    flex: 1,
    flexDirection: "row",
  },
});
