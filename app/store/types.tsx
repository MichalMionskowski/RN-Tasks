import { TaskColorChoice, TaskColorKey } from "../components/ColorPicker";

export type TaskBase = {
  id: string;
  title: string;
  completed: boolean;
  color?: TaskColor;
};

export type TaskDetail = TaskBase & {
  description?: string;
  createdAt?: string;
};

export type TaskColor = (typeof TaskColorChoice)[TaskColorKey];
