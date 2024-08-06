export default function Layout({ config, children }) {
    console.log("config", config)
    return (
        <>
            <header></header>
            <main>{children}</main>
            <footer></footer>
        </>
    );
}