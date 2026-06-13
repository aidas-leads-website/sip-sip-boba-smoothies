import Image from "next/image";
import { gallery } from "@/lib/content";
import { business } from "@/lib/business";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { ArrowIcon } from "@/components/icons";

export function Gallery() {
  return (
    <section id="gallery" className="relative scroll-mt-20 bg-white py-20 md:py-28">
      <div className="container-page">
        <SectionHeading
          eyebrow="Gallery"
          title={
            <>
              A peek at the <span className="text-gradient">good stuff</span>
            </>
          }
          subtitle="Drinks this pretty deserve a photo. Swing by for the real thing."
        />

        <div className="mt-12 grid auto-rows-[200px] grid-cols-2 gap-4 md:grid-cols-3 md:auto-rows-[240px]">
          {gallery.map((img, i) => (
            <Reveal
              key={img.src}
              delay={(i % 3) * 80}
              // Make the first and fourth tiles span larger for a dynamic mosaic.
              className={i === 0 ? "col-span-2 row-span-1 md:row-span-2" : i === 3 ? "md:col-span-1 md:row-span-2" : ""}
            >
              <figure className="group relative h-full w-full overflow-hidden rounded-[1.75rem] bg-cream shadow-soft">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(max-width: 768px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <figcaption className="sr-only">{img.alt}</figcaption>
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/30 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
              </figure>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-10 text-center">
          <a
            href={business.links.google}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 rounded-full bg-cream px-6 py-3 font-display font-bold text-taro-dark shadow-soft transition-all hover:-translate-y-0.5"
          >
            See more photos on Google
            <ArrowIcon className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
