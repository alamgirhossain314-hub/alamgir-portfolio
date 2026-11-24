
const skills = [
  "Adobe Photoshop",
  "Adobe Illustrator",
  "Video Editing",
  "Microsoft Word",
  "Microsoft Excel",
  "Creative Content Design"
];

const projects = [
  { title: "Graphic Design", desc: "Creative posters, branding and social media designs." },
  { title: "Video Editing", desc: "Promotional videos, reels and visual storytelling." },
  { title: "Digital Content", desc: "Creative content for brands and businesses." }
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#101114] text-white">
      <nav className="flex justify-between items-center px-6 py-6 border-b border-white/10">
        <h1 className="text-xl font-bold">ALAMGIR.</h1>
        <a href="#contact" className="text-amber-400">Contact Me</a>
      </nav>

      <section className="max-w-5xl mx-auto px-6 py-24">
        <p className="text-amber-400 mb-4 tracking-widest">
          WELCOME TO MY PORTFOLIO
        </p>
        <h2 className="text-5xl md:text-7xl font-bold leading-tight">
          ALAMGIR <span className="text-amber-400">KUMKUM</span>
        </h2>
        <h3 className="text-2xl mt-6 text-gray-300">
          Graphic Designer & Multimedia Executive
        </h3>
        <p className="text-gray-400 mt-6 max-w-xl leading-8">
          I create engaging visual designs, promotional videos
          and creative digital experiences. Passionate about
          design, creativity and visual storytelling.
        </p>
        <a href="#projects"
          className="inline-block mt-9 bg-amber-500 text-black
          font-bold px-7 py-4 rounded-lg">
          Explore My Work
        </a>
      </section>

      <section className="bg-[#191a20] px-6 py-16">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">About Me</h2>
          <p className="text-gray-300 leading-8">
            A creative and detail-oriented professional with
            experience in graphic design, video editing and
            computer operations. Skilled in Adobe Photoshop,
            Adobe Illustrator and Microsoft Office applications.
          </p>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-8">My Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {skills.map((skill) => (
            <div key={skill}
              className="border border-white/10 rounded-xl p-5 text-gray-200">
              {skill}
            </div>
          ))}
        </div>
      </section>

      <section id="projects" className="bg-[#191a20] px-6 py-16">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">My Projects</h2>
          <div className="grid md:grid-cols-3 gap-5">
            {projects.map((project) => (
              <div key={project.title}
                className="border border-white/10 rounded-xl p-6">
                <h3 className="text-xl text-amber-400 font-bold">
                  {project.title}
                </h3>
                <p className="text-gray-400 mt-3 leading-7">
                  {project.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="max-w-5xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold">Let's Connect</h2>
        <p className="text-gray-400 mt-4">
          Interested in working together? Contact me.
        </p>
        <a href="mailto:your-email@example.com"
          className="inline-block mt-5 text-amber-400">
          Email Me
        </a>
      </section>

      <footer className="text-center text-gray-500 py-8 border-t border-white/10">
        © 2026 Alamgir Kumkum. All Rights Reserved.
      </footer>
    </main>
  );
}
