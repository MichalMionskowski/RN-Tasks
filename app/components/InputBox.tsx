import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import { Task } from "./Task";

interface Props {
  text: string;
  handleText: (text: string) => void;
  handleAddTask: (prop: Task) => void;
}

export default function InputBox({
  text,
  handleText,
  handleAddTask: handleAddPress,
}: Props) {
  return (
    <View style={styles.inputComponent}>
      <Text style={styles.inputText}>Write task name</Text>
      <TextInput
        style={styles.inputBox}
        value={text}
        onChange={(e) => handleText(e.nativeEvent.text)}
      />
      <Button title="go ons" onPress={() => handleAddPress({ title: text })} />;
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
