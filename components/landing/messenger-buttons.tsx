import { MESSENGERS } from "@/lib/data";
import { cn } from "@/lib/utils";

type MessengerButtonsProps = {
  variant?: "buttons" | "icons";
  className?: string;
};

export function MessengerButtons({
  variant = "buttons",
  className,
}: MessengerButtonsProps) {
  return (
    <div
      className={cn(
        "flex flex-wrap gap-3",
        variant === "icons" ? "items-center" : "items-center",
        className
      )}
    >
      {MESSENGERS.map((messenger) => {
        const Icon = messenger.icon;
        return (
          <a
            key={messenger.name}
            href={messenger.href}
            target="_blank"
            rel="noreferrer"
            title={`Написать в ${messenger.name}`}
            aria-label={`Написать в ${messenger.name}`}
            className={cn(
              "inline-flex items-center justify-center font-semibold transition-transform hover:-translate-y-0.5",
              variant === "icons"
                ? "h-10 w-10 rounded-full"
                : "gap-2 rounded-full px-4 py-2 text-sm"
            )}
            style={{
              color: messenger.accent,
              border: `1px solid ${messenger.accent}55`,
              backgroundColor: `${messenger.accent}14`,
            }}
          >
            <Icon className="h-4 w-4" />
            {variant === "buttons" ? messenger.name : null}
          </a>
        );
      })}
    </div>
  );
}
