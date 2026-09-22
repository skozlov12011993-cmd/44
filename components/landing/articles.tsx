import { ARTICLES } from "@/lib/data";
import { SectionHeading } from "./section-heading";
import { ArticleCard } from "./article-card";

export function Articles() {
  return (
    <section className="bg-card/40 py-16 sm:py-24">
      <div className="container mx-auto px-4">
        <SectionHeading
          eyebrow="Блог"
          title="Полезные статьи"
          description="Разбираемся в агрегации частот и подборе оборудования для вашего дома."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {ARTICLES.map((article) => (
            <ArticleCard key={article.title} article={article} />
          ))}
        </div>
      </div>
    </section>
  );
}
