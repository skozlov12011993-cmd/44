import { STEPS } from "@/lib/data";
import { SectionHeading } from "./section-heading";

export function Steps() {
  return (
    <section className="py-16 sm:py-24">
      <div className="container mx-auto px-4">
        <SectionHeading
          eyebrow="Как мы работаем"
          title="Этапы работы"
          description="Понятный процесс подключения из шести шагов — от первой заявки до договора и гарантии."
        />
        <ol className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {STEPS.map((step) => {
            const Icon = step.icon;
            return (
              <li
                key={step.number}
                className="card-hover group relative rounded-2xl border border-border bg-card p-6"
              >
                <span className="absolute right-5 top-5 text-5xl font-bold text-border">
                  {String(step.number).padStart(2, "0")}
                </span>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-brand/15 text-brand transition-colors group-hover:bg-brand group-hover:text-brand-foreground">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold">{step.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {step.description}
                </p>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
