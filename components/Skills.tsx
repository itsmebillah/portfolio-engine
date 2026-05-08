type Props = {
  skills: any[];
};

export default function Skills({
  skills,
}: Props) {

  const firstHalf =
    skills?.slice(
      0,
      Math.ceil(skills.length / 2)
    );

  const secondHalf =
    skills?.slice(
      Math.ceil(skills.length / 2)
    );

  return (

    <div className="max-w-5xl mx-auto bg-white/[0.03] border border-white/10 rounded-[32px] backdrop-blur-xl p-6 md:p-8">

      {/* TITLE */}
      <div className="text-center mb-10">

        <h2 className="text-3xl md:text-4xl font-black text-orange-400">

          Technical Skills

        </h2>

      </div>

      {/* SKILLS GRID */}
      <div className="grid md:grid-cols-2 gap-x-8 gap-y-2">

        {/* LEFT */}
        <div>

          {firstHalf?.map((skill) => (

            <div
              key={skill.id}
              className="mb-6"
            >

              {/* HEADER */}
              <div className="flex justify-between mb-2">

                <div>

                  <h3 className="font-semibold text-white text-sm md:text-base">

                    {skill.name}

                  </h3>

                  <p className="text-xs text-gray-500 mt-1">

                    {skill.category}

                  </p>

                </div>

                <span className="text-orange-400 font-semibold text-xs md:text-sm">

                  {skill.level || 90}%

                </span>

              </div>

              {/* BAR */}
              <div className="h-2 bg-white/10 rounded-full overflow-hidden">

                <div
                  className="h-full rounded-full bg-gradient-to-r from-orange-500 to-orange-400 transition-all duration-1000"
                  style={{
                    width: `${skill.level || 90}%`,
                  }}
                />

              </div>

            </div>

          ))}

        </div>

        {/* RIGHT */}
        <div>

          {secondHalf?.map((skill) => (

            <div
              key={skill.id}
              className="mb-6"
            >

              {/* HEADER */}
              <div className="flex justify-between mb-2">

                <div>

                  <h3 className="font-semibold text-white text-sm md:text-base">

                    {skill.name}

                  </h3>

                  <p className="text-xs text-gray-500 mt-1">

                    {skill.category}

                  </p>

                </div>

                <span className="text-orange-400 font-semibold text-xs md:text-sm">

                  {skill.level || 90}%

                </span>

              </div>

              {/* BAR */}
              <div className="h-2 bg-white/10 rounded-full overflow-hidden">

                <div
                  className="h-full rounded-full bg-gradient-to-r from-orange-500 to-orange-400 transition-all duration-1000"
                  style={{
                    width: `${skill.level || 90}%`,
                  }}
                />

              </div>

            </div>

          ))}

        </div>

      </div>

      {/* CATEGORY BOXES */}
      <div className="grid md:grid-cols-4 gap-4 mt-10">

        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-center hover:border-orange-500/30 transition">

          <div className="text-2xl mb-2">
            🗄️
          </div>

          <h3 className="text-sm font-bold mb-1">

            Data Analysis

          </h3>

          <p className="text-[11px] text-gray-400 leading-relaxed">

            SQL, Python, Excel

          </p>

        </div>

        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-center hover:border-orange-500/30 transition">

          <div className="text-2xl mb-2">
            🤖
          </div>

          <h3 className="text-sm font-bold mb-1">

            Automation

          </h3>

          <p className="text-[11px] text-gray-400 leading-relaxed">

            Apps Script, APIs

          </p>

        </div>

        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-center hover:border-orange-500/30 transition">

          <div className="text-2xl mb-2">
            📊
          </div>

          <h3 className="text-sm font-bold mb-1">

            BI & Visualization

          </h3>

          <p className="text-[11px] text-gray-400 leading-relaxed">

            Power BI, Dashboards

          </p>

        </div>

        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-center hover:border-orange-500/30 transition">

          <div className="text-2xl mb-2">
            💻
          </div>

          <h3 className="text-sm font-bold mb-1">

            Development

          </h3>

          <p className="text-[11px] text-gray-400 leading-relaxed">

            JavaScript, HTML, CSS

          </p>

        </div>

      </div>

    </div>

  );

}