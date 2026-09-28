import { useEffect, useState } from "react";
import axios from "axios";

const API_URL = "https://ta-150923e0c33747d0bdcb6f749d3f6a89.ecs.ap-southeast-2.on.aws/api/tasks";

function App() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("TODO");

  const fetchTasks = async () => {
    try {
      const response = await axios.get(API_URL);
      setTasks(response.data);
    } catch (error) {
      console.error("Error fetching tasks:", error);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const addTask = async (e) => {
    e.preventDefault();

    if (!title.trim()) return;

    try {
      await axios.post(API_URL, {
        title,
        description,
        status,
      });

      setTitle("");
      setDescription("");
      setStatus("TODO");

      fetchTasks();
    } catch (error) {
      console.error("Error creating task:", error);
    }
  };

  const deleteTask = async (id) => {
    try {
      await axios.delete(`${API_URL}/${id}`);
      fetchTasks();
    } catch (error) {
      console.error("Error deleting task:", error);
    }
  };

  return (
    <div className="app">
      <header>
        <h1>AWS Task Manager</h1>
        <p>Spring Boot + PostgreSQL + React</p>
      </header>

      <main>
        <section className="task-form">
          <h2>Create Task</h2>

          <form onSubmit={addTask}>
            <input
              type="text"
              placeholder="Task title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />

            <textarea
              placeholder="Task description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />

            <select
              value={status}
              onChange={(e) => setStatus(e.target.value)}
            >
              <option value="TODO">TODO</option>
              <option value="IN_PROGRESS">IN PROGRESS</option>
              <option value="COMPLETED">COMPLETED</option>
            </select>

            <button type="submit">Add Task</button>
          </form>
        </section>

        <section className="tasks">
          <h2>Tasks</h2>

          {tasks.length === 0 ? (
            <p>No tasks available.</p>
          ) : (
            tasks.map((task) => (
              <div className="task-card" key={task.id}>
                <div>
                  <h3>{task.title}</h3>
                  <p>{task.description}</p>
                  <span>{task.status}</span>
                </div>

                <button onClick={() => deleteTask(task.id)}>
                  Delete
                </button>
              </div>
            ))
          )}
        </section>
      </main>
    </div>
  );
}

export default App;