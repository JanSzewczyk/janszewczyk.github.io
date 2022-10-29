import Link from "next/link";
import { PortableText as PortableTextComponent } from "@portabletext/react";
import { PortableTextBlock } from "@portabletext/types";

interface PortableTextProps {
  value?: PortableTextBlock[];
}

function PortableText({ value = [] }: PortableTextProps) {
  return (
    <PortableTextComponent
      value={value}
      components={{
        block: {
          normal: ({ children }) => <p className="mb-2">{children}</p>
        },
        marks: {
          link: ({ children, value }) => {
            const content = Array.isArray(children) ? children[0] : children;

            if (value.href.startsWith("#")) {
              return (
                <Link href={{ href: "", hash: value.href }}>
                  <a className="font-bold text-primary-400 hover:text-primary-500">{content}</a>
                </Link>
              );
            }

            if (value.href.startsWith("/")) {
              return (
                <Link href={{ href: value.href }}>
                  <a className="font-bold text-primary-400 hover:text-primary-500">{content}</a>
                </Link>
              );
            }

            return (
              <a className="font-bold text-primary-400 hover:text-primary-500" href={value.href}>
                {children}
              </a>
            );
          }
        }
      }}
    />
  );
}

export default PortableText;
