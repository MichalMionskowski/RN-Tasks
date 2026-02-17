import { create } from "zustand";
import { persist } from "zustand/middleware";
import { TaskColor } from "./components/ColorPicker";
import { TaskDetail } from "./components/TaskDetail";
import { zustandStorage } from "./storage";

type TaskStore = {
  tasks: TaskDetail[];
  insertTask: (task: Omit<TaskDetail, "id" | "completed">) => void;
  setTaskCompletionStatus: (taskId: string, completed: boolean) => void;
  setTaskDescription: (taskId: string, description: string) => void;
  setSelectedColor: (taskId: string, color: TaskColor) => void;
  deleteTask: (taskId: string) => void;
};

export const useTaskStore = create<TaskStore>()(
  persist(
    (set) => ({
      tasks: [],
      insertTask: (task: Omit<TaskDetail, "id" | "completed">) => {
        const newTask: TaskDetail = {
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
      setTaskDescription: (taskId: string, description: string) => {
        set((state) => ({
          tasks: state.tasks.map((task) =>
            task.id === taskId ? { ...task, description } : task,
          ),
        }));
      },
      setSelectedColor: (taskId: string, color: TaskColor) => {
        set((state) => ({
          tasks: state.tasks.map((task) =>
            task.id === taskId ? { ...task, color } : task,
          ),
        }));
      },
    }),
    {
      name: "filter-storage",
      storage: zustandStorage,
    },
  ),
);
