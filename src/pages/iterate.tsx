import Image from "next/image";

export default function Iterate() {
  return (
    <div className="min-h-screen bg-[#f8faf5] flex flex-col items-center justify-center px-6 py-12">
      {/* Heading */}
      <h1 className="text-5xl font-semibold text-gray-900 mb-6">Iterate</h1>

      {/* Subtext */}
      <p className="text-lg text-gray-600 max-w-2xl text-center mb-8">
        Experiment and refine with ease. Adaline’s iteration tools keeps you in
        flow, letting you iterate on prompts rapidly.
      </p>

      {/* Button */}
      <button className="px-6 py-3 bg-green-900 text-white rounded-full text-sm font-semibold hover:bg-green-800 transition">
        START FOR FREE
      </button>

      {/* Trusted By Section */}
      <div className="mt-20 w-full max-w-5xl text-center">
        <p className="text-xs uppercase tracking-widest text-gray-500 mb-6">
          Trusted By
        </p>

        {/* Logos */}
        <div className="flex flex-wrap justify-center items-center gap-12 opacity-90">
          <Image src="/logos/statflo.png" alt="Statflo" width={100} height={40} />
          <Image src="/logos/giift.png" alt="Giift" width={100} height={40} />
          <Image src="/logos/coframe.png" alt="Coframe" width={100} height={40} />
          <Image src="/logos/reforge.png" alt="Reforge" width={100} height={40} />
          <Image src="/logos/symbolic.png" alt="Symbolic.ai" width={100} height={40} />
          <Image src="/logos/doordash.png" alt="DoorDash" width={100} height={40} />
        </div>
      </div>
    </div>
  );
}
