import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Layout from "../components/Layout/Layout";
import "../styles/global.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>Carleton Computer Science Society | Daily Code Challenge</title>
        <meta
          name="description"
          content="The Carleton Computer Science Society's Daily Code Challenge"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link href="https://ccss.carleton.ca/favicon.ico" rel="icon" />
      </head>
      <body>
        <Header />
        <Layout>{children}</Layout>
        <Footer />
      </body>
    </html>
  );
}
