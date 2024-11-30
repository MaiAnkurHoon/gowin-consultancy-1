const MainNavbarLinks = () => {
    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Services', path: '/services' },
        { name: 'Contact', path: '/contact' },
    ];

    return (
        <nav>
            <ul  style={{ display: 'flex', listStyleType: 'none', padding: 0 }}>
                {navLinks.map((link) => (
                    <li className="text-xl " key={link.name} style={{ margin: '0 10px' }}>
                        <a className="text-white" href={link.path} style={{ textDecoration: 'none', color: 'black' }}>
                            {link.name}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );

}
 
export default MainNavbarLinks;