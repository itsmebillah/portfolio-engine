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

    <div className="space-y-32">

      {sections?.map((section) => (

        <section
          key={section.id}
          id={section.name}
          className="relative"
        >

          {/* SECTION HEADER */}
          <div className="mb-16 text-center">

           <h2 className="text-4xl md:text-5xl font-black capitalize leading-tight">

  {section.name}

</h2>

          </div>

          {/* SECTION BODY */}
          <div>

            {/* SKILLS */}
            {section.name === "skills" && (

              <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-[40px] p-8 md:p-12">

                <Skills skills={skills} />

              </div>

            )}

            {/* PROJECTS */}
            {section.name === "projects" && (

              <Projects projects={projects} />

            )}

            {/* CERTIFICATES */}
            {section.name === "certificates" && (

              <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-[40px] p-8 md:p-12">

                <Certificates
                  certificates={certificates}
                />

              </div>

            )}

          </div>

        </section>

      ))}

    </div>

  );

}