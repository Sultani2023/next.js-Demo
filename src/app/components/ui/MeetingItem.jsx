export default function MeetingItem({ meeting }) {
  const meetingDate = new Date(meeting.date)
  // Check if meeting is today It compares the meeting date with today’s date
  const isToday = meetingDate.toDateString() === new Date().toDateString()
  
  return (
    <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-750 transition-colors">
      <div className="flex items-center gap-3">
        
        <div>
          <p className="font-medium hover:bg-gray-100">{meeting.title}</p>
          <p className="text-xs text-gray-500">
            {isToday ? 'Today' : meetingDate.toLocaleDateString()} at {meetingDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
          </p>
          <p className="text-xs text-gray-400 mt-0.5">{meeting.participants.length} participants</p>
        </div>
      </div>
      <button className="px-3 py-1 text-sm text-blue-600 hover:underline">Join</button>
    </div>
  )
}