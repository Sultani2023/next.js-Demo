'use client'

export default function TeamMemberCard({ member, delay = 0 }) {

  const getInitials = (name) => {
    return name
      .split(' ')
      .map(n => n[0])
      .join('')
      .toUpperCase()
      .slice(0, 2)
  }

  const getGradient = (id) => {
    const gradients = [
      'from-blue-500 to-blue-600',
      'from-purple-500 to-purple-600',
      'from-green-500 to-green-600',
      'from-pink-500 to-pink-600',
      'from-indigo-500 to-indigo-600',
      'from-red-500 to-red-600',
      'from-teal-500 to-teal-600',
      'from-orange-500 to-orange-600',
    ]
    return gradients[id % gradients.length]
  }

  return (
    <div 
      className="group bg-white dark:bg-gray-900 rounded-xl shadow-sm border border-gray-200 dark:border-gray-800 overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className={`h-1.5 bg-gradient-to-r ${getGradient(member.id)}`}></div>
      
      <div className="p-5 text-center">
        <div className="relative inline-block">
          <div className={`w-24 h-24 mx-auto bg-gradient-to-br ${getGradient(member.id)} rounded-2xl flex items-center justify-center text-white text-2xl font-bold mb-3 shadow-lg transition-transform duration-300 group-hover:scale-105`}>
            {member.avatar ? (
              <img src={member.avatar} alt={member.name} className="w-full h-full rounded-2xl object-cover" />
            ) : (
              getInitials(member.name)
            )}
          </div>
          <div className="absolute bottom-2 right-4 w-3.5 h-3.5 bg-green-500 border-2 border-white dark:border-gray-900 rounded-full"></div>
        </div>
        <h3 className="font-bold text-lg mt-2 group-hover:text-blue-600 transition-colors">
          {member.name}
        </h3>
        <p className="text-sm font-medium text-blue-600 dark:text-blue-400 mt-1">
          {member.role}
        </p>
        <p className="text-sm text-gray-600 dark:text-gray-400 mt-2 line-clamp-2">
          {member.bio}
        </p>
        <div className="flex flex-wrap gap-1.5 justify-center mt-3">
          {member.skills.slice(0, 3).map(skill => (
            <span 
              key={skill} 
              className="px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded-md text-xs font-medium text-gray-700 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors"
            >
              {skill}
            </span>
          ))}
          {member.skills.length > 3 && (
            <span className="px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded-md text-xs font-medium">
              +{member.skills.length - 3}
            </span>
          )}
        </div>

        <div className="flex gap-2 mt-4 pt-3 border-t border-gray-100 dark:border-gray-800">
          <button className="flex-1 px-3 py-1.5 text-sm bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
            Message
          </button>
          <button className="flex-1 px-3 py-1.5 text-sm border border-gray-300 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
            Profile
          </button>
        </div>
      </div>
    </div>
  )
}