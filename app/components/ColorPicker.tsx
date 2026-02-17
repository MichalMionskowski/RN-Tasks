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
  const [contentHeight, setContentHeight] = useState<number | null>(null);
  const [open, setOpen] = useState(false);

  const toggleDropdown = () => {
    if (contentHeight === null) return; // Wait for measurement

    Animated.timing(animation, {
      toValue: open ? 0 : 1,
      duration: 250,
      useNativeDriver: false,
    }).start();

    setOpen(!open);
  };

  const animatedHeight =
    contentHeight !== null
      ? animation.interpolate({
          inputRange: [0, 1],
          outputRange: [0, contentHeight],
        })
      : 0;

  return (
    <View style={{ marginTop: 20 }}>
      <Pressable onPress={toggleDropdown}>
        <Text>PickerComponent</Text>
      </Pressable>

      {contentHeight === null && (
        <View
          style={{ position: "absolute", opacity: 0 }}
          onLayout={(e) => {
            setContentHeight(e.nativeEvent.layout.height);
          }}
        >
          <View style={{ padding: 10, rowGap: 10 }}>
            {Object.values(TaskColorChoice).map((color) => (
              <View key={color.hex} style={styles.row}>
                <Text>{color.name}</Text>
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
          </View>
        </View>
      )}

      {contentHeight !== null && (
        <Animated.View
          style={[
            styles.dropdown,
            {
              height: animatedHeight,
              overflow: "hidden",
            },
          ]}
        >
          <View style={{ padding: 10, rowGap: 10 }}>
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
          </View>
        </Animated.View>
      )}
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
