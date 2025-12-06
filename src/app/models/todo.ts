export interface Todo {
  id: number;
  title: string;
  description: string;
  completed: boolean;
  userId: number;
  createdAt: string; // API devuelve string, no Date
  updatedAt?: string;
}
