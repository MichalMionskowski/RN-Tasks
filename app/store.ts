import { create } from "zustand";
import { persist } from "zustand/middleware";
import { Task } from "./components/Task";
import { zustandStorage } from "./storage";

type TaskStore = {
  tasks: Task[];
  insertTask: (task: Omit<Task, "id" | "completed">) => void;
  setTaskCompletionStatus: (taskId: string, completed: boolean) => void;
  deleteTask: (taskId: string) => void;
};

export const useTaskStore = create<TaskStore>()(
  persist(
    (set) => ({
      tasks: [],
      insertTask: (task: Omit<Task, "id" | "completed">) => {
        const newTask: Task = {
          ...task,
          completed: false,
          id:
            Date.now().toString() + Math.random().toString(36).substring(2, 9),
        };
        set((state) => ({ tasks: [...state.tasks, newTask] }));
      },
      setTaskCompletionStatus: (taskId: string, completed: boolean) => {
        set((state) => ({
          tasks: state.tasks.map((task) =>
            task.id === taskId ? { ...task, completed } : task,
          ),
        }));
      },
      deleteTask: (taskId: string) => {
        set((state) => ({
          tasks: state.tasks.filter((task) => task.id !== taskId),
        }));
      },
    }),
    {
      name: "filter-storage",
      storage: zustandStorage,
    },
  ),
);
