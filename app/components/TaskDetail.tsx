import { TaskDetailsNavigationProp } from "@/index";
import { useState } from "react";
import {
  Modal,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { useTaskStore } from "../store";
import { TaskBase } from "./Task";

export type TaskDetail = TaskBase & {
  description?: string;
  createdAt?: string;
};

export function TaskDetailScreen({ route }: TaskDetailsNavigationProp) {
  const taskDetails = useTaskStore((state) =>
    state.tasks.find((task) => task.id === route.params.taskId),
  );
  const setTaskDescription = useTaskStore((state) => state.setTaskDescription);
  const [description, setDescription] = useState("");
  const handleDescription = (taskId: string, text: string) => {
    setTaskDescription(taskId, text);
  };
  return (
    <View style={detailStyles.mainContainer}>
      <View style={detailStyles.titleContainer}>
        <Text style={detailStyles.titleLabel}>Task</Text>
        <Text style={detailStyles.title}>{taskDetails?.title}</Text>
      </View>
      <DescriptionComponent
        description={taskDetails?.description || ""}
        text={description}
        onTextChange={setDescription}
        setDescription={(desc: string) =>
          handleDescription(taskDetails?.id || "", desc)
        }
      />
    </View>
  );
}

interface DescriptionComponentProps {
  description: string;
  text: string;
  onTextChange: (text: string) => void;
  setDescription: (description: string) => void;
}
function DescriptionComponent({
  description,
  text,
  onTextChange,
  setDescription,
}: DescriptionComponentProps) {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={detailStyles.descriptionWrapper}>
      <Text style={detailStyles.sectionLabel}>Description</Text>
      {description ? (
        <View style={detailStyles.descriptionDisplayContainer}>
          <Text style={detailStyles.descriptionText}>{description}</Text>
          <Pressable
            onPress={() => setModalVisible(true)}
            style={({ pressed }) => [
              detailStyles.editButton,
              pressed && detailStyles.buttonPressed,
            ]}
          >
            <Text style={detailStyles.editButtonText}>Edit</Text>
          </Pressable>
          {modalVisible && (
            <DetailsModal
              modalClosed={() => setModalVisible(false)}
              onSave={(desc) => {
                setModalVisible(false);
                setDescription(desc);
              }}
            />
          )}
        </View>
      ) : (
        <View style={detailStyles.descriptionContainer}>
          <TextInput
            style={detailStyles.descriptionBox}
            value={text}
            onChange={(e) => onTextChange(e.nativeEvent.text)}
            placeholder="Enter task description..."
            placeholderTextColor="#999"
            multiline
            numberOfLines={4}
            textAlignVertical="top"
          />
          <Pressable
            onPress={() => setDescription(text)}
            style={({ pressed }) => [
              detailStyles.saveButton,
              pressed && detailStyles.buttonPressed,
            ]}
          >
            <Text style={detailStyles.saveButtonText}>Save Description</Text>
          </Pressable>
        </View>
      )}
    </View>
  );
}

interface DetailsModalProps {
  modalClosed: () => void;
  onSave: (description: string) => void;
}
function DetailsModal({ modalClosed, onSave }: DetailsModalProps) {
  const [description, setDescription] = useState("");
  return (
    <View style={styles.container}>
      <Modal
        visible={true}
        transparent={true}
        animationType="slide"
        onRequestClose={modalClosed}
      >
        <View style={styles.overlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Edit Description</Text>

            <TextInput
              style={styles.modalInput}
              value={description}
              onChange={(e) => setDescription(e.nativeEvent.text)}
              placeholder="Enter task description..."
              placeholderTextColor="#999"
              multiline
              numberOfLines={6}
              textAlignVertical="top"
            />
            <View style={styles.modalButtons}>
              <Pressable
                onPress={() => onSave(description)}
                style={({ pressed }) => [
                  styles.modalButton,
                  styles.saveModalButton,
                  pressed && styles.modalButtonPressed,
                ]}
              >
                <Text style={styles.saveModalButtonText}>Save</Text>
              </Pressable>
              <Pressable
                onPress={modalClosed}
                style={({ pressed }) => [
                  styles.modalButton,
                  styles.cancelModalButton,
                  pressed && styles.modalButtonPressed,
                ]}
              >
                <Text style={styles.cancelModalButtonText}>Cancel</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },

  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    alignItems: "center",
  },

  modalContent: {
    width: "85%",
    padding: 24,
    backgroundColor: "white",
    borderRadius: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },

  modalTitle: {
    fontSize: 20,
    fontWeight: "600",
    color: "#333",
    marginBottom: 16,
  },

  modalInput: {
    borderWidth: 1,
    borderColor: "#DDD",
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    backgroundColor: "#F9F9F9",
    minHeight: 120,
    marginBottom: 20,
  },

  modalButtons: {
    flexDirection: "row",
    gap: 12,
  },

  modalButton: {
    flex: 1,
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: "center",
  },

  saveModalButton: {
    backgroundColor: "#007AFF",
  },

  cancelModalButton: {
    backgroundColor: "#F5F5F7",
    borderWidth: 1,
    borderColor: "#DDD",
  },

  saveModalButtonText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "600",
  },

  cancelModalButtonText: {
    color: "#333",
    fontSize: 16,
    fontWeight: "600",
  },

  modalButtonPressed: {
    opacity: 0.7,
  },
});

const detailStyles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    padding: 20,
    backgroundColor: "#F5F5F7",
  },

  titleContainer: {
    backgroundColor: "#FFF",
    padding: 16,
    borderRadius: 12,
    marginBottom: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },

  titleLabel: {
    fontSize: 14,
    fontWeight: "600",
    color: "#999",
    marginBottom: 6,
    textTransform: "uppercase",
    letterSpacing: 0.5,
  },

  title: {
    fontSize: 24,
    fontWeight: "700",
    color: "#333",
  },

  descriptionWrapper: {
    flex: 1,
  },

  sectionLabel: {
    fontSize: 14,
    fontWeight: "600",
    color: "#999",
    marginBottom: 12,
    textTransform: "uppercase",
    letterSpacing: 0.5,
  },

  descriptionContainer: {
    backgroundColor: "#FFF",
    padding: 16,
    borderRadius: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },

  descriptionBox: {
    borderWidth: 1,
    borderColor: "#DDD",
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: 16,
    backgroundColor: "#F9F9F9",
    minHeight: 120,
    marginBottom: 16,
  },

  descriptionDisplayContainer: {
    backgroundColor: "#FFF",
    padding: 16,
    borderRadius: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },

  descriptionText: {
    fontSize: 16,
    color: "#333",
    lineHeight: 24,
    marginBottom: 16,
  },

  saveButton: {
    backgroundColor: "#007AFF",
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: "center",
  },

  saveButtonText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "600",
  },

  editButton: {
    backgroundColor: "#F5F5F7",
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#DDD",
  },

  editButtonText: {
    color: "#007AFF",
    fontSize: 16,
    fontWeight: "600",
  },

  buttonPressed: {
    opacity: 0.7,
  },
});
