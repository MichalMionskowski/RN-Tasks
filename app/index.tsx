import { useState } from "react";
import { Text, View } from "react-native";
import { InputBox } from "./components/InputBox";

export default function Index() {
  const [newNoteText, setNewNoteText] = useState("");
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Edit app/index.tsx to edit this screen.</Text>
      <InputBox
        text={newNoteText}
        handleText={(text) => setNewNoteText(text)}
      />
    </View>
  );
}
