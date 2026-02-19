import DateTimePicker, {
  DateTimePickerEvent,
} from "@react-native-community/datetimepicker";
import React, { useState } from "react";
import { Platform, Pressable, StyleSheet, Text, View } from "react-native";

interface DatePickerProps {
  value: Date;
  onChange: (date: string) => void;
  mode?: "date" | "time" | "datetime";
  label?: string;
}
export default function DatePicker({
  value,
  onChange,
  mode = "date",
  label,
}: DatePickerProps) {
  // On Android, picker is shown as a modal dialog
  // On iOS, picker is always visible (inline)
  const [show, setShow] = useState(false);

  const handleChange = (event: DateTimePickerEvent, selectedDate?: Date) => {
    // On Android, dismiss the picker after selection
    if (Platform.OS === "android") {
      setShow(false);
    }

    // If user cancelled, selectedDate will be undefined
    if (selectedDate) {
      const isoSelectedDate = selectedDate.toISOString();
      onChange(isoSelectedDate);
    }
  };

  const formatDate = (date: Date): string => {
    // Default: date mode
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  return (
    <View style={styles.container}>
      {label && <Text style={styles.label}>{label}</Text>}
      <Pressable
        style={({ pressed }) => [
          styles.button,
          pressed && styles.buttonPressed,
        ]}
        onPress={() => setShow(true)}
      >
        <Text style={styles.buttonText}>{formatDate(new Date(value))}</Text>
      </Pressable>
      {show && (
        <DateTimePicker
          value={value}
          mode={mode}
          display={Platform.OS === "ios" ? "spinner" : "default"}
          onChange={handleChange}
          themeVariant="light"
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 8,
  },
  label: {
    fontSize: 14,
    fontWeight: "600",
    color: "#333",
    marginBottom: 6,
  },
  button: {
    backgroundColor: "#F5F5F7",
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#E5E5EA",
  },
  buttonPressed: {
    backgroundColor: "#E5E5EA",
  },
  buttonText: {
    fontSize: 16,
    color: "#007AFF",
    fontWeight: "500",
  },
});
