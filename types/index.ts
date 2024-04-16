export type ID = string; // In case ID gets swapped out to numbers or some other type

export interface Column {
  title: string;
  id: ID;
  tasks: Task[];
}

export interface Task {
  id: ID;
  title: string;
  createdAt: Date;
  updatedAt: Date;
}
