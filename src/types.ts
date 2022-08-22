export interface TodoListItem {
  type: "checkList" | "title";
  title: string;
  tooltip?: string;
  active?: boolean;
}

export type TodoListItems = TodoListItem[];
