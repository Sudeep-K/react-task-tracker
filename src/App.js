import { useState } from 'react'
import { Header } from "./components/Header";
import Tasks from "./components/Tasks";
import AddTasks from './components/AddTasks';

function App() {
  const [showTask, setShowTask] = useState(false);
  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: 'Doctors Appointment',
        day: 'Feb 9th at 2:41am',
        reminder: true
    },
    {
        id: 2,
        text: 'Meeting at school',
        day: 'Feb 8th at 1:30pm',
        reminder: true
    },
    {
        id: 3,
        text: 'Food Shopping',
        day: 'Feb 5th at 2:30pm',
        reminder: false
    }
  ])

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  }

  const toogleReminder = (id) => {
    setTasks(tasks.map((task) => task.id === id ? {...task, reminder: !task.reminder} : task))
  }

  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1;
    const newTask = {id, ...task};

    setTasks([...tasks, newTask]);
  }

  return (
    <div className="container">
      <Header showTask={showTask} onAdd={() => setShowTask(!showTask)}/>
      {showTask && <AddTasks onAdd={addTask}/>}
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToogle={toogleReminder}/> : 'No tasks to Show'}
    </div>
  );
}

export default App;
