import "./globals.css";

export const metadata = {
  title: "페이져 (Payger) - 유통·물류 전문 결제 솔루션",
  description:
    "유통·물류 산업에 최적화된 안전하고 편리한 차세대 결제 플랫폼. 모바일 결제, 통합 카드 결제, AI 스마트 솔루션을 제공합니다.",
  keywords: "결제 솔루션, 유통, 물류, PG, 간편결제, 모바일결제, 페이져, Payger",
  openGraph: {
    title: "페이져 (Payger) - 유통·물류 전문 결제 솔루션",
    description: "유통·물류 산업에 최적화된 안전하고 편리한 차세대 결제 플랫폼",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
