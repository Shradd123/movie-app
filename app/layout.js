import { MovieProvider } from "@/context/MovieContext";
import "./globals.css";

export const metadata = {
  title: "Movie App",
  description: "Search and save your favorite movies.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <MovieProvider>{children}</MovieProvider>
      </body>
    </html>
  );
}
