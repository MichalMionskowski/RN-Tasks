import { StyleSheet, Text, TextInput, View } from "react-native";

interface Props {
  text: string;
  handleText: (text: string) => void;
}

export function InputBox({ text, handleText }: Props) {
  return (
    <View style={styles.inputComponent}>
      <Text style={styles.inputText}>Write task name</Text>
      <TextInput
        style={styles.inputBox}
        value={text}
        onChange={(e) => handleText(e.nativeEvent.text)}
      />
      ;
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
