function Navbar() {
    return (
        <nav className="fixed top-5 left-1/2 transform -translate-x-1/2 flex justify-center gap-6 p-4 px-6 bg-white shadow-md text-lg rounded-full z-50">
            <a href="/">Home</a>
            <a href="/about">About</a>
            <a href="/experience">Experience</a>
            <a href="/project">Projects</a>
            <a href="/contact">Contact</a>
        </nav>
    );
}

export default Navbar;