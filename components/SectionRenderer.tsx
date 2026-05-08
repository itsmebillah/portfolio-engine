import Skills from "./Skills";
import Projects from "./Projects";
import Certificates from "./Certificates";

type Props = {
  sections: any[];
  skills: any[];
  projects: any[];
  certificates: any[];
};

export default function SectionRenderer({
  sections,
  skills,
  projects,
  certificates,
}: Props) {

  return (
    <div className="space-y-20">

      {sections?.map((section) => (

        <div
          key={section.id}
          className="relative"
        >

          {/* TIMELINE DOT */}
          <div className="absolute -left-[49px] top-6 w-5 h-5 rounded-full bg-orange-500 border-4 border-black" />

          {/* SECTION */}
          <div className="bg-gray-900 border border-gray-800 rounded-3xl p-8">

            {section.name === "skills" && (
              <Skills skills={skills} />
            )}

            {section.name === "projects" && (
              <Projects projects={projects} />
            )}

            {section.name === "certificates" && (
              <Certificates
                certificates={certificates}
              />
            )}

          </div>

        </div>

      ))}

    </div>
  );
}