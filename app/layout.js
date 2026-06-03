import "./globals.css";

export const metadata = {
  title: "ともすた",
  description: "ともすたの公式サイトです",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ja" >
      <body>
        <div className={'container'}>
        {children}
        </div>
        </body>
    </html>
  );
}
