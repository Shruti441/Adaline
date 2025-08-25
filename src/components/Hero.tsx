export default function Hero({ logos }: { logos: JSX.Element[] }) {
  return (
    <main className="flex flex-col justify-start items-center min-h-screen pt-20 text-center px-6">
      <h1 className="atlas-web-lg mx-[var(--grid-margin)] max-w-[32ch] md:text-[min(43px,min(calc(2.5vh+25px),calc(1.5vw+25px)))] md:leading-[calc(52/53)] md:tracking-[-0.04em]">
        <span>The single platform to iterate, evaluate, deploy, and monitor LLMs</span>
      </h1>

      <div className="mt-12 text-[14px] font-semibold tracking-[2px] text-gray-600">
        TRUSTED BY
      </div>

      <div className="w-full overflow-hidden mt-6">
        <div className="flex gap-16 animate-scroll whitespace-nowrap min-w-max px-4">
          {logos.concat(logos).map((logo, index) => (
            <div key={index} className="flex items-center">{logo}</div>
          ))}
        </div>
      </div>
    </main>
  );
}
