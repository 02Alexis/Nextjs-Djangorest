async function loadTasks() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/tasks/`);
  const back = await res.json();
  return back;
}

async function ListTask() {
  const back = await loadTasks();
  console.log(back);

  return (
    <div className="bg-slate-700 p-4 w-full">
      <h2>Tareas</h2>
      {back.map((task) => (
        <div
          className="bg-slate-500 px-4 py-3 mb-2 rounded-md flex justify-between items-center"
          key={task.id}
        >
          <div>
            <h2>{task.title}</h2>
            <p>{task.description}</p>
          </div>
          <div className="flex justify-between gap-x-2">
            <button className="bg-red-500 text-white rounded-md p-2">
              Eliminar
            </button>
            <button className="bg-indigo-500 text-white rounded-md p-2">
              Actualizar
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ListTask;
