import Image from "next/image";

const projects = [
  {
    title: "Beyond Limits",
    description: "Developing predictive recommendations for customers in the energy industry based on artificial intelligence.",
    customer: "US Company",
    involvement: "24 months",
    role: "Team Lead of UI Direction",
    responsibilities: "Architecture and design, coaching, task estimation, and unit testing.",
    teamSize: "12-16",
    technologies: "React, Express, MongoDB, Postgres, Auth0"
  },
  {
    title: "Avetta",
    description: "A comprehensive Supply Chain Risk Management (SCRM) platform.",
    customer: "US Company",
    involvement: "6 months",
    role: "Team Lead, Full Stack",
    responsibilities: "Task estimation, code development, and optimization.",
    teamSize: "8-10",
    technologies: "Elm, NestJS, Postgres, Docker"
  },
  {
    title: "Beneplace",
    description: "A marketplace offering discounts to employees as a corporate benefit.",
    customer: "US Company",
    involvement: "3 years",
    role: "Team Lead, Full Stack",
    responsibilities: "Architecture, design, task management, and code reviews.",
    teamSize: "12-16",
    technologies: "Angular, Express, MongoDB, ElasticSearch"
  },
  {
    title: "Redaction",
    description: "Application for modifying PDF files for government requirements.",
    customer: "US Company",
    involvement: "1 year",
    role: "Front-End Developer",
    responsibilities: "UI design, code development, and unit testing.",
    teamSize: "8",
    technologies: "React, NestJS, MongoDB"
  },
  {
    title: "Amanda",
    description: "Document management system used by the US government.",
    customer: "US Company",
    involvement: "8 months",
    role: "Front-End and Mobile Developer",
    responsibilities: "iOS/Android development and product support.",
    teamSize: "10-12",
    technologies: "AngularJS, Cordova, TypeScript"
  },
  {
    title: "Bank",
    description: "Banking application for managing customer needs.",
    customer: "US Company",
    involvement: "2 years",
    role: "Front-End Developer",
    responsibilities: "Task management, code development, and support.",
    teamSize: "16-18",
    technologies: "Angular, Express, GitBucket"
  }
];

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <section id="about-me" className="flex flex-col items-center sm:items-start gap-4">
          <h2 className="text-2xl font-bold">About Me</h2>
          <Image
            src="/me.jpeg"
            alt="My photo"
            width={150}
            height={150}
            className="rounded-full"
          />
          <p className="text-center sm:text-left">
            Hello! I'm a passionate developer with experience in building web applications using modern technologies.
          </p>
        </section>
        
        <section id="projects" className="flex flex-col items-center sm:items-start gap-4">
          <h2 className="text-2xl font-bold">My Projects</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="p-6 border rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out transform hover:-translate-y-1 bg-white">
                <h3 className="font-bold text-2xl mb-4 text-gray-800">{project.title}</h3>
                <p className="text-gray-600 mb-2"><strong>Description:</strong> {project.description}</p>
                <p className="text-gray-600 mb-2"><strong>Customer:</strong> {project.customer}</p>
                <p className="text-gray-600 mb-2"><strong>Involvement:</strong> {project.involvement}</p>
                <p className="text-gray-600 mb-2"><strong>Project Role:</strong> {project.role}</p>
                <p className="text-gray-600 mb-2"><strong>Responsibilities:</strong> {project.responsibilities}</p>
                <p className="text-gray-600 mb-2"><strong>Team Size:</strong> {project.teamSize}</p>
                <p className="text-gray-600"><strong>Technologies:</strong> {project.technologies}</p>
              </div>
            ))}
          </div>
        </section>
        <section id="contacts" className="flex flex-col items-center sm:items-start gap-4">
            <h2 className="text-2xl font-bold">Contacts</h2>
            <p>Email: <a href="mailto:skus1992@gmail.com" className="text-blue-500 hover:underline">skus1992@gmail.com</a></p>
            <p>Phone: <a href="tel:+380939267692" className="text-blue-500 hover:underline">+380939267692</a></p>
            {/* <p>Telegram: <a href="https://t.me/yourusername" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">yourusername</a></p> */}
            <p>WhatsApp: <a href="https://wa.me/380939267692" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Chat on WhatsApp</a></p>
            <p>LinkedIn: <a href="https://</div>www.linkedin.com/in/skus-vitalii-16632b116/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline"><i className="fab fa-linkedin"></i> myprofile</a></p>
          <p>GitHub: <a href="https://github.com/skusVV" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline"><i className="fab fa-github"></i> skusVV</a></p>
        </section>
      </main>
    </div>
  );
}
