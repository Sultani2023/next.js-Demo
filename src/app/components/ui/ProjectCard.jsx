import Link from "next/link";

export default function ProjectCard({ project, compact = false, delay = 0 }) {
  const statusColors = {
    "In Progress":
      "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400",
    Completed:
      "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400",
    Planning:
      "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400",
  };

  if (compact) {
    return (
      <Link href={`/projects/${project.id}`}>
        <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-xl hover:shadow-md transition-all cursor-pointer border border-gray-200 dark:border-gray-700">
          <div className="flex justify-between items-start">
            <div className="flex-1">
              <h3 className="font-semibold">{project.title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-1 line-clamp-1">
                {project.description.substring(0, 60)}...
              </p>
            </div>
            <span
              className={`px-2 py-1 rounded-full text-xs font-medium ml-2 ${statusColors[project.status]}`}
            >
              {project.status}
            </span>
          </div>
        </div>
      </Link>
    );
  }

  return (
    <Link href={`/projects/${project.id}`}>
      <div
        className="bg-white dark:bg-gray-900 rounded-xl shadow-sm border border-gray-200 dark:border-gray-800 hover:shadow-xl transition-all duration-300 p-5 transform hover:-translate-y-1 cursor-pointer group"
        style={{ animationDelay: `${delay}ms` }}
      >
        <h3 className="text-lg font-bold mb-2 group-hover:text-blue-600 transition-colors">
          {project.title}
        </h3>
        <p className="text-gray-600 dark:text-gray-400 text-sm mb-3 line-clamp-2">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 mb-3">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded-md text-xs"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex justify-between items-center">
          <span
            className={`px-2 py-1 rounded-full text-xs font-medium ${statusColors[project.status]}`}
          >
            {project.status}
          </span>
          <button
            type="button"
            className="text-white text-sm px-4 py-2 bg-blue-600 opacity-0 rounded group-hover:opacity-100 transition-opacity cursor-pointer "
          >
            View Details
          </button>
        </div>
      </div>
    </Link>
  );
}
