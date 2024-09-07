import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Layout from "../components/Layout/Layout";
import "../styles/global.css";

const Telemetry = () => (
  <div>
    <noscript>
      <img src="https://shynet-mpb4.onrender.com/ingress/9b83ab99-be9b-4290-adf0-ed82145dad7c/pixel.gif" />
    </noscript>
    <script
      defer
      src="https://shynet-mpb4.onrender.com/ingress/9b83ab99-be9b-4290-adf0-ed82145dad7c/script.js"
    ></script>
  </div>
);

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const prod = process.env.ENVIRONMENT === "production";
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
        {prod && <Telemetry />}
        <Header />
        <Layout>{children}</Layout>
        <Footer />
      </body>
    </html>
  );
}
