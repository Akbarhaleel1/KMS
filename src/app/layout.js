import "./globals.css";

export const metadata = {
  title: "KMS 9990 - Wholesale & Distribution",
  description:
    "KMS 9990 is a leading wholesale and distribution company delivering high-quality products with trust and excellence.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>KMS 9990 - Wholesale & Distribution</title>
        <meta
          name="description"
          content="KMS 9990 is a trusted wholesale and distribution company providing high-quality products and exceptional service across the UAE and beyond."
        />
        <meta
          name="keywords"
          content="KMS 9990, wholesale, distribution, UAE wholesale, wholesale products, distribution company, trusted wholesale supplier"
        />
        <meta name="author" content="KMS 9990 Team" />

        {/* Open Graph / Facebook */}
        <meta
          property="og:title"
          content="KMS 9990 - Wholesale & Distribution"
        />
        <meta
          property="og:description"
          content="KMS 9990 is a trusted wholesale and distribution company providing high-quality products and exceptional service."
        />
        <meta
          property="og:image"
          content="https://i.ibb.co/KcDsZJYn/KMS-logo-removebg-preview.png"
        />
        <meta property="og:url" content="https://www.kms9990.ae/" />
        <meta property="og:type" content="website" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="KMS 9990 - Wholesale & Distribution"
        />
        <meta
          name="twitter:description"
          content="KMS 9990 is a trusted wholesale and distribution company providing high-quality products and exceptional service."
        />
        <meta
          name="twitter:image"
          content="https://i.ibb.co/KcDsZJYn/KMS-logo-removebg-preview.png"
        />

        {/* Favicon */}
        <link
          rel="icon"
          href="https://i.ibb.co/KcDsZJYn/KMS-logo-removebg-preview.png"
          type="image/png"
        />

        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
