// ── Update your map embed URL in src/config/site.js → mapEmbedSrc ──
import site from "../../config/site";

export default function GoogleMap() {
  return (
    <section className="h-[450px]">
      <iframe
        title={`${site.brand.first}${site.brand.second} Location`}
        src={site.mapEmbedSrc}
        className="h-full w-full border-0"
        loading="lazy"
        allowFullScreen
      />
    </section>
  );
}
