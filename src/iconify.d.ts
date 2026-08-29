// Junction renders icons with Iconify's <iconify-icon> web component (Solar icon
// set: icon="solar:name-bold" / "-linear" / "-outline"), loaded via CDN script in
// index.html — not lucide-react. This declares it as a valid JSX intrinsic element.
import type * as React from "react";

export {};

declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      "iconify-icon": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & {
          icon: string;
          width?: string | number;
          height?: string | number;
          inline?: boolean;
          flip?: string;
          rotate?: string | number;
          [key: string]: any;
        },
        HTMLElement
      >;
    }
  }
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "iconify-icon": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & {
          icon: string;
          width?: string | number;
          height?: string | number;
          inline?: boolean;
          flip?: string;
          rotate?: string | number;
          [key: string]: any;
        },
        HTMLElement
      >;
    }
  }
}
