// #region ============================== Imports

// components

// fonts
import { font } from "@/utils/importFonts";

// providers

// styles
import "@/styles/tokens/spacings.css";
import "@/styles/tokens/colors.css";
import "@/styles/tokens/fonts.css";
import "@/styles/reset.css";
import "@/styles/global.css";

// #endregion ===========================

export const metadata = {
    title: "Яке воно? Портфоліо продуктового дизайнера.",
    description: "Результати опитування серед керівників дизайн відділів продуктових компаній.",
};

export default function RootLayout({ children }) {
    return (
    <html lang="en" className={font.variable}>
        <body>{children}</body>
    </html>
  );
}
