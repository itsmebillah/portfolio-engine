type Props = {
  skills: any[];
};

export default function Skills({
  skills,
}: Props) {

  return (
    <div className="space-y-4">

      {skills?.map((skill) => (

        <div key={skill.id}>

          <div className="flex justify-between mb-1">

            <span>{skill.name}</span>

            <span>{skill.level}%</span>

          </div>

          <div className="w-full h-3 bg-gray-800 rounded-full">

            <div
              className="h-3 bg-orange-500 rounded-full"
              style={{
                width: `${skill.level}%`,
              }}
            />

          </div>

        </div>

      ))}

    </div>
  );
}