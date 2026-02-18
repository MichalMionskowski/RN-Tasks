import { useEffect, useState } from "react";
import { Text, View } from "react-native";
import NativeGetDeviceName from "../app/NativeGetDeviceName";
import { HomeNavigationProp, ScreenNames } from "../index";
import InputBox from "./components/InputBox";
import TaskList from "./components/TaskList";

export default function HomeScreen({ navigation }: HomeNavigationProp) {
  const [newNoteText, setNewNoteText] = useState("");
  const [deviceModel, setDeviceModel] = useState<string>("");

  const navigateToDetail = (taskId: string) => {
    navigation.navigate(ScreenNames.Details, { taskId: taskId });
  };

  useEffect(() => {
    const fetchDeviceModel = async () => {
      try {
        const model = await NativeGetDeviceName?.getDeviceModel();
        setDeviceModel(model || "Unknown");
      } catch (error) {
        console.error("Failed to get device model:", error);
        setDeviceModel("Error loading");
      }
    };

    fetchDeviceModel();
  }, []);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "flex-start",
        backgroundColor: "#F5F5F7",
      }}
    >
      <InputBox text={newNoteText} handleText={setNewNoteText} />
      <TaskList navigateToDetails={navigateToDetail} />
      <Text>{deviceModel}</Text>
    </View>
  );
}
