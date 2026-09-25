"use client";

import { useState } from "react";
import { z } from "zod";
import { AlertCircle, MessagesSquare, Send, MessageCircle } from "lucide-react";
import { buttonVariants } from "@/components/ui/button-variants";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { MessengerButtons } from "./messenger-buttons";
import { CONTACTS, MESSENGERS } from "@/lib/data";
import { getSelectedKit } from "@/lib/selected-kit";
import { reachGoal } from "@/lib/metrika";
import { cn } from "@/lib/utils";

const phoneSchema = z
  .string()
  .min(1, "Введите номер телефона")
  .refine((value) => value.replace(/\D/g, "").length === 11, {
    message: "Введите номер полностью, например +7 (900) 123-45-67",
  });

const schema = z.object({
  name: z.string().min(1, "Введите ваше имя"),
  phone: phoneSchema,
  message: z.string().optional(),
});

type FormValues = z.infer<typeof schema>;
type FieldErrors = Partial<Record<keyof FormValues, string>>;

type FeedbackFormProps = {
  idPrefix: string;
  buttonLabel: string;
  withMessage?: boolean;
  compact?: boolean;
};

const MESSENGER_OPTIONS = [
  {
    name: "Telegram",
    accent: "#229ED9",
    icon: Send,
    href: (text: string) =>
      `https://t.me/engineers4G?text=${encodeURIComponent(text)}`,
  },
  {
    name: "WhatsApp",
    accent: "#25D366",
    icon: MessageCircle,
    href: (text: string) =>
      `https://wa.me/${CONTACTS.phoneRaw}?text=${encodeURIComponent(text)}`,
  },
  {
    name: "Макс",
    accent: "#0077FF",
    icon: MessagesSquare,
    href: (text: string) => {
      const maxHref =
        MESSENGERS.find((messenger) => messenger.name === "Макс")?.href ??
        CONTACTS.phoneHref;
      return `${maxHref}?text=${encodeURIComponent(text)}`;
    },
  },
];

function formatPhone(raw: string): string {
  let digits = raw.replace(/\D/g, "");
  if (digits.startsWith("8")) digits = "7" + digits.slice(1);
  if (!digits.startsWith("7")) digits = "7" + digits;
  digits = digits.slice(0, 11);

  const national = digits.slice(1);
  let result = "+7";
  if (national.length > 0) result += ` (${national.slice(0, 3)}`;
  if (national.length > 3) result += `) ${national.slice(3, 6)}`;
  if (national.length > 6) result += `-${national.slice(6, 8)}`;
  if (national.length > 8) result += `-${national.slice(8, 10)}`;
  return result;
}

