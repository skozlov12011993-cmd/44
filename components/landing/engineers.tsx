import Image from "next/image";
import { ENGINEERS } from "@/lib/data";
import { SectionHeading } from "./section-heading";

export function Engineers() {
  return (
    <section className="py-16 sm:py-24">
      <div className="container mx-auto px-4">
        <SectionHeading
          eyebrow="Команда"
          title="Наши инженеры"
          description="Опытные специалисты, которые подключат и настроят ваш интернет под ключ."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {ENGINEERS.map((engineer) => (
            <figure
              key={engineer.name}
              className="card-hover flex flex-col overflow-hidden rounded-2xl border border-border bg-card"
            >
              <div className="relative aspect-[3/4] w-full overflow-hidden bg-muted">
                <Image
                  src={engineer.image}
                  alt={engineer.alt}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
              <figcaption className="flex flex-1 flex-col gap-1 p-6">
                <h3 className="text-xl font-semibold">{engineer.name}</h3>
                <p className="text-sm font-medium text-brand">
                  {engineer.role}
                </p>
                <p className="mt-2 text-sm text-muted-foreground">
                  {engineer.description}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
