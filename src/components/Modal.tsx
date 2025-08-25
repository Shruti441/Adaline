export default function Modal({ showModal, setShowModal }: { showModal: boolean, setShowModal: (val: boolean) => void }) {
  if (!showModal) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"
      onClick={() => setShowModal(false)}
    >
      <div
        className="bg-white rounded-xl overflow-hidden shadow-2xl w-[90%] md:w-[800px] aspect-video max-h-[90vh] relative"
        onClick={(e) => e.stopPropagation()}
      >
        <video
          src="https://www.adaline.ai/videos/product-demo.mp4"
          autoPlay
          controls
          className="w-full h-full object-cover"
        />
        <button
          onClick={() => setShowModal(false)}
          className="absolute top-2 right-2 text-white bg-black/60 rounded-full w-8 h-8 flex items-center justify-center hover:bg-black"
        >
          ✕
        </button>
      </div>
    </div>
  );
}
