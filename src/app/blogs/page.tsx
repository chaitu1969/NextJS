import axios from "axios";

async function getBlogs() {
  const res = await axios.get("https://dummyjson.com/todos");
  return res.data;
}

export default async function blogs() {
  const blogs = await getBlogs();

  return (
    <>
      <div>
        {blogs.todos.map((blog: ITodo) => (
          <Todo
            todo={blog.todo}
            completed={blog.completed}
            key={blog.id}
          ></Todo>
        ))}
      </div>
    </>
  );
}

interface ITodo {
  id?: number;
  todo: string;
  completed: boolean;
}

function Todo({ todo, completed }: ITodo) {
  return (
    <div>
      {todo} : {completed ? "done" : "Not done"}
    </div>
  );
}
