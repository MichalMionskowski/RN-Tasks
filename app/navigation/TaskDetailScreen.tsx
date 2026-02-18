import {} from "@/index";
import React, { useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import ColorPicker from "../components/ColorPicker";
import TaskDescription from "../components/TaskDecription";
import TaskHeader from "../components/TaskHeader";
import { useTaskStore } from "../store/store";
import { styles as mainStyles } from "../theme/styles";
import { TaskDetailsNavigationProp } from "./screens";

export function TaskDetailScreen({ route }: TaskDetailsNavigationProp) {
  const taskDetails = useTaskStore((state) =>
    state.tasks.find((task) => task.id === route.params.taskId),
  );
  const setTaskDescription = useTaskStore((state) => state.setTaskDescription);
  const [description, setDescription] = useState("");
  const handleDescription = (taskId: string, text: string) => {
    setTaskDescription(taskId, text);
  };
  const setTaskCompleted = useTaskStore(
    (state) => state.setTaskCompletionStatus,
  );

  return (
    <ScrollView
      contentContainerStyle={[
        styles.mainContainer,
        { backgroundColor: taskDetails?.color?.hex || "#F1F5F7" },
      ]}
    >
      <TaskHeader
        title={taskDetails?.title || ""}
        taskId={taskDetails?.id || ""}
        completed={taskDetails?.completed || false}
        onCompletionChange={setTaskCompleted}
      />
      <TaskDescription
        description={taskDetails?.description || ""}
        text={description}
        onTextChange={setDescription}
        setDescription={(desc: string) =>
          handleDescription(taskDetails?.id || "", desc)
        }
      />
      <View style={mainStyles.card}>
        <ColorPicker taskId={taskDetails?.id || ""} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    justifyContent: "flex-start",
    rowGap: 20,
    paddingBottom: 30,
    flex: 1,
    padding: 20,
    backgroundColor: "#F1F5F7",
  },
});
