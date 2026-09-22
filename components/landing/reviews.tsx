import Image from "next/image";
import { REVIEWS } from "@/lib/data";
import { SectionHeading } from "./section-heading";

export function Reviews() {
  return (
    <section className="py-16 sm:py-24">
      <div className="container mx-auto px-4">
        <SectionHeading
          eyebrow="Отзывы"
          title="Реальные отзывы"
          description="Что говорят наши клиенты после подключения интернета."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {REVIEWS.map((review) => (
            <figure
              key={review.alt}
              className="card-hover overflow-hidden rounded-2xl border border-border bg-card"
            >
              <div className="relative aspect-[3/5] w-full overflow-hidden bg-muted">
                <Image
                  src={review.image}
                  alt={review.alt}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover object-top"
                />
              </div>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
