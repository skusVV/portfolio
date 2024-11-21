import { IProject } from "@/models";

interface IProps {
  project: IProject;
}

export default function ProjectCard({ project }: IProps) {
  return (
      <div
        className="p-8 bg-gradient-to-br from-white to-gray-100 border border-gray-300 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-101"
      >
        <div className="mb-6">
          <h3 className="font-extrabold text-3xl mb-2 text-gray-800">{project.title}</h3>
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 text-gray-700">
          <div>
            <p className="mb-2">
              <span className="font-semibold">Description:</span> {project.description}
            </p>
            <p className="mb-2">
              <span className="font-semibold">Involvement:</span> {project.involvement}
            </p>
            <p className="mb-2">
              <span className="font-semibold">Role:</span> {project.role}
            </p>
          </div>
          <div>
            <p className="mb-2">
              <span className="font-semibold">Responsibilities:</span>{" "}
              {project.responsibilities}
            </p>
            <p className="mb-2">
              <span className="font-semibold">Team Size:</span> {project.teamSize}
            </p>
            <p>
              <span className="font-semibold">Technologies:</span> {project.technologies}
            </p>
          </div>
          {project.url && (
            <div className="mt-4 text-center">
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                {project.url}
              </a>
            </div>
          )}
        </div>
      </div>   
  )
}