import { Link } from "@inertiajs/react";
import "css_root/styles.css";


export default function Header() {
  return (
    <header>
      <nav>
        <h1>MyApp</h1>
        <ul>
          <li><Link href="/">Home</Link></li>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/contact">Contact</Link></li>
          <li><Link href="/login">Login</Link></li>
        </ul>
      </nav>
    </header>
  );
}
