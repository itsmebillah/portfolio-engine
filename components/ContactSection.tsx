type Props = {
  profile: any;
};

export default function ContactSection({
  profile,
}: Props) {

  return (

    <section
      id="contact"
      className="py-32"
    >

      {/* HEADER */}
      <div className="text-center mb-20">

        <p className="text-orange-500 uppercase tracking-[5px] mb-4">

          CONTACT

        </p>

        <h2 className="text-5xl md:text-6xl font-black mb-6 leading-tight">

          Let's Build Something Amazing

        </h2>

        <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">

          Open for collaborations, freelance projects,
          partnerships, and impactful opportunities.

        </p>

      </div>

      {/* MAIN GRID */}
      <div className="grid lg:grid-cols-2 gap-10">

        {/* LEFT SIDE */}
        <div className="relative overflow-hidden bg-white/5 border border-white/10 backdrop-blur-xl rounded-[40px] p-10">

          {/* GLOW */}
          <div className="absolute top-[-100px] right-[-100px] w-[250px] h-[250px] rounded-full bg-orange-500/10 blur-3xl" />

          <div className="relative z-10">

            <div className="mb-12">

              <p className="text-orange-400 uppercase tracking-[4px] mb-4">

                Contact Info

              </p>

              <h3 className="text-4xl font-black leading-tight">

                Get In Touch

              </h3>

            </div>

            <div className="space-y-8">

              {/* EMAIL */}
              <div className="flex items-start gap-5">

                <div className="w-16 h-16 rounded-3xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-2xl">

                  ✉️

                </div>

                <div>

                  <p className="text-gray-500 mb-2">
                    Email Address
                  </p>

                  <a
                    href={`mailto:${profile?.email}`}
                    className="text-2xl font-bold hover:text-orange-400 transition break-all"
                  >
                    {profile?.email || "your@email.com"}
                  </a>

                </div>

              </div>

              {/* PHONE */}
              <div className="flex items-start gap-5">

                <div className="w-16 h-16 rounded-3xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-2xl">

                  📞

                </div>

                <div>

                  <p className="text-gray-500 mb-2">
                    Phone Number
                  </p>

                  <p className="text-2xl font-bold">

                    {profile?.phone || "+880 0000-000000"}

                  </p>

                </div>

              </div>

              {/* LOCATION */}
              <div className="flex items-start gap-5">

                <div className="w-16 h-16 rounded-3xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-2xl">

                  📍

                </div>

                <div>

                  <p className="text-gray-500 mb-2">
                    Location
                  </p>

                  <p className="text-2xl font-bold">

                    {profile?.location || "Bangladesh"}

                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

        {/* RIGHT SIDE */}
        <div className="relative overflow-hidden bg-white/5 border border-white/10 backdrop-blur-xl rounded-[40px] p-10">

          {/* GLOW */}
          <div className="absolute bottom-[-100px] left-[-100px] w-[250px] h-[250px] rounded-full bg-pink-500/10 blur-3xl" />

          <div className="relative z-10">

            <div className="mb-10">

              <p className="text-orange-400 uppercase tracking-[4px] mb-4">

                Send Message

              </p>

              <h3 className="text-4xl font-black leading-tight">

                Start a Conversation

              </h3>

            </div>

            <form className="space-y-6">

              {/* NAME */}
              <input
                type="text"
                placeholder="Your Name"
                className="w-full h-16 rounded-2xl bg-black/30 border border-white/10 px-6 text-white outline-none focus:border-orange-500 transition"
              />

              {/* EMAIL */}
              <input
                type="email"
                placeholder="Your Email"
                className="w-full h-16 rounded-2xl bg-black/30 border border-white/10 px-6 text-white outline-none focus:border-orange-500 transition"
              />

              {/* SUBJECT */}
              <input
                type="text"
                placeholder="Subject"
                className="w-full h-16 rounded-2xl bg-black/30 border border-white/10 px-6 text-white outline-none focus:border-orange-500 transition"
              />

              {/* MESSAGE */}
              <textarea
                rows={6}
                placeholder="Write your message..."
                className="w-full rounded-2xl bg-black/30 border border-white/10 p-6 text-white outline-none focus:border-orange-500 transition resize-none"
              />

              {/* BUTTON */}
              <button
                type="submit"
                className="w-full h-16 rounded-2xl bg-orange-500 hover:bg-orange-600 transition text-lg font-bold"
              >

                Send Message

              </button>

            </form>

          </div>

        </div>

      </div>

    </section>

  );

}