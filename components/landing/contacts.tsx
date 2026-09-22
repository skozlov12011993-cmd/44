import { CONTACTS } from "@/lib/data";
import { CheckCircle2, Mail, MapPin, PhoneCall } from "lucide-react";
import { SectionHeading } from "./section-heading";
import { FeedbackForm } from "./feedback-form";
import { MessengerButtons } from "./messenger-buttons";

export function Contacts() {
  return (
    <section className="bg-card/40 py-16 sm:py-24">
      <div className="container mx-auto px-4">
        <SectionHeading
          eyebrow="Свяжитесь с нами"
          title="Контакты"
          description="Оставьте заявку или свяжитесь с нами любым удобным способом."
        />
        <div className="mt-12 grid gap-8 lg:grid-cols-2 lg:items-start">
          <ul className="space-y-4">
            <li className="card-hover flex items-center gap-4 rounded-2xl border border-border bg-card p-5">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand/15 text-brand">
                <PhoneCall className="h-5 w-5" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Телефон</p>
                <a
                  href={CONTACTS.phoneHref}
                  className="text-lg font-semibold hover:text-brand"
                >
                  {CONTACTS.phone}
                </a>
              </div>
            </li>
            <li className="card-hover flex items-center gap-4 rounded-2xl border border-border bg-card p-5">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand/15 text-brand">
                <Mail className="h-5 w-5" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Email</p>
                <a
                  href={`mailto:${CONTACTS.email}`}
                  className="font-medium hover:text-brand"
                >
                  {CONTACTS.email}
                </a>
              </div>
            </li>
            <li className="card-hover flex items-center gap-4 rounded-2xl border border-border bg-card p-5">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand/15 text-brand">
                <MapPin className="h-5 w-5" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Адрес</p>
                <a
                  href={CONTACTS.mapsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="font-medium hover:text-brand"
                >
                  {CONTACTS.address}
                </a>
              </div>
            </li>
          </ul>

          <div className="mt-6 rounded-2xl border border-border bg-card p-5">
            <p className="text-xs text-muted-foreground">
              Напишите нам в мессенджере
            </p>
            <MessengerButtons className="mt-3" />
          </div>

          <div
            id="zayavka"
            className="rounded-2xl border border-border bg-card p-6 sm:p-8"
          >
            <h3 className="text-xl font-semibold">Оставить заявку</h3>
            <p className="mt-1 text-sm text-muted-foreground">
              Расскажите о вашей задаче — мы подберём решение.
            </p>
            <FeedbackForm
              idPrefix="contact"
              buttonLabel="Отправить заявку"
              withMessage
            />
          </div>
        </div>

        <div className="mt-8 overflow-hidden rounded-2xl border border-border bg-card">
          <div className="flex flex-col gap-2 border-b border-border bg-card p-5 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h3 className="text-lg font-semibold">
                Работаем по всей Московской области
              </h3>
              <p className="mt-1 text-sm text-muted-foreground">
                Приезжаем на дом, дачу или в офис в любую точку региона.
              </p>
            </div>
            <span className="inline-flex w-fit items-center gap-2 rounded-full bg-brand/10 px-3 py-1.5 text-sm font-medium text-brand">
              <CheckCircle2 className="h-4 w-4" />
              Покрытие — вся Московская область
            </span>
          </div>
          <iframe
            title="Карта Московской области"
            src="https://yandex.ru/map-widget/v1/?ll=37.97%2C55.65&z=7"
            className="h-[320px] w-full border-0 sm:h-[400px]"
            loading="lazy"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
}
