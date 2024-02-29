"use client";
import { useState } from "react";

function FormTask() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(title, description);
  };

  return (
    <div className="bg-slate-200 p-7">
      <form className="" onSubmit={handleSubmit}>
        <h1 className="text-black fonr-bold">Añadir tarea</h1>
        <label htmlFor="title" className="text-xs text-black">
          Title:
        </label>
        <input
          onChange={(e) => setTitle(e.target.value)}
          type="text"
          name="title"
          className="bg-slate-400 rounded-md p-2 mb-2 block w-full text-slate-900"
        />
        <label htmlFor="description" className="text-xs text-black">
          Description:
        </label>
        <textarea
          onChange={(e) => setDescription(e.target.value)}
          name="description"
          className="bg-slate-400 rounded-md p-2 mb-2 block w-full text-slate-900"
        ></textarea>
        <button className="bg-indigo-500 text-white rounded-md p-2 block w-full">
          Guardar
        </button>
      </form>
    </div>
  );
}

export default FormTask;
