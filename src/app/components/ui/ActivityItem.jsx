export default function ActivityItem({ activity }) {
  const icons = {
    task: '✅',
    meeting: '📅',
    project: '🚀',
    member: '👤',
  }

  return (
    <div className="flex items-start gap-3 p-3 border-b border-gray-100 dark:border-gray-800 last:border-0">
      <div className="w-8 h-8 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center">
        {icons[activity.type]}
      </div>
      <div className="flex-1">
        <p className="text-sm">
          <span className="font-semibold">{activity.user}</span> {activity.action}
        </p>
        <p className="text-xs text-gray-500 mt-0.5">{activity.time}</p>
      </div>
    </div>
  )
}