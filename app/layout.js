import "./globals.css";
import {
  Inter,
  Lora,
  Poppins,
  Roboto,
  Montserrat,
  Merriweather,
} from "next/font/google";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

const montserrat = Montserrat({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
});

const merriweather = Merriweather({
  weight: ["300", "700"],
  subsets: ["latin"],
});

const poppins = Poppins({
  weight: ["300", "400", "500", "600"],
  subsets: ["latin"],
});
const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Prof. dr hab. Alina Maciejewska",
  description:
    "Alina Maciejewska, dorobek naukowy, strona domowa, publikacje, artykuły, książki, konferencje, wykłady, badania, nauka, naukowiec, profesor, profesor Politechnika Warszawska, Geodezja i Ochrona Gruntów",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
