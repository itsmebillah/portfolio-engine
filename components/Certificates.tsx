type Props = {
  certificates: any[];
};

export default function Certificates({
  certificates,
}: Props) {

  return (
    <div className="mt-16">

      <h2 className="text-4xl font-bold mb-8">
        Certificates
      </h2>

      <div className="grid md:grid-cols-2 gap-6">

        {certificates?.map((certificate) => (

          <div
            key={certificate.id}
            className="bg-gray-900 rounded-2xl overflow-hidden border border-gray-800"
          >

            <img
              src={certificate.image}
              alt={certificate.title}
              className="w-full h-52 object-cover"
            />

            <div className="p-6">

              <h3 className="text-2xl font-bold mb-2">
                {certificate.title}
              </h3>

              <p className="text-gray-400 mb-2">
                {certificate.organization}
              </p>

              <p className="text-gray-500">
                {certificate.issue_date}
              </p>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}