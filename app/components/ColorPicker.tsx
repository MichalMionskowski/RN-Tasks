import React, { useRef, useState } from "react";
import { Animated, Pressable, Text, View } from "react-native";
import { useTaskStore } from "../store";
import { styles } from "../theme/styles";

function ColorPicker({ taskId }: { taskId: string }) {
  return (
    <View>
      <Text>ColorPicker</Text>
      <PickerComponent taskId={taskId} />
    </View>
  );
}

function PickerComponent({ taskId }: { taskId: string }) {
  const setSeletedColor = useTaskStore((state) => state.setSelectedColor);
  const handleSelectedColor = (taskId: string, color: TaskColor) => {
    setSeletedColor(taskId, color);
  };
  const animation = useRef(new Animated.Value(0)).current;
  const [open, setOpen] = useState(false);
  const toggleDropdown = () => {
    Animated.timing(animation, {
      toValue: open ? 0 : 1,
      duration: 250,
      useNativeDriver: false, // height can't use native driver
    }).start();

    setOpen(!open);
  };
  const colorDropdown = (
    <>
      {Object.values(TaskColorChoice).map((color) => (
        <View key={color.hex} style={styles.row}>
          <Text
            onPress={() => {
              handleSelectedColor(taskId, color);
            }}
          >
            {color.name}
          </Text>
          <View
            style={{
              backgroundColor: color.hex,
              width: 40,
              height: 40,
              borderRadius: 20,
            }}
          />
        </View>
      ))}
    </>
  );
  return (
    <View style={{ marginTop: 20 }}>
      <Pressable onPress={toggleDropdown}>
        <Text>PickerComponent</Text>
      </Pressable>
      {
        <Animated.View
          style={[
            styles.dropdown,
            {
              height: animation.interpolate({
                inputRange: [0, 1],
                outputRange: [0, 240], // Adjust based on content height
              }),
            },
          ]}
        >
          {colorDropdown}
        </Animated.View>
      }
    </View>
  );
}
export const TaskColorChoice = {
  Lavender: { name: "Lavender", hex: "#E6E6FA" },
  Mint: { name: "Mint", hex: "#98FF98" },
  Peach: { name: "Peach", hex: "#FFDAB9" },
  SkyBlue: { name: "SkyBlue", hex: "#87CEEB" },
  Coral: { name: "Coral", hex: "#FF7F50" },
  Lemon: { name: "Lemon", hex: "#FFFACD" },
};
export type TaskColorKey = keyof typeof TaskColorChoice;
export type TaskColor = (typeof TaskColorChoice)[TaskColorKey];

export default ColorPicker;
