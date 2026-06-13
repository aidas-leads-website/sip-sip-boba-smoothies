import { business } from "@/lib/business";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { ArrowIcon, ClockIcon, PhoneIcon, PinIcon } from "@/components/icons";

// Group consecutive days with identical hours for a tidy display.
function formatTime(t: string) {
  const [h, m] = t.split(":").map(Number);
  const ampm = h >= 12 ? "PM" : "AM";
  const hour = h % 12 === 0 ? 12 : h % 12;
  return m === 0 ? `${hour} ${ampm}` : `${hour}:${String(m).padStart(2, "0")} ${ampm}`;
}

export function Location() {
  return (
    <section id="location" className="relative scroll-mt-20 bg-cream py-20 md:py-28">
      <div className="container-page">
        <SectionHeading
          eyebrow="Find Us"
          title={
            <>
              Come <span className="text-gradient">sip with us</span>
            </>
          }
          subtitle="We're easy to find on Dallas Acworth Hwy — pull up, grab your drink, and stay a while."
        />

        <div className="mt-12 grid gap-8 lg:grid-cols-[1fr_1.1fr]">
          {/* Info card */}
          <Reveal className="order-2 lg:order-1">
            <div className="flex h-full flex-col gap-6 rounded-[2rem] bg-white p-7 shadow-soft sm:p-9">
              <InfoRow icon={<PinIcon className="h-6 w-6" />} title="Address">
                <a
                  href={business.directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-ink/75 transition-colors hover:text-taro-dark"
                >
                  {business.address.street}
                  <br />
                  {business.address.city}, {business.address.regionName} {business.address.postalCode}
                </a>
              </InfoRow>

              <InfoRow icon={<PhoneIcon className="h-6 w-6" />} title="Call or text">
                <a href={`tel:${business.phone.href}`} className="text-ink/75 transition-colors hover:text-taro-dark">
                  {business.phone.display}
                </a>
              </InfoRow>

              <InfoRow icon={<ClockIcon className="h-6 w-6" />} title="Hours">
                <ul className="space-y-1 text-ink/75">
                  {business.hours.map((h) => (
                    <li key={h.day} className="flex justify-between gap-6">
                      <span className="font-bold text-ink/80">{h.day}</span>
                      <span>
                        {formatTime(h.open)} – {formatTime(h.close)}
                      </span>
                    </li>
                  ))}
                </ul>
              </InfoRow>

              <div className="mt-auto flex flex-col gap-3 sm:flex-row">
                <a
                  href={business.directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-taro to-berry px-6 py-3.5 font-display font-bold text-white shadow-pop transition-all hover:-translate-y-0.5"
                >
                  Get Directions
                  <ArrowIcon className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </a>
                <a
                  href={`tel:${business.phone.href}`}
                  className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-cream px-6 py-3.5 font-display font-bold text-taro-dark shadow-soft transition-all hover:-translate-y-0.5"
                >
                  <PhoneIcon className="h-5 w-5" /> Call Us
                </a>
              </div>
            </div>
          </Reveal>

          {/* Map */}
          <Reveal className="order-1 lg:order-2">
            <div className="h-full min-h-[340px] overflow-hidden rounded-[2rem] shadow-soft">
              <iframe
                title={`Map to ${business.name}`}
                src={business.mapEmbedUrl}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-full min-h-[340px] w-full border-0"
                allowFullScreen
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function InfoRow({ icon, title, children }: { icon: React.ReactNode; title: string; children: React.ReactNode }) {
  return (
    <div className="flex gap-4">
      <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-taro/10 text-taro-dark">
        {icon}
      </span>
      <div>
        <h3 className="font-display text-lg font-bold text-ink">{title}</h3>
        <div className="mt-1">{children}</div>
      </div>
    </div>
  );
}
