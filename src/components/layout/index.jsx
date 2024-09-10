import Header from "@/components/nestable/Header";
import Footer from "@/components/nestable/Footer";

export default function Layout({ config, children }) {
  console.log("Config in Layout:", config); // Logga hela config för felsökning

  const headerData = config?.content?.Header ? config.content.Header[0] : null; // Hämta Header-objektet
  const footerData = config?.content?.Footer ? config.content.Footer[0] : null; // Hämta Footer-objektet

  return (
    <>
      {/* Rendera Header om den finns */}
      {headerData ? (
        <Header blok={headerData} />
      ) : (
        <p>No header available</p>
      )}

      <main>{children}</main>

      {/* Rendera Footer om den finns */}
      {footerData ? (
        <Footer blok={footerData} />
      ) : (
        <p>No footer available</p>
      )}
    </>
  );
}
