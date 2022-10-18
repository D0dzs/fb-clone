import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="hu">
      <Head />
      <head>
        <meta name="title" content="Facebook Clone | Educational" />
        <meta
          name="description"
          content="Ez az oldal tanulás céljából lett megcsinálva! Következők lettek használva: NextJS, TailwindCSS, TypeScript."
        />
        <meta
          name="keywords"
          content="fbclone, facebookclone, hungary, hungarian, facebook, magyar, copy, educational, github"
        />
        <meta name="robots" content="index, follow" />
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
        <meta name="author" content="Dodzs" />
      </head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
