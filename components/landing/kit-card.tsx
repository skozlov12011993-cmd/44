"use client";

import { Button } from "@/components/ui/button";
import { buttonVariants } from "@/components/ui/button-variants";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import type { Kit } from "@/lib/data";
import { FORM_TARGET } from "@/lib/data";
import { setSelectedKit } from "@/lib/selected-kit";
import { reachGoal } from "@/lib/metrika";
import { cn } from "@/lib/utils";

export function KitCard({ kit }: { kit: Kit }) {
  const orderKit = () => {
    setSelectedKit(kit.name);
    reachGoal("kit_order");
  };
  const cardInner = (
    <>
      <h3 className="text-lg font-semibold">{kit.name}</h3>
      <p className="mt-1 text-sm text-muted-foreground">{kit.tagline}</p>
      <p className="mt-5 text-3xl font-extrabold text-brand">{kit.price}</p>
      <ul className="mt-5 flex-1 space-y-2 text-sm text-muted-foreground">
        {kit.features.map((feature) => (
          <li key={feature} className="flex items-start gap-2">
            <span className="mt-0.5 text-brand">✓</span>
            {feature}
          </li>
        ))}
      </ul>
    </>
  );

  if (!kit.breakdown) {
    return (
      <article className="card-hover flex flex-col rounded-2xl border border-border bg-card p-6">
        {cardInner}
        <a
          href={FORM_TARGET}
          onClick={orderKit}
          className={cn(buttonVariants({ size: "lg" }), "mt-6 w-full")}
        >
          Заказать
        </a>
      </article>
    );
  }

  const breakdown = kit.breakdown;

  return (
    <Dialog>
      <article className="card-hover flex flex-col rounded-2xl border border-border bg-card p-6">
        {cardInner}
        <DialogTrigger
          nativeButton={false}
          render={
            <Button variant="link" className="mt-5 w-full underline-offset-4" />
          }
        >
          Подробнее о комплекте
        </DialogTrigger>
        <a
          href={FORM_TARGET}
          onClick={orderKit}
          className={cn(buttonVariants({ size: "lg" }), "mt-4 w-full")}
        >
          Заказать
        </a>
      </article>
      <DialogContent className="max-h-[85vh] overflow-y-auto sm:max-w-xl">
        <DialogHeader>
          <DialogTitle className="text-lg leading-snug">
            Комплектация «{kit.name}»
          </DialogTitle>
          <DialogDescription>
            Перечень оборудования, входящего в комплект.
          </DialogDescription>
        </DialogHeader>
        <div>
          <h4 className="text-base font-semibold">{breakdown.title}</h4>
          <ul className="mt-2 flex flex-col gap-1.5 pl-5 text-sm leading-relaxed text-muted-foreground">
            {breakdown.items.map((item, index) => (
              <li key={index} className="list-disc marker:text-brand">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </DialogContent>
    </Dialog>
  );
}
