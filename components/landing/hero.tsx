import { AskEngineerButton } from "@/components/landing/ask-engineer-button";

export function Hero() {
  return (
    <section className="gradient-hero-light relative overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0 bg-cover bg-center opacity-40"
        style={{ backgroundImage: "url('/assets/hero-photo.jpg')" }}
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-r from-background/85 via-background/60 to-background/25"
      />
      <div className="container relative z-10 mx-auto max-w-3xl px-4 py-16 sm:py-24 lg:py-28">
        <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
          <span className="inline-flex items-center gap-2 rounded-full border border-brand/40 bg-brand/10 px-3 py-1 text-xs font-medium text-brand">
            <span className="h-2 w-2 rounded-full bg-brand pulse-dot" />
            Подключение 4G интернета под ключ
          </span>
          <h1 className="text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            Стабильный <span className="text-gradient-brand">4G интернет</span>{" "}
            для дома, дачи и бизнеса
          </h1>
          <p className="max-w-xl text-lg text-muted-foreground">
            Подбор, сборка, пайка, настройка и монтаж LTE-систем под ключ.
            Работаем по договору с гарантией и честными ценами.
          </p>
          <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground">
            <li className="flex items-center gap-2">
              <span className="text-brand">✓</span> Выезд и замер сигнала
            </li>
            <li className="flex items-center gap-2">
              <span className="text-brand">✓</span> Гарантия на работу
            </li>
            <li className="flex items-center gap-2">
              <span className="text-brand">✓</span> Техподдержка 24/7
            </li>
          </ul>
          <div className="pt-2">
            <AskEngineerButton />
          </div>
        </div>
      </div>
    </section>
  );
}
