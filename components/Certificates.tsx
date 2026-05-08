type Props = {
  certificates: any[];
};

export default function Certificates({
  certificates,
}: Props) {

  return (

    <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">

      {certificates?.map((certificate) => (

        <div
          key={certificate.id}
          className="group bg-black/30 border border-white/10 rounded-[32px] overflow-hidden hover:border-orange-500 hover:-translate-y-2 transition duration-300"
        >

          {/* IMAGE */}
          {certificate.cover_image && (

            <div className="overflow-hidden">

              <img
                src={certificate.cover_image}
                alt={certificate.title}
                className="w-full h-[240px] object-cover group-hover:scale-105 transition duration-500"
              />

            </div>

          )}

          {/* CONTENT */}
          <div className="p-7">

            {/* BADGE */}
            <div className="mb-5">

              <span className="bg-orange-500/10 border border-orange-500/20 text-orange-400 px-4 py-2 rounded-xl text-sm">

                Certified

              </span>

            </div>

            {/* TITLE */}
            <h3 className="text-2xl font-bold mb-4 leading-snug group-hover:text-orange-400 transition">

              {certificate.title}

            </h3>

            {/* DESCRIPTION */}
            <p className="text-gray-400 leading-relaxed mb-7 line-clamp-4">

              {certificate.description}

            </p>

            {/* BUTTON */}
            {certificate.live_link && (

              <a
                href={certificate.live_link}
                target="_blank"
                className="inline-flex items-center gap-2 text-orange-400 font-semibold"
              >

                Verify Certificate →

              </a>

            )}

          </div>

        </div>

      ))}

    </div>

  );

}