import Image from "next/image";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/constants";


export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen pb-20  sm:p-8 font-[family-name:var(--font-geist-sans)]">
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
            With over 8 years of experience in the software industry, I have played a pivotal role in the development and successful delivery of 6 commercial software projects. My expertise extends across various aspects of software engineering, including performance optimization, architectural design, and scalability.
          </p>
          <p className="text-center sm:text-left">
            As a Full Stack Engineer, I possess a profound understanding and hands-on experience with microservices, micro frontends, and modern JavaScript frameworks such as React, Angular, Express, and NestJs. I have also utilized various infrastructure tools, including Docker and Kubernetes, to streamline development and deployment processes.
          </p>
          <p className="text-center sm:text-left">
            I specialize in developing Chrome extensions and engaging with Large Language Models, showcasing my ability to work with cutting-edge technologies and deliver innovative solutions.
          </p>
          <p className="text-center sm:text-left">
            My experience includes extensive testing of large enterprise products, employing methodologies like unit testing, end-to-end (e2e) testing, and screenshot testing to ensure robust and reliable software performance.
          </p>
          <p className="text-center sm:text-left">
            In addition to my technical proficiency, I have comprehensive knowledge of software development methodologies, both in theory and in practical application. Over 2 years of managing a full-stack development team have honed my leadership skills, blending technical expertise with effective team management.
          </p>
        </section>
        
        <section id="projects" className="flex flex-col items-center sm:items-start p-6 bg-gradient-to-b from-white to-gray-100 rounded-lg shadow-lg w-full">
         <h2 className="text-3xl font-extrabold text-gray-800 mb-6 border-b-4 border-indigo-500 pb-2">My Projects</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
        </section>
        <section
          id="skills"
          className="flex flex-col items-center sm:items-start p-6 bg-gradient-to-b from-white to-gray-100 rounded-lg shadow-lg w-full"
        >
          <h2 className="text-3xl font-extrabold text-gray-800 mb-6 border-b-4 border-indigo-500 pb-2">
            My Skills
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-700 w-full">
            <div className="flex items-center gap-2">
              <span className="text-indigo-500">
          <i className="fas fa-code"></i>
              </span>
              <p>JavaScript/TypeScript</p>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-indigo-500">
          <i className="fas fa-code-branch"></i>
              </span>
              <p>React, NextJs, Angular</p>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-indigo-500">
          <i className="fas fa-server"></i>
              </span>
              <p>Node.js, Express, NestJs</p>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-indigo-500">
          <i className="fas fa-project-diagram"></i>
              </span>
              <p>Microservices, Micro Frontends</p>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-indigo-500">
          <i className="fas fa-cubes"></i>
              </span>
              <p>Docker, Kubernetes</p>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-indigo-500">
          <i className="fas fa-puzzle-piece"></i>
              </span>
              <p>Chrome Extensions</p>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-indigo-500">
          <i className="fas fa-vial"></i>
              </span>
              <p>Unit Testing, End-to-End Testing, Screenshot Testing</p>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-indigo-500">
          <i className="fas fa-lightbulb"></i>
              </span>
              <p>Software Development Methodologies</p>
            </div>
          </div>
        </section>
        <section id="contacts" className="flex flex-col items-center sm:items-start p-6 bg-gradient-to-b from-white to-gray-100 rounded-lg shadow-lg w-full">
            <h2 className="text-3xl font-extrabold text-gray-800 mb-6 border-b-4 border-indigo-500 pb-2">Contacts</h2>
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
