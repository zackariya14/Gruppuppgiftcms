export default function Layout({ config, children }) {
    //Use the config data to render the layout
    return (
        <>
            <header></header>
            <main>{children}</main>
            <footer></footer>
        </>
    );
}