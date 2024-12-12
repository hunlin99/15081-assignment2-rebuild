import React from "react";
import Link from "next/link";
import { Merienda } from 'next/font/google'
import '../app/globals.css';

const merienda = Merienda({
    subsets: ['latin'],
    display: 'swap',
  })
  
const Header = () => {
    return (
        <header className={merienda.className}>
            <h1 className="logo">
                <Link href="/">CUISINES</Link>
            </h1>
            <nav>
                <ul>
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/blog-page">Posts</Link></li>
                    <li><Link href="/contact-page">Contact</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
