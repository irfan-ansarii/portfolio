import { Badge } from "@/components/ui/badge";
import {
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import Markdown from "react-markdown";

interface Props {
  title: string;
  href?: string;
  description: string;
  tags: readonly string[];
  link?: string;
  image?: string;
  video?: string;
  links?: readonly {
    icon: React.ReactNode;
    type: string;
    href: string;
  }[];
  className?: string;
}

export function ProjectCard({
  title,
  href,
  description,
  tags,
  link,
  image,
  links,
  className,
}: Props) {
  return (
    <div
      className={
        "flex flex-col overflow-hidden transition-all duration-300 ease-out h-full"
      }
    >
      <Link
        href={href || "#"}
        target="_blank"
        rel="nofollow"
        className={cn("block p-4 sm:p-8 sm:pb-4", className)}
      >
        {image && (
          <Image
            src={image}
            alt={title}
            width={200}
            height={140}
            className="h-40 w-full overflow-hidden object-cover object-top"
          />
        )}
      </Link>
      <CardHeader className="px-4 sm:px-8">
        <div className="space-y-1">
          <CardTitle className="mt-1 text-base">{title}</CardTitle>
          {/* <time className="font-sans text-xs">{dates}</time> */}
          <div className="hidden font-sans text-xs underline print:visible">
            {link?.replace("https://", "").replace("www.", "").replace("/", "")}
          </div>
          <Markdown className="prose text-pretty font-sans text-xs text-muted-foreground dark:prose-invert max-w-[300px]">
            {description}
          </Markdown>
        </div>
      </CardHeader>
      <CardContent className="mt-auto flex flex-col px-4 sm:px-8">
        {tags && tags.length > 0 && (
          <div className="mt-2 flex flex-wrap gap-1 max-w-[300px]">
            {tags?.map((tag) => (
              <Badge
                className="px-1 py-0 text-[10px]"
                variant="secondary"
                key={tag}
              >
                {tag}
              </Badge>
            ))}
          </div>
        )}
      </CardContent>

      {links && links.length > 0 && (
        <CardFooter className="pt-4 flex flex-row flex-wrap items-start">
          {links?.map((link, idx) => (
            <Link
              href={link?.href}
              key={idx}
              target="_blank"
              rel="nofollow"
              className={`inline-flex gap-1 items-center bg-secondary/80 justify-center whitespace-nowrap font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-11 px-8 flex-1 text-xs rounded-none shadow-none hover:bg-secondary ${
                idx === 1 ? "border-l" : ""
              }`}
            >
              {link.icon}
              {link.type}
            </Link>
          ))}
        </CardFooter>
      )}
    </div>
  );
}
