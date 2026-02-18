import Checkbox from "expo-checkbox";
import { StyleSheet, Text, View } from "react-native";
import { styles as mainStyles } from "../theme/styles";

interface TaskHeaderProps {
  title: string;
  taskId: string;
  completed: boolean;
  onCompletionChange: (taskId: string, newValue: boolean) => void;
}

export default function TaskHeader({
  title,
  taskId,
  completed,
  onCompletionChange,
}: TaskHeaderProps) {
  return (
    <View style={[styles.titleContainer, mainStyles.card]}>
      <View style={styles.titleWithCompletionWrapper}>
        <Text style={styles.titleLabel}>Task</Text>
        <Checkbox
          value={completed}
          onValueChange={(newValue) => {
            onCompletionChange(taskId, newValue);
          }}
        />
      </View>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  titleWithCompletionWrapper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  titleLabel: {
    fontSize: 14,
    fontWeight: "600",
    color: "#999",
    marginBottom: 6,
    textTransform: "uppercase",
    letterSpacing: 0.5,
  },
  titleContainer: {
    marginBottom: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "700",
    color: "#333",
  },
});
