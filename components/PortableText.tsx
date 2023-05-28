import Link from "next/link";

import { PortableText as PortableTextComponent } from "@portabletext/react";
import { PortableTextBlock } from "@portabletext/types";

interface PortableTextProps {
  value?: PortableTextBlock[];
}

export default function PortableText({ value = [] }: PortableTextProps) {
  return (
    <PortableTextComponent
      value={value}
      components={{
        block: {
          normal: ({ children }) => <p className="mb-2">{children}</p>
        },
        marks: {
          code: ({ children }) => <code className="font-code">{children}</code>,
          link: ({ children, value }) => {
            const content = Array.isArray(children) ? children[0] : children;

            if (value.href.startsWith("#")) {
              return (
                <Link
                  className="font-bold text-primary-400 hover:text-primary-500"
                  href={{ href: "", hash: value.href }}
                >
                  {content}
                </Link>
              );
            }

            if (value.href.startsWith("/")) {
              return (
                <Link
                  className="font-bold text-primary-400 hover:text-primary-500"
                  href={{ href: value.href }}
                >
                  {content}
                </Link>
              );
            }

            return (
              <a
                className="font-bold text-primary-400 hover:text-primary-500"
                href={value.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                {children}
              </a>
            );
          }
        },
        list: {
          bullet: ({ children }) => <ul className="list-outside list-disc pl-6">{children}</ul>
        }
      }}
    />
  );
}
