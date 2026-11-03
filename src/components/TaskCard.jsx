function TaskCard({ task, onToggleStatus, onDelete }) {
  const priorityStyles = {
    Low: 'bg-slate-100 text-slate-700',
    Medium: 'bg-amber-100 text-amber-800',
    High: 'bg-red-100 text-red-800',
  }

  const statusStyles = {
    Pending: 'bg-amber-50 text-amber-700 border-amber-200',
    Completed: 'bg-emerald-50 text-emerald-700 border-emerald-200',
  }

  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-5 flex flex-col sm:flex-row sm:items-start gap-4 hover:shadow-md transition-shadow">
      <div className="flex-1 min-w-0">
        <div className="flex flex-wrap items-center gap-2 mb-2">
          <h3
            className={`text-base font-semibold text-slate-800 ${
              task.status === 'Completed' ? 'line-through text-slate-500' : ''
            }`}
          >
            {task.title}
          </h3>
          <span
            className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
              priorityStyles[task.priority] || priorityStyles.Medium
            }`}
          >
            {task.priority}
          </span>
          <span
            className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${
              statusStyles[task.status] || statusStyles.Pending
            }`}
          >
            {task.status}
          </span>
        </div>
        {task.description && (
          <p className="text-sm text-slate-600 mb-3">{task.description}</p>
        )}
      </div>

      <div className="flex flex-wrap gap-2 sm:flex-col sm:items-stretch sm:min-w-[140px]">
        <button
          onClick={() => onToggleStatus(task.id)}
          className={`px-3 py-1.5 text-sm font-medium rounded-lg transition-colors ${
            task.status === 'Pending'
              ? 'bg-emerald-600 text-white hover:bg-emerald-700'
              : 'bg-amber-500 text-white hover:bg-amber-600'
          }`}
        >
          {task.status === 'Pending' ? 'Mark Complete' : 'Mark Pending'}
        </button>
        <button
          onClick={() => onDelete(task.id)}
          className="px-3 py-1.5 text-sm font-medium rounded-lg bg-red-50 text-red-600 hover:bg-red-100 border border-red-200 transition-colors"
        >
          Delete
        </button>
      </div>
    </div>
  )
}

export default TaskCard
