import { Ionicons } from "@expo/vector-icons";
import Checkbox from "expo-checkbox";
import { Pressable, Text, View } from "react-native";
import { useTaskStore } from "../store";
import { styles } from "../theme/styles";
import { TaskColor } from "./ColorPicker";

export interface TaskProp {
  task: TaskBase;
  onTaskClick: (id: string) => void;
}

export type TaskBase = {
  id: string;
  title: string;
  completed: boolean;
  color?: TaskColor;
};

export default function Task({ task, onTaskClick }: TaskProp) {
  const setTaskCompleted = useTaskStore(
    (state) => state.setTaskCompletionStatus,
  );
  const deleteTask = useTaskStore((state) => state.deleteTask);

  return (
    <View
      style={[
        styles.taskCard,
        { backgroundColor: task.color?.hex || "#F1F5F7" },
      ]}
    >
      <Pressable onPress={() => onTaskClick(task.id)}>
        <Text style={[styles.text, task.completed && styles.completedText]}>
          {task.title}
        </Text>
      </Pressable>

      <Checkbox
        value={task.completed}
        onValueChange={() => setTaskCompleted(task.id, !task.completed)}
      />
      <Pressable
        onPress={() => deleteTask(task.id)}
        style={styles.deleteButton}
      >
        <Ionicons name="trash-outline" size={20} color="#FF3B30" />
      </Pressable>
    </View>
  );
}
