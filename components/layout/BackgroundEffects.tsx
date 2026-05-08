export default function BackgroundEffects() {

  return (

    <div className="fixed inset-0 -z-50 overflow-hidden bg-[#0B1120]">

      {/* MAIN GRADIENT */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,107,53,0.15),transparent_30%),radial-gradient(circle_at_bottom_right,_rgba(236,72,153,0.12),transparent_30%)]" />

      {/* TOP BLUR */}
      <div className="absolute top-[-200px] left-[-150px] w-[500px] h-[500px] rounded-full bg-orange-500/10 blur-3xl" />

      {/* RIGHT GLOW */}
      <div className="absolute top-[20%] right-[-200px] w-[450px] h-[450px] rounded-full bg-pink-500/10 blur-3xl" />

      {/* BOTTOM GLOW */}
      <div className="absolute bottom-[-200px] left-[30%] w-[500px] h-[500px] rounded-full bg-blue-500/10 blur-3xl" />

      {/* GRID EFFECT */}
      <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(rgba(255,255,255,0.7)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.7)_1px,transparent_1px)] bg-[size:80px_80px]" />

    </div>

  );
}