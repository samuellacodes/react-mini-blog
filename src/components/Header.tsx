import "../styles/header.css";

function Header() {
    return (
        <header className="header">
            <h1 className="logo">Dev Insights</h1>

            <nav>
                <a href="#new-post">New Post</a>
            </nav>
        </header>
    );
}

export default Header;