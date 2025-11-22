import React, { useState } from "react";

function App() {
  const [title, settitle] = useState("");
  const [Details, setDetails] = useState("");
  const [task, settask] = useState([]);

  const SubmitHandler = (e) => {
    e.preventDefault();
    const copytask = [...task];
    copytask.push({ title, Details });
    settask(copytask);
    settitle("");
    setDetails("");
  };

  const DeleteNote = (idx) => {
    const copytask = [...task];
    copytask.splice(idx, 1);
    settask(copytask);
  };

  return (
    <div className="h-screen bg-amber-100 lg:flex text-stone-900 overflow-hidden">
      {/* LEFT SIDE FORM */}
      <form
        onSubmit={SubmitHandler}
        className="items-start lg:w-1/2 flex flex-col gap-4 p-10"
      >
        <h1 className="text-3xl font-bold text-yellow-800">Add Notes</h1>

        <input
          type="text"
          placeholder="Enter Note Heading"
          className="w-full px-5 py-2 border border-amber-300 bg-amber-50 rounded-xl outline-none
          focus:border-yellow-600 focus:ring-2 focus:ring-yellow-300 transition shadow-sm"
          value={title}
          onChange={(e) => settitle(e.target.value)}
        />

        <textarea
          placeholder="Write Details"
          className="w-full h-32 px-5 py-2 border border-amber-300 bg-amber-50 rounded-xl outline-none
          focus:border-yellow-600 focus:ring-2 focus:ring-yellow-300 transition shadow-sm"
          value={Details}
          onChange={(e) => setDetails(e.target.value)}
        />

        <button
          className="active:scale-95 w-full bg-yellow-700 hover:bg-yellow-600 text-amber-50 font-semibold
          px-5 py-2 rounded-xl shadow-md transition"
        >
          Add Notes
        </button>
      </form>

      {/* RIGHT SIDE LIST */}
      <div className="lg:w-1/2 p-10 lg:border-l lg:border-amber-300 bg-amber-50">
        <h1 className="text-3xl font-bold text-yellow-800">Recent Notes</h1>

        <div className="items-start justify-start flex flex-wrap gap-5 mt-6 h-full overflow-auto no-scrollbar">
          {task.map((elem, idx) => (
            <div
              key={idx}
              className="relative flex flex-col justify-between h-52 w-40 rounded-xl bg-amber-50
              border border-amber-300 shadow-md hover:shadow-lg transition text-stone-900 p-4"
            >
              <div>
                <h3 className="leading-tight text-lg font-semibold text-stone-900">
                  {elem.title}
                </h3>
                <p className="mt-3 leading-tight font-medium text-stone-600 line-clamp-4">
                  {elem.Details}
                </p>
              </div>

              <button
                onClick={() => DeleteNote(idx)}
                className="w-full bg-red-500 hover:bg-red-600 text-amber-50 text-xs active:scale-95 font-bold py-1 rounded-lg transition"
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
