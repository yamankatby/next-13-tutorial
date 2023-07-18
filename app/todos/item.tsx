"use client";

interface TodoItemProps {
  id: string;
  title: string;
  done: boolean;
  createAt: Date;
  updatedAt: Date;
  toggleTodo: (id: string, done: boolean) => void;
}

export default function TodoItem({
  id,
  title,
  done,
  createAt,
  updatedAt,
  toggleTodo,
}: TodoItemProps) {
  return (
    <li className="flex items-center gap-6">
      <input
        type="checkbox"
        defaultChecked={done}
        onChange={(e) => {
          toggleTodo(id, e.target.checked);
        }}
      />
      <div className="flex flex-col gap-1">
        <h2>{title}</h2>
        <p className="text-gray-500">
          {updatedAt.toLocaleDateString()}
        </p>
      </div>
    </li>
  );
}
