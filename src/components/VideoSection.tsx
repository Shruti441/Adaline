export default function VideoSection() {
  return (
    <section className="relative w-full h-[100vh] overflow-hidden bg-cover bg-center" style={{ backgroundImage: "url('/zen-background.jpg')" }}>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-[90%] max-w-5xl aspect-video shadow-xl rounded-xl overflow-hidden border border-white/30">
          <video
            src="https://www.adaline.ai/videos/product-demo.mp4"
            
            controls
            loop
            playsInline
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
