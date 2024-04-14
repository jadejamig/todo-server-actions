import { getDate } from "./action";
import AddForm from "./add-form";
import prisma from "./db";
import DeleteForm from "./delete-form";
import ItemCheckbox from "./item-checkbox";

export default async function Home() {
  const todos = await prisma.todo.findMany();
  const date = await getDate();

  return (
    <div>
      <h1>{date}</h1>
      <h1 className="text-2xl font-bold mb-2">Todo List</h1>
      <AddForm />
      <ul className="mt-2">
        {todos.map((todo) => (
          <li key={todo.id}>
            <div className="flex items-center gap-2">
              <ItemCheckbox {...todo} />
              <label htmlFor={todo.id} className="peer-checked:line-through">
                {todo.title}
              </label>
            </div>
            <DeleteForm {...todo} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export const dynamic = 'force-dynamic'