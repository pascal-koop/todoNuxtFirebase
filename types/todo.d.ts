export type Todo = {
  id: string;
  title: string;
  completed: boolean;
  createdAt: Date;
  updatedAt: Date;
  priority: number | 1 | 2 | 3;
};
