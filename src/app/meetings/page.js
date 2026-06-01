'use client'
import { useState } from 'react'
import { meetings } from '@/app/data/mockData'

export default function MeetingsPage() {
  const [view, setView] = useState('upcoming')

  const upcomingMeetings = meetings.filter(m => new Date(m.date) > new Date())
  const pastMeetings = meetings.filter(m => new Date(m.date) < new Date())

  const displayMeetings = view === 'upcoming' ? upcomingMeetings : pastMeetings

  return (
    <div className="p-4 md:p-6 lg:p-8 space-y-6 animate-fadeInUp">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold">Meetings</h1>
          <p className="text-gray-600 dark:text-gray-400 mt-1">Schedule and manage team meetings</p>
        </div>
        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2">
          Schedule Meeting
        </button>
      </div>

      <div className="flex gap-2 bg-gray-100 dark:bg-gray-800 rounded-lg p-1 w-fit">
        <button
          onClick={() => setView('upcoming')}
          className={`px-4 py-2 rounded-md transition-colors ${
            view === 'upcoming' ? 'bg-white dark:bg-gray-900 shadow-sm' : 'hover:bg-gray-200 dark:hover:bg-gray-700'
          }`}
        >
          Upcoming
        </button>
        <button
          onClick={() => setView('past')}
          className={`px-4 py-2 rounded-md transition-colors ${
            view === 'past' ? 'bg-white dark:bg-gray-900 shadow-sm' : 'hover:bg-gray-200 dark:hover:bg-gray-700'
          }`}
        >
          Past
        </button>
      </div>

      {/* Meetings List */}
      <div className="space-y-4">
        {displayMeetings.map(meeting => (
          <div key={meeting.id} className="bg-white dark:bg-gray-900 rounded-xl p-5 border border-gray-200 dark:border-gray-800 hover:shadow-md transition-all">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <div className="flex-1">
                <h3 className="text-lg font-semibold">{meeting.title}</h3>
                <div className="flex flex-wrap gap-3 mt-2 text-sm text-gray-600 dark:text-gray-400">
                  <span>📅 {new Date(meeting.date).toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric', year: 'numeric' })}</span>
                  <span>⏰ {new Date(meeting.date).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
                  <span>👥 {meeting.participants.length} participants</span>
                </div>
                <div className="mt-3 flex flex-wrap gap-2">
                  {meeting.participants.map(participant => (
                    <span key={participant} className="px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded-md text-xs">
                      {participant}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex gap-2">
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                  meeting.type === 'Weekly Sync' ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400' :
                  meeting.type === 'Sprint Planning' ? 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400' :
                  'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400'
                }`}>
                  {meeting.type}
                </span>
                <button className="px-3 py-1 bg-blue-600 text-sm text-white border rounded border-blue-600 hover:bg-blue-700 hover:border-blue-700">Join</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {displayMeetings.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500">No {view} meetings found</p>
        </div>
      )}
    </div>
  )
}