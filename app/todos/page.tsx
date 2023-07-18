import Link from "next/link";
import { prisma } from "../db";
import TodoItem from "./item";

async function fetchTodos() {
  return prisma.todo.findMany();
}

export async function toggleTodo(
  id: string,
  done: boolean
) {
  "use server";

  await prisma.todo.update({
    where: { id },
    data: { done },
  });
}

export default async function TodosPage() {
  const todos = await fetchTodos();
  return (
    <div className="p-6 gap-6 flex flex-col">
      <Link
        href="/todos/new"
        className="bg-green-500 text-center text-white py-2 rounded"
      >
        Create new Todo
      </Link>
      <ul className="flex flex-col gap-4">
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            id={todo.id}
            title={todo.title}
            done={todo.done}
            createAt={todo.createdAt}
            updatedAt={todo.updatedAt}
            toggleTodo={toggleTodo}
          />
        ))}
      </ul>
    </div>
  );
}
