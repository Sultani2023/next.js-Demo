'use client'
import { useParams } from 'next/navigation'
import Link from 'next/link'
import { projects } from '@/app/data/mockData'

export default function ProjectDetailPage() {
  const { id } = useParams()
  const project = projects.find(p => p.id === parseInt(id))

  if (!project) {
    return (
      <div className="p-8 text-center">
        <h2 className="text-2xl font-bold mb-4">Project not found</h2>
        <Link href="/projects" className="text-blue-600 hover:underline">Back to Projects</Link>
      </div>
    )
  }

  const statusColors = {
    'In Progress': 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400',
    'Completed': 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400',
    'Planning': 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400',
  }

  return (
    <div className="p-4 md:p-6 lg:p-8 animate-fadeInUp">
      <Link href="/projects" className="inline-flex items-center gap-2 text-blue-600 hover:underline mb-6">
        Back to Projects
      </Link>

      <div className="max-w-4xl mx-auto">
        <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-800 overflow-hidden">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6 text-white">
            <h1 className="text-2xl md:text-3xl font-bold">{project.title}</h1>
            <div className="mt-4 flex flex-wrap gap-2">
              <span className={`px-3 py-1 rounded-full text-sm font-medium ${statusColors[project.status]}`}>
                {project.status}
              </span>
            </div>
          </div>
          <div className="p-6 space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">📝 Full Description</h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                {project.description} This comprehensive project aims to deliver a high-quality solution that meets all stakeholder requirements. 
                The team is working diligently to ensure all milestones are met on schedule.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-4">
                <p className="text-sm text-gray-500 dark:text-gray-400">👥 Assigned Team</p>
                <p className="font-medium mt-1">{project.team.join(', ')}</p>
              </div>
              <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-4">
                <p className="text-sm text-gray-500 dark:text-gray-400">📅 Deadline</p>
                <p className="font-medium mt-1">{new Date(project.deadline).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
              </div>
              <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-4">
                <p className="text-sm text-gray-500 dark:text-gray-400">🛠️ Technologies Used</p>
                <div className="flex flex-wrap gap-2 mt-2">
                  {project.technologies.map(tech => (
                    <span key={tech} className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-md text-xs">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-4">
                <p className="text-sm text-gray-500 dark:text-gray-400">📊 Progress</p>
                <div className="mt-2">
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full" style={{ width: '65%' }}></div>
                  </div>
                  <p className="text-sm mt-1">65% Complete</p>
                </div>
              </div>
            </div>
            <div className="flex gap-3 pt-4">
              <button className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                Edit Project
              </button>
              <button className="flex-1 px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                View Tasks
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}