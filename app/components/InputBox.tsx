import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import { useTaskStore } from "../store";

interface Props {
  text: string;
  handleText: (text: string) => void;
}

export default function InputBox({ text, handleText }: Props) {
  const addTask = useTaskStore((state) => state.insertTask);

  return (
    <View style={styles.mainComponent}>
      <View style={styles.inputComponent}>
        <Text style={styles.inputText}>Write task name</Text>
        <TextInput
          style={styles.inputBox}
          value={text}
          onChange={(e) => handleText(e.nativeEvent.text)}
        />
      </View>

      <View style={styles.buttom}>
        <Button title="Add Task" onPress={() => addTask({ title: text })} />
      </View>
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
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 10,
  },

  mainComponent: {
    paddingHorizontal: 10,
    paddingBottom: 20,
  },

  buttom: {
    paddingHorizontal: 30,
  },
});
