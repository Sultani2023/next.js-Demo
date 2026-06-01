'use client'
import { useState, useEffect } from 'react'
import StatCard from '@/app/components/ui/StatCard'
import ProjectCard from '@/app/components/ui/ProjectCard'
import MeetingItem from '@/app/components/ui/MeetingItem'
import ActivityItem from '@/app/components/ui/ActivityItem'
import { projects, meetings, activities } from '@/app/data/mockData'

export default function Dashboard() {
  const [greeting, setGreeting] = useState('')

  useEffect(() => {
    const hour = new Date().getHours()
    if (hour < 12) setGreeting('Good Morning')
    else if (hour < 18) setGreeting('Good Afternoon')
    else setGreeting('Good Evening')
  }, [])

  const stats = [
    { title: 'Active Projects', value: '12', change: '+2' },
    { title: 'Pending Tasks', value: '48', change: '+12'  },
    { title: 'Team Members', value: '14', change: '+3'},
    { title: 'Upcoming Meetings', value: '4', change: '+1' },
  ]

  return (
    <div className="p-4 md:p-6 lg:p-8 space-y-6 md:space-y-8 animate-fadeInUp">
      <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-2xl p-6 md:p-8 text-white shadow-xl">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold">{greeting}, Mahfoza! 👋</h1>
            <p className="mt-2 opacity-90 text-sm md:text-base">Welcome to your Remote Team Workspace</p>
          </div>
          <div className="mt-4 md:mt-0 flex gap-3">
            <span className="px-3 py-1 bg-white/20 rounded-full text-sm backdrop-blur-sm">Team Lead</span>
            <span className="px-3 py-1 bg-white/20 rounded-full text-sm backdrop-blur-sm">Frontend Dev</span>
          </div>
        </div>
        <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-white/10 rounded-xl p-3 backdrop-blur-sm">
            <p className="text-xs opacity-80">Today's Date</p>
            <p className="font-semibold">{new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</p>
          </div>
          <div className="bg-white/10 rounded-xl p-3 backdrop-blur-sm">
            <p className="text-xs opacity-80">Current Time</p>
            <p className=" suppressHydrationWarning font-semibold">{new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        {/* Take each item in stats array and create a StatCard for it” */}
        {stats.map((stat, index) => (
          <StatCard key={stat.title} {...stat} delay={index * 100} />
          // {...stat}This is called "spread operator" It means:title={stat.title} change={stat.change}

        ))}
      </div>
      <div className="grid lg:grid-cols-2 gap-6 md:gap-8">
        <div className="bg-white dark:bg-gray-900 rounded-xl shadow-sm border border-gray-200 dark:border-gray-800 p-4 md:p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg md:text-xl font-bold flex items-center gap-2">
              <span>📌</span> Recent Projects
            </h2>
            <a href="/projects" className="py-2 px-3 bg-blue-600 text-sm text-white border rounded border-blue-600 hover:bg-blue-700">View all </a>
          </div>
          <div className="space-y-3">
            {projects.slice(0, 3).map((project) => (
              <ProjectCard key={project.id} project={project} compact />
            ))}
          </div>
        </div>
        <div className="bg-white dark:bg-gray-900 rounded-xl shadow-sm border border-gray-200 dark:border-gray-800 p-4 md:p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg md:text-xl font-bold flex items-center hover:text-blue-600 gap-2">
              <span>⏰</span> Upcoming Meetings
            </h2>
            <a href="/meetings" className="py-2 px-3 bg-blue-600 text-sm text-white border rounded border-blue-600 hover:bg-blue-700 hover:border-blue-700">View all </a>
          </div>
          <div className="space-y-3 hover:text-blue-600 transition-colors">
            {meetings.slice(0, 4).map((meeting) => (
              <MeetingItem key={meeting.id} meeting={meeting} />
            ))}
          </div>
        </div>
        <div className="lg:col-span-2 bg-white dark:bg-gray-900 rounded-xl shadow-sm border border-gray-200 dark:border-gray-800 p-4 md:p-6">
          <h2 className="text-lg md:text-xl font-bold flex items-center gap-2 mb-4">
            <span>🔄</span> Recent Activity
          </h2>
          <div className="space-y-3">
            {activities.map((activity, index) => (
              <ActivityItem key={index} activity={activity} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}