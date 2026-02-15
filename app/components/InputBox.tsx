import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import { useTaskStore } from "../store";

interface Props {
  text: string;
  handleText: (text: string) => void;
}

export default function InputBox({ text, handleText }: Props) {
  const addTask = useTaskStore((state) => state.addTask);

  return (
    <View style={styles.inputComponent}>
      <Text style={styles.inputText}>Write task name</Text>
      <TextInput
        style={styles.inputBox}
        value={text}
        onChange={(e) => handleText(e.nativeEvent.text)}
      />
      <Button title="go ons" onPress={() => addTask({ title: text })} />
    </View>
  );
}

const styles = StyleSheet.create({
  inputText: {
    flex: 1,
  },
  inputBox: {
    flex: 2,
    borderWidth: 2,
    alignItems: "baseline",
    borderColor: "black",
  },

  inputComponent: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    paddingHorizontal: 10,
  },
});
