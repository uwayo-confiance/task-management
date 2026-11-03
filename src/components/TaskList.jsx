import TaskCard from './TaskCard'

function TaskList({ tasks, filter, onToggleStatus, onDelete }) {
  const filteredTasks = tasks.filter((task) => {
    if (filter === 'All') return true
    return task.status === filter
  })

  if (filteredTasks.length === 0) {
    return (
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-10 text-center">
        <p className="text-slate-500 text-lg">
          {filter === 'All'
            ? 'No tasks yet. Add your first task above!'
            : `No ${filter.toLowerCase()} tasks found.`}
        </p>
      </div>
    )
  }

  return (
    <div className="space-y-4">
      {filteredTasks.map((task) => (
        <TaskCard
          key={task.id}
          task={task}
          onToggleStatus={onToggleStatus}
          onDelete={onDelete}
        />
      ))}
    </div>
  )
}

export default TaskList
