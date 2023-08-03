export function SingleVideoCard({ video }) {
  return (
    <>
      <section className="w-full md:w-2/3">
        <div className="image-container flex flex-col rounded-md border-gray-100 aspect-video w-full md:w-200 h-1/3 md:h-150 max-w-full max-h-full ">
          <iframe
            width="250"
            height="200"
            src={video?.src}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title={video?.title}
          />
        </div>
      </section>
    </>
  );
}
