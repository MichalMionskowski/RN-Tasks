import { Pressable, Text, TextInput, View } from "react-native";
import { useTaskStore } from "../store/store";
import { styles } from "../theme/styles";

interface Props {
  text: string;
  handleText: (text: string) => void;
}

export default function InputBox({ text, handleText }: Props) {
  const addTask = useTaskStore((state) => state.insertTask);

  return (
    <View style={styles.mainComponent}>
      <View style={styles.inputComponent}>
        <Text style={styles.inputText}>Task:</Text>
        <TextInput
          style={styles.inputBox}
          value={text}
          onChange={(e) => handleText(e.nativeEvent.text)}
          placeholder="Enter task name..."
          placeholderTextColor="#999"
        />
      </View>

      <Pressable
        style={({ pressed }) => [
          styles.button,
          pressed && styles.buttonPressed,
        ]}
        onPress={() => {
          if (text === "") return;
          handleText("");
          addTask({ title: text });
        }}
      >
        <Text style={styles.buttonText}>Add Task</Text>
      </Pressable>
    </View>
  );
}
