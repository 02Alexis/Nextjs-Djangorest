import TaskCard from "./taskCard";

async function loadTasks() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/tasks/`);
  const back = await res.json();
  return back;
}

async function ListTask() {
  const back = await loadTasks();

  return (
    <div className="bg-slate-700 p-4 w-full">
      <h2>Tareas</h2>
      {back.map((task) => (
        <TaskCard task={task} key={task.id} />
      ))}
    </div>
  );
}

export default ListTask;
