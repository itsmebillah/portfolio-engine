type Props = {
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
};

export default function SectionContainer({
  title,
  subtitle,
  children,
}: Props) {

  return (

    <section className="py-32">

      {/* HEADER */}
      {(title || subtitle) && (

        <div className="mb-16 text-center">

          {subtitle && (

            <p className="text-orange-500 uppercase tracking-[4px] mb-4">
              {subtitle}
            </p>

          )}

          {title && (

            <h2 className="text-5xl md:text-6xl font-black leading-tight">
              {title}
            </h2>

          )}

        </div>

      )}

      {/* CONTENT */}
      {children}

    </section>

  );

}