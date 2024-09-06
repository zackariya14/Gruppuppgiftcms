import Header from "@/components/nestable/Header"; 

export default function Layout({ config, children }) {

  return (
    <>
      {config && config.content.Header?.length > 0 ? (
        config.content.Header.map((blok) => (
          <Header key={blok._uid} blok={blok} />
        ))
      ) : (
        <p>No header available</p>
      )}

      <main>{children}</main>

    </>
  );
}
