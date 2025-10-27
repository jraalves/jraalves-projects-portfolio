import Image from "next/image";
import { portfolioData } from "./data-index";

export default function Home() {
  return (
    <main className="max-w-4xl mx-auto p-6">
      {/* Header */}
      <section className="text-center mt-12 border-b pb-6">
        <Image
          src={portfolioData.profileImage} 
          alt={portfolioData.name}
          width={160}
          height={160}
          className="rounded-full mx-auto shadow-lg border-4 border-blue-600"
        />
        <h1 className="text-3xl font-bold mt-4">{portfolioData.name}</h1>
        <p className="text-xl text-blue-600">{portfolioData.title}</p>
      </section>

      {/* About */}
      <section id="sobre" className="mt-12">
        <h2 className="text-2xl font-semibold border-b pb-2 mb-4">Sobre mim</h2>
        <p className="text-gray-700 mt-4 leading-relaxed">{portfolioData.about}</p>
      </section>

      {/* Projects */}
      <section id="projetos" className="mt-12">
        <h2 className="text-2xl font-semibold border-b pb-2 mb-4">Projetos & SRE Practices</h2>
        <div className="grid md:grid-cols-2 gap-6 mt-6">
          {portfolioData.projects.map((project, idx) => (
            <div key={idx} className="p-6 border border-gray-200 rounded-lg shadow-md hover:shadow-xl transition duration-300">
              <h3 className="text-lg font-bold text-gray-800">{project.name}</h3>
              <p className="text-gray-600 mt-2">{project.description}</p>
              <a href={project.link} target="_blank" className="text-blue-600 font-medium mt-3 inline-block hover:underline">
                Ver no GitHub →
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contato" className="mt-12 text-center border-t pt-6">
        <h2 className="text-2xl font-semibold">Contato</h2>
        <div className="flex justify-center gap-6 mt-4">
          <a href={portfolioData.contact.linkedin} target="_blank" className="text-blue-600 hover:text-blue-800 font-medium">LinkedIn</a>
          <a href={portfolioData.contact.github} target="_blank" className="text-blue-600 hover:text-blue-800 font-medium">GitHub</a>
          <a href={`mailto:${portfolioData.contact.email}`} className="text-blue-600 hover:text-blue-800 font-medium">Email</a>
          <a href={portfolioData.contact.whatsapp} target="_blank" className="text-blue-600 hover:text-blue-800 font-medium">WhatsApp</a>
        </div>
      </section>
    </main>
  );
}
