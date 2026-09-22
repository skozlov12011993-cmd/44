import { KITS } from "@/lib/data";
import { SectionHeading } from "./section-heading";
import { KitCard } from "./kit-card";

export function Kits() {
  return (
    <section className="bg-card/40 py-16 sm:py-24">
      <div className="container mx-auto px-4">
        <SectionHeading
          eyebrow="Комплекты"
          title="Выберите свой комплект"
          description="Готовые решения LTE с монтажом и настройкой. Цена указана под ключ."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {KITS.map((kit) => (
            <KitCard key={kit.name} kit={kit} />
          ))}
        </div>
      </div>
    </section>
  );
}
