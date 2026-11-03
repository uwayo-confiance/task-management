import { useState, useEffect } from 'react'
import DashboardSummary from './components/DashboardSummary'
import TaskForm from './components/TaskForm'
import TaskList from './components/TaskList'

const FILTERS = ['All', 'Pending', 'Completed']

function generateId() {
  return Date.now().toString(36) + Math.random().toString(36).slice(2)
}


const INITIAL_TASKS = [
  {
    id: generateId(),
    title: 'Complete React assignment',
    description: 'Build the Task Management Dashboard with all required features',
    priority: 'High',
    status: 'Pending',
  },
  {
    id: generateId(),
    title: 'Review project requirements',
    description: 'Double-check the PDF brief and checklist',
    priority: 'Medium',
    status: 'Completed',
  },
  {
    id: generateId(),
    title: 'Take screenshots for submission',
    description: '',
    priority: 'Low',
    status: 'Pending',
  },
]

function App() {
  const [tasks, setTasks] = useState(() => {
   
    try {
      const saved = localStorage.getItem('task-dashboard-tasks')
      if (saved) {
        const parsed = JSON.parse(saved)
        if (Array.isArray(parsed) && parsed.length > 0) {
          return parsed
        }
      }
    } catch {
    
    }
    return INITIAL_TASKS
  })
  const [filter, setFilter] = useState('All')

  
  useEffect(() => {
    try {
      localStorage.setItem('task-dashboard-tasks', JSON.stringify(tasks))
    } catch {
      
    }
  }, [tasks])

  
  const total = tasks.length
  const pending = tasks.filter((t) => t.status === 'Pending').length
  const completed = tasks.filter((t) => t.status === 'Completed').length

  const handleAddTask = ({ title, description, priority }) => {
    const newTask = {
      id: generateId(),
      title,
      description,
      priority,
      status: 'Pending',
    }
    setTasks((prev) => [newTask, ...prev])
  }

  const handleToggleStatus = (id) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id
          ? {
              ...task,
              status: task.status === 'Pending' ? 'Completed' : 'Pending',
            }
          : task
      )
    )
  }

  const handleDelete = (id) => {
    setTasks((prev) => prev.filter((task) => task.id !== id))
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="max-w-3xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
       
        <DashboardSummary
          total={total}
          pending={pending}
          completed={completed}
        />

       
        <TaskForm onAddTask={handleAddTask} />

    
        <div className="flex flex-wrap gap-2 mb-6">
          {FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                filter === f
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-50'
              }`}
            >
              {f}
            </button>
          ))}
        </div>

      
        <TaskList
          tasks={tasks}
          filter={filter}
          onToggleStatus={handleToggleStatus}
          onDelete={handleDelete}
        />
      </div>
    </div>
  )
}

export default App
