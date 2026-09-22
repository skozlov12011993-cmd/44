import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";
import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";
import { RadioTower, PhoneCall } from "lucide-react";
import { buttonVariants } from "@/components/ui/button-variants";
import { CONTACTS } from "@/lib/data";
import { siteSchema } from "@/lib/schema";
import { BridgeProvider } from "@/components/bridge-provider";
import { Toaster } from "@/components/ui/sonner";
import { MessengerButtons } from "@/components/landing/messenger-buttons";
import { PrivacyPolicyDialog } from "@/components/landing/privacy-policy-dialog";

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  display: "swap",
  variable: "--font-sans",
});

const appName = "4G Инженеры";

export const metadata: Metadata = {
  title: "4G интернет для дома и дачи | 4G Инженеры",
  description:
    "Подключить дачу или дом к быстрому 4G интернету. Агрегация частот, сборка и монтаж под ключ от LTE инженеров. Цены от 12 000 ₽.",
  keywords: [
    "4G интернет для дома",
    "подключить дачу",
    "агрегация частот",
    "LTE инженер",
  ],
  applicationName: appName,
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className={cn("font-sans", inter.variable)}>
      <body className="antialiased min-h-screen bg-background text-foreground flex flex-col">
        <BridgeProvider />
        <header className="sticky top-0 z-50 w-full border-b bg-background/85 backdrop-blur-md">
          <div className="container mx-auto flex h-16 items-center justify-between gap-3 px-4">
            <Link
              href="/"
              className="flex items-center gap-2 text-lg font-bold tracking-tight"
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand text-brand-foreground">
                <RadioTower className="h-5 w-5" />
              </div>
              <span className="hidden sm:inline">{appName}</span>
              <span className="sm:hidden">4G</span>
            </Link>
            <div className="flex items-center gap-3 sm:gap-4">
              <MessengerButtons variant="icons" className="hidden lg:flex" />
              <a
                href={CONTACTS.phoneHref}
                className="flex items-center gap-2 text-sm font-semibold hover:text-brand"
              >
                <PhoneCall className="h-4 w-4 text-brand" />
                <span className="hidden md:inline">{CONTACTS.phone}</span>
              </a>
              <a
                href={CONTACTS.phoneHref}
                className={buttonVariants({ size: "sm" })}
              >
                Заказать звонок
              </a>
            </div>
          </div>
        </header>
        <main className="flex-1">{children}</main>
        <footer className="border-t">
          <div className="container mx-auto flex flex-col items-center justify-between gap-3 px-4 py-6 text-xs text-muted-foreground sm:flex-row">
            <p>
              © {new Date().getFullYear()} {appName}
            </p>
            <div className="flex flex-col items-center gap-2 sm:flex-row sm:gap-4">
              <PrivacyPolicyDialog />
              <a
                href={CONTACTS.phoneHref}
                className="font-medium text-foreground hover:text-brand"
              >
                {CONTACTS.phone}
              </a>
            </div>
          </div>
          <div className="container mx-auto px-4 pb-6">
            <p className="mx-auto max-w-3xl text-center text-xs leading-relaxed text-muted-foreground">
              Информация на сайте не является публичной офертой в рамках статьи
              437 Гражданского кодекса РФ.
            </p>
          </div>
        </footer>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(siteSchema()),
          }}
        />
        <script
          id="yandex-metrika"
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `
(function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};m[i].l=1*new Date();for(var j=0;j<document.scripts.length;j++){if(document.scripts[j].src===r){return}}k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})(window, document,'script','https://mc.yandex.ru/metrika/tag.js?id=112380549', 'ym');ym(112380549, 'init', {ssr:true, webvisor:true, clickmap:true, ecommerce:"dataLayer", referrer: document.referrer, url: location.href, accurateTrackBounce:true, trackLinks:true});`,
          }}
        />
        <noscript>
          <div>
            <img
              src="https://mc.yandex.ru/watch/112380549"
              style={{ position: "absolute", left: "-9999px" }}
              alt=""
            />
          </div>
        </noscript>
        <Toaster richColors position="top-right" />
      </body>
    </html>
  );
}
