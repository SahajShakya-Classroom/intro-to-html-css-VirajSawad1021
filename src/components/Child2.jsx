export const Child2 = () => {
  return (
    <div className="p-4 border border-gray-200 rounded bg-white mb-4 flex-1">
      <h3 className="text-lg font-medium mb-2 text-gray-800">Child 2 — Media</h3>

      <div className="w-full aspect-video">
        <iframe
          className="w-full h-full"
          src="https://www.youtube.com/embed/V9PVRfjEBTI?list=RDV9PVRfjEBTI&start_radio=1"
          title="Embedded Song"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

      <p className="mt-2 text-sm text-gray-500">Embedded from the provided YouTube link.</p>
    </div>
  );
};
