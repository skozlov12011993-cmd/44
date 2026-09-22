import { ADVANTAGES } from "@/lib/data";
import { SectionHeading } from "./section-heading";

export function Advantages() {
  return (
    <section className="py-16 sm:py-24">
      <div className="container mx-auto px-4">
        <SectionHeading
          eyebrow="Преимущества"
          title="Почему выбирают нас"
          description="Инженерный подход и честная работа — от сборки до монтажа и поддержки."
        />
        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {ADVANTAGES.map((advantage) => {
            const Icon = advantage.icon;
            return (
              <li
                key={advantage.title}
                className="card-hover flex items-start gap-4 rounded-2xl border border-border bg-card p-5"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand/15 text-brand">
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-medium">{advantage.title}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
