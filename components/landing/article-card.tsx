"use client";

import type { Article, ArticleBlock } from "@/lib/data";
import { cn } from "@/lib/utils";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

function renderBlock(block: ArticleBlock) {
  switch (block.type) {
    case "paragraph":
      return (
        <p className="text-sm leading-relaxed text-muted-foreground">
          {block.text}
        </p>
      );
    case "subheading":
      return (
        <h4 className="pt-2 text-base font-semibold leading-snug text-foreground">
          {block.text}
        </h4>
      );
    case "bullets":
      return (
        <ul className="flex flex-col gap-2 pl-5 text-sm leading-relaxed text-muted-foreground">
          {block.items.map((item) => (
            <li key={item} className="list-disc marker:text-brand">
              {item}
            </li>
          ))}
        </ul>
      );
    case "numbered":
      return (
        <ol className="flex flex-col gap-2 pl-5 text-sm leading-relaxed text-muted-foreground">
          {block.items.map((item) => (
            <li
              key={item}
              className="list-decimal marker:font-semibold marker:text-brand"
            >
              {item}
            </li>
          ))}
        </ol>
      );
    case "table":
      return (
        <div className="overflow-x-auto rounded-xl border border-border">
          <table className="w-full min-w-full border-collapse text-left text-sm">
            <thead>
              <tr className="border-b border-border bg-muted/60">
                {block.headers.map((header, i) => (
                  <th
                    key={i}
                    className="px-3 py-2.5 font-semibold text-foreground"
                  >
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {block.rows.map((row, rowIndex) => (
                <tr
                  key={rowIndex}
                  className="border-b border-border last:border-b-0"
                >
                  {row.map((cell, cellIndex) => (
                    <td
                      key={cellIndex}
                      className="align-top px-3 py-2.5 leading-relaxed text-muted-foreground"
                    >
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
  }
}

export function ArticleCard({ article }: { article: Article }) {
  const cardContent = (
    <>
      <span className="mb-4 inline-flex w-fit rounded-full border border-brand/40 bg-brand/10 px-3 py-1 text-xs font-medium text-brand">
        Полезно знать
      </span>
      <h3 itemProp="headline" className="text-lg font-semibold leading-snug">
        {article.title}
      </h3>
      {article.excerpt && (
        <p
          itemProp="description"
          className="mt-3 text-sm text-muted-foreground"
        >
          {article.excerpt}
        </p>
      )}
    </>
  );

  if (!article.content) {
    return (
      <article
        itemScope
        itemType="https://schema.org/Article"
        className="card-hover flex flex-col rounded-2xl border border-border bg-card p-6"
      >
        {cardContent}
      </article>
    );
  }

  return (
    <Dialog>
      <DialogTrigger
        nativeButton={false}
        render={
          <article
            itemScope
            itemType="https://schema.org/Article"
            className={cn(
              "card-hover flex cursor-pointer flex-col rounded-2xl border border-border bg-card p-6 outline-none transition-colors hover:border-brand/50 focus-visible:border-brand"
            )}
          />
        }
      >
        {cardContent}
      </DialogTrigger>
      <DialogContent className="max-h-[85vh] overflow-y-auto sm:max-w-xl">
        <DialogHeader>
          <DialogTitle className="text-lg leading-snug">
            {article.title}
          </DialogTitle>
          {article.excerpt && (
            <DialogDescription>{article.excerpt}</DialogDescription>
          )}
        </DialogHeader>
        <div className="flex flex-col gap-3">
          {article.content.map((block, index) => (
            <div key={index}>{renderBlock(block)}</div>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
}
