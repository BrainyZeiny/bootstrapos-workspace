interface Task {
  id: number
  title: string
  description: string
  status: 'todo' | 'in_progress' | 'done'
  assignee?: {
    id: number
    name: string
  }
  created_at: string
}

interface TaskCardProps {
  task: Task
  onStatusChange: (taskId: number, status: Task['status']) => void
  onEdit: (task: Task) => void
}

const STATUS_LABELS: Record<Task['status'], string> = {
  todo: 'To Do',
  in_progress: 'In Progress',
  done: 'Done',
}

const STATUS_COLORS: Record<Task['status'], string> = {
  todo: 'bg-gray-100 text-gray-700',
  in_progress: 'bg-blue-100 text-blue-700',
  done: 'bg-green-100 text-green-700',
}

export function TaskCard({ task, onStatusChange, onEdit }: TaskCardProps) {
  console.log('[TaskCard] render', { taskId: task.id, status: task.status })

  const handleStatusChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newStatus = e.target.value as Task['status']
    console.log('[TaskCard] status change', { taskId: task.id, from: task.status, to: newStatus })
    onStatusChange(task.id, newStatus)
  }

  return (
    <div className="border rounded-lg p-4 bg-white hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between gap-2">
        <div className="flex-1 min-w-0">
          <h3 className="font-medium text-gray-900 truncate">{task.title}</h3>
          {task.description && (
            <p className="text-sm text-gray-500 mt-1 line-clamp-2">{task.description}</p>
          )}
        </div>
        <button
          onClick={() => onEdit(task)}
          className="text-gray-400 hover:text-gray-600 flex-shrink-0"
          aria-label="Edit task"
        >
          ✏️
        </button>
      </div>

      <div className="flex items-center justify-between mt-3">
        <select
          value={task.status}
          onChange={handleStatusChange}
          className={`text-xs font-medium px-2 py-1 rounded-full border-0 cursor-pointer ${STATUS_COLORS[task.status]}`}
        >
          {Object.entries(STATUS_LABELS).map(([value, label]) => (
            <option key={value} value={value}>{label}</option>
          ))}
        </select>

        {task.assignee && (
          <span className="text-xs text-gray-500">
            {task.assignee.name}
          </span>
        )}
      </div>
    </div>
  )
}