export function FeedbackForm({
  idPrefix,
  buttonLabel,
  withMessage = false,
  compact = false,
}: FeedbackFormProps) {
  const [values, setValues] = useState<FormValues>({
    name: "",
    phone: "",
    message: "",
  });
  const [errors, setErrors] = useState<FieldErrors>({});
  const [messengerOpen, setMessengerOpen] = useState(false);
  const [confirmOpen, setConfirmOpen] = useState(false);
  const [requestText, setRequestText] = useState("");

  const setName = (name: string) => {
    setValues((prev) => ({ ...prev, name }));
    if (errors.name) setErrors((prev) => ({ ...prev, name: undefined }));
  };

  const setPhone = (phone: string) => {
    setValues((prev) => ({ ...prev, phone: formatPhone(phone) }));
    if (errors.phone) setErrors((prev) => ({ ...prev, phone: undefined }));
  };

  const setMessage = (message: string) => {
    setValues((prev) => ({ ...prev, message }));
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const result = schema.safeParse(values);
    if (!result.success) {
      const fieldErrors: FieldErrors = {};
      for (const issue of result.error.issues) {
        const key = issue.path[0] as keyof FormValues;
        fieldErrors[key] = issue.message;
      }
      setErrors(fieldErrors);
      return;
    }

    setErrors({});
    const name = values.name.trim();
    const phone = values.phone.trim();
    const comment = values.message?.trim() ?? "";
    const kit = getSelectedKit();
    const text =
      `Заявка с сайта: ` +
      (kit ? `Комплект — ${kit}, ` : "") +
      `Имя — ${name}, Телефон — ${phone}` +
      (comment ? `, Комментарий — ${comment}` : "");
    setRequestText(text);
    setValues({ name: "", phone: "", message: "" });
    setMessengerOpen(true);
    reachGoal("form_submit");
  };

  const handleMessengerClick = (
    event: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    event.preventDefault();
    window.open(href, "_blank", "noopener,noreferrer");
    setMessengerOpen(false);
    setConfirmOpen(true);
    reachGoal("messenger_click");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={cn("mt-6 space-y-4", compact && "mt-4 space-y-3")}
      noValidate
    >
      <div className="space-y-2">
        <label
          htmlFor={`${idPrefix}-name`}
          className={cn("text-sm font-medium", compact && "sr-only")}
        >
          Имя
        </label>
        <Input
          id={`${idPrefix}-name`}
          value={values.name}
          onChange={(event) => setName(event.target.value)}
          placeholder="Как к вам обращаться?"
          aria-invalid={Boolean(errors.name)}
        />
        {errors.name && (
          <p
            className="flex items-center gap-1.5 text-sm text-destructive"
            role="alert"
          >
            <AlertCircle className="h-4 w-4 shrink-0" />
            {errors.name}
          </p>
        )}
      </div>

      <div className="space-y-2">
        <label
          htmlFor={`${idPrefix}-phone`}
          className={cn("text-sm font-medium", compact && "sr-only")}
        >
          Телефон
        </label>
        <Input
          id={`${idPrefix}-phone`}
          type="tel"
          inputMode="tel"
          value={values.phone}
          onChange={(event) => setPhone(event.target.value)}
          placeholder="+7 (___) ___-__-__"
          aria-invalid={Boolean(errors.phone)}
        />
        {errors.phone && (
          <p
            className="flex items-center gap-1.5 text-sm text-destructive"
            role="alert"
          >
            <AlertCircle className="h-4 w-4 shrink-0" />
            {errors.phone}
          </p>
        )}
      </div>

      {withMessage && (
        <div className="space-y-2">
          <label
            htmlFor={`${idPrefix}-message`}
            className="text-sm font-medium"
          >
            Сообщение
          </label>
          <textarea
            id={`${idPrefix}-message`}
            rows={4}
            value={values.message}
            onChange={(event) => setMessage(event.target.value)}
            placeholder="Опишите задачу, тип объекта и адрес"
            className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          />
        </div>
      )}

      <button
        type="submit"
        className={cn(
          buttonVariants({ size: compact ? "default" : "lg" }),
          "w-full"
        )}
      >
        {buttonLabel}
      </button>
      <p className="text-center text-xs text-muted-foreground">
        Нажимая кнопку, вы соглашаетесь на обработку персональных данных
      </p>

      <div className={cn("flex items-center gap-3", compact ? "pt-1" : "pt-2")}>
        <span className="h-px flex-1 bg-border" />
        <span className="text-xs text-muted-foreground">
          Или напишите в мессенджер
        </span>
        <span className="h-px flex-1 bg-border" />
      </div>

      <MessengerButtons variant="icons" className="justify-center" />

      <Dialog
        open={messengerOpen}
        onOpenChange={(open) => setMessengerOpen(open)}
      >
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-lg leading-snug">
              Отправить заявку
            </DialogTitle>
            <DialogDescription>
              Выберите мессенджер — текст заявки будет вставлен автоматически,
              останется только нажать «Отправить».
            </DialogDescription>
          </DialogHeader>
          <div className="flex flex-col gap-3">
            {MESSENGER_OPTIONS.map((messenger) => {
              const Icon = messenger.icon;
              const href = messenger.href(requestText);
              return (
                <a
                  key={messenger.name}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  onClick={(event) => handleMessengerClick(event, href)}
                  className="inline-flex items-center justify-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition-transform hover:-translate-y-0.5"
                  style={{
                    color: messenger.accent,
                    border: `1px solid ${messenger.accent}55`,
                    backgroundColor: `${messenger.accent}14`,
                  }}
                >
                  <Icon className="h-4 w-4" />
                  {messenger.name}
                </a>
              );
            })}
          </div>
        </DialogContent>
      </Dialog>

      <Dialog open={confirmOpen} onOpenChange={(open) => setConfirmOpen(open)}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="text-lg leading-snug">
              Заявка отправлена
            </DialogTitle>
            <DialogDescription>
              Инженер с вами свяжется в ближайшее время.
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </form>
  );
}
