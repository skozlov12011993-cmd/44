"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const SECTIONS: { heading: string; items: string[] }[] = [
  {
    heading: "1. Общие положения",
    items: [
      "Настоящая Политика обработки персональных данных (далее — Политика) определяет порядок обработки персональных данных посетителей и пользователей сайта «4G Инженеры» (далее — Сайт).",
      "Используя Сайт, заполняя формы обратной связи, вы даёте согласие на обработку ваших персональных данных в соответствии с настоящей Политикой.",
      "Обработка персональных данных осуществляется в соответствии с Федеральным законом от 27.07.2006 № 152-ФЗ «О персональных данных».",
    ],
  },
  {
    heading: "2. Какие данные мы собираем",
    items: [
      "Имя (для персонального обращения и корректного взаимодействия).",
      "Номер телефона (для связи с вами по вашей заявке).",
      "Комментарий к заявке (для уточнения деталей вашего запроса).",
    ],
  },
  {
    heading: "3. Цели обработки данных",
    items: [
      "Связь с вами по оставленной заявке: обработка запроса, консультация, подбор решения и уточнение деталей.",
      "Информирование о статусе и ходе выполнения заявки.",
      "Улучшение качества обслуживания клиентов.",
    ],
  },
  {
    heading: "4. Хранение и защита данных",
    items: [
      "Ваши персональные данные хранятся только в объёме, необходимом для достижения целей обработки, и не дольше, чем этого требуют цели обработки или законодательство РФ.",
      "Мы принимаем необходимые организационные и технические меры для защиты ваших данных от неправомерного доступа, изменения, раскрытия или уничтожения.",
      "Данные не передаются третьим лицам, за исключением случаев, предусмотренных законодательством РФ.",
    ],
  },
  {
    heading: "5. Права пользователя",
    items: [
      "Вы вправе запросить информацию об обработке ваших персональных данных, а также их уточнение, блокирование или удаление.",
      "Вы можете отозвать согласие на обработку персональных данных в любой момент, направив нам соответствующее обращение.",
    ],
  },
  {
    heading: "6. Контакты компании",
    items: [
      "По вопросам, связанным с обработкой персональных данных, вы можете обратиться по телефону +7 (993) 893-92-56 или по электронной почте engineers4G@yandex.ru.",
    ],
  },
];

export function PrivacyPolicyDialog() {
  return (
    <Dialog>
      <DialogTrigger
        render={
          <button
            type="button"
            className="font-medium text-foreground underline decoration-muted-foreground/40 underline-offset-4 transition-colors hover:text-brand hover:decoration-brand/50"
          >
            Политика конфиденциальности
          </button>
        }
      />
      <DialogContent className="max-h-[85vh] overflow-y-auto sm:max-w-xl">
        <DialogHeader>
          <DialogTitle className="text-lg leading-snug">
            Политика конфиденциальности
          </DialogTitle>
          <DialogDescription>
            Обработка персональных данных на сайте «4G Инженеры»
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-col gap-5">
          {SECTIONS.map((section) => (
            <section key={section.heading} className="flex flex-col gap-2">
              <h4 className="text-sm font-semibold leading-snug text-foreground">
                {section.heading}
              </h4>
              <ul className="flex flex-col gap-2 pl-4 text-sm leading-relaxed text-muted-foreground">
                {section.items.map((item, index) => (
                  <li key={index} className="list-disc marker:text-brand">
                    {item}
                  </li>
                ))}
              </ul>
            </section>
          ))}
          <p className="text-xs text-muted-foreground">
            Дата последнего обновления: {new Date().toLocaleDateString("ru-RU")}
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
}
