"use client";

import { buttonVariants } from "@/components/ui/button-variants";
import { cn } from "@/lib/utils";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { MessengerButtons } from "@/components/landing/messenger-buttons";

export function AskEngineerButton() {
  return (
    <Dialog>
      <DialogTrigger
        nativeButton={false}
        render={
          <a
            href="#"
            onClick={(event) => event.preventDefault()}
            className={cn(buttonVariants({ size: "lg" }))}
          >
            Задать вопрос инженеру
          </a>
        }
      />
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-lg leading-snug">
            Задать вопрос инженеру
          </DialogTitle>
          <DialogDescription>
            Выберите удобный мессенджер — инженер ответит на все вопросы.
          </DialogDescription>
        </DialogHeader>
        <MessengerButtons variant="buttons" className="justify-center" />
      </DialogContent>
    </Dialog>
  );
}
