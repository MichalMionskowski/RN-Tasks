import { Ionicons } from "@expo/vector-icons";
import Checkbox from "expo-checkbox";
import { Pressable, StyleSheet, Text, View } from "react-native";
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
  const deleteTask = useTaskStore((state) => state.deleteTask);

  return (
    <View style={styles.taskCard}>
      <Text style={[styles.text, task.completed && styles.completedText]}>
        {task.title}
      </Text>
      <Checkbox
        value={task.completed}
        onValueChange={() => setTaskCompleted(task.id, !task.completed)}
      />
      <Pressable onPress={() => deleteTask(task.id)} style={styles.deleteButton}>
        <Ionicons name="trash-outline" size={20} color="#FF3B30" />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  taskCard: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#FFFFFF",
    padding: 16,
    marginVertical: 6,
    marginHorizontal: 12,
    borderRadius: 12,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  text: {
    fontSize: 16,
    fontWeight: "500",
    flex: 1,
    color: "#333",
  },
  completedText: {
    textDecorationLine: "line-through",
    color: "#999",
    opacity: 0.6,
  },
  deleteButton: {
    marginLeft: 8,
    padding: 4,
  },
});
