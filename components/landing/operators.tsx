import { OPERATORS } from "@/lib/data";
import { SectionHeading } from "./section-heading";

export function Operators() {
  return (
    <section className="bg-card/40 py-16 sm:py-24">
      <div className="container mx-auto px-4">
        <SectionHeading
          eyebrow="Тарифы"
          title="Операторы связи и безлимитный интернет"
          description="Подключаем стабильный интернет у любого оператора. Цена указана за безлимитный тариф."
        />
        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {OPERATORS.map((operator) => (
            <li
              key={operator.name}
              className="card-hover rounded-2xl border border-border bg-card p-6"
            >
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-2">
                <div>
                  <h3 className="text-lg font-semibold">{operator.name}</h3>
                  <p className="text-sm text-muted-foreground">
                    Безлимитный интернет
                  </p>
                </div>
                <p className="whitespace-nowrap text-xl font-extrabold text-brand">
                  {operator.price}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
