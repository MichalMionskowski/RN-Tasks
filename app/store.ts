import { create } from "zustand";
import { persist } from "zustand/middleware";
import { Task } from "./components/Task";
import { zustandStorage } from "./storage";

type TaskStore = {
  tasks: Task[];
  addTask: (task: Omit<Task, "id">) => void;
};

export const useTaskStore = create<TaskStore>()(
  persist(
    (set) => ({
      tasks: [],
      addTask: (task: Omit<Task, "id">) => {
        const newTask: Task = {
          ...task,
          id:
            Date.now().toString() + Math.random().toString(36).substring(2, 9),
        };
        set((state) => ({ tasks: [...state.tasks, newTask] }));
      },
    }),
    {
      name: "filter-storage",
      storage: zustandStorage,
    },
  ),
);
