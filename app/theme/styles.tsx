import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  inputText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#333",
    marginRight: 12,
  },
  inputBox: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#DDD",
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: 16,
    backgroundColor: "#FFF",
  },

  inputComponent: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 16,
  },

  mainComponent: {
    width: "100%",
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 20,
  },

  button: {
    backgroundColor: "#007AFF",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },

  buttonPressed: {
    backgroundColor: "#0051D5",
  },

  buttonText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "600",
  },
  taskCard: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#FFFFFF",
    padding: 16,
    marginVertical: 6,
    marginHorizontal: 12,
    borderRadius: 12,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  text: {
    fontSize: 16,
    fontWeight: "500",
    flex: 1,
    color: "#333",
  },
  completedText: {
    textDecorationLine: "line-through",
    color: "#999",
    opacity: 0.6,
  },
  deleteButton: {
    marginLeft: 8,
    padding: 4,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  card: {
    backgroundColor: "#FFF",
    padding: 16,
    borderRadius: 12,
    elevation: 3,
    shadowOpacity: 0.1,
    shadowRadius: 4,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
  },
  dropdown: {
    overflow: "hidden",
    backgroundColor: "white",
    marginTop: 8,
    borderRadius: 8,
  },
});
