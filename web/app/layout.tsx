import "./global.css";
import { Funnel_Sans } from "next/font/google";

const funnelSans = Funnel_Sans({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
});

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body className={funnelSans.className}>{children}</body>
        </html>
    )
}