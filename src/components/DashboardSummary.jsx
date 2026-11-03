function DashboardSummary({ total, pending, completed }) {
  return (
    <section className="mb-8">
      {/* Application title + overview label */}
      <div className="mb-5">
        <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
          Task Management Dashboard
        </h1>
        <p className="mt-1 text-slate-600 text-sm sm:text-base">
          Overview of your tasks — counts update automatically
        </p>
      </div>

      {/* Three summary cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {/* Total Tasks */}
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-5 text-center hover:shadow-md transition-shadow">
          <p className="text-sm font-medium text-slate-500 mb-1 uppercase tracking-wide">
            Total Tasks
          </p>
          <p className="text-4xl font-bold text-slate-800">{total}</p>
        </div>

        {/* Pending Tasks */}
        <div className="bg-white rounded-xl shadow-sm border border-amber-200 p-5 text-center hover:shadow-md transition-shadow">
          <p className="text-sm font-medium text-amber-600 mb-1 uppercase tracking-wide">
            Pending Tasks
          </p>
          <p className="text-4xl font-bold text-amber-600">{pending}</p>
        </div>

        {/* Completed Tasks */}
        <div className="bg-white rounded-xl shadow-sm border border-emerald-200 p-5 text-center hover:shadow-md transition-shadow">
          <p className="text-sm font-medium text-emerald-600 mb-1 uppercase tracking-wide">
            Completed Tasks
          </p>
          <p className="text-4xl font-bold text-emerald-600">{completed}</p>
        </div>
      </div>
    </section>
  )
}

export default DashboardSummary
