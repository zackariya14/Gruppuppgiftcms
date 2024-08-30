export default function Layout({ config, children }) {
    //Use the config data to render the layout
    //Create at least a header and footer component
    return (
        <>
            <header></header>
            <main>{children}</main>
            <footer></footer>
        </>
    );
}