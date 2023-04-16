import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en" style={{ backgroundColor: "#121212" }}>
      <Head />
      <body className="md:h-full">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
