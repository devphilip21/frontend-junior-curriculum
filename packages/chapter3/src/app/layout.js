import './global.css';

export const metadata = {
  title: "Chapter 3",
  description: "RSC를 활용해서 앱 만들기",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
