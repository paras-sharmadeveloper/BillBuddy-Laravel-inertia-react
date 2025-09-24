
import { Link } from "@inertiajs/react";
import "css_root/styles.css";

export default function Footer() {
  return (
    <footer>
      <p>© {new Date().getFullYear()} MyApp. All rights reserved.</p>
    </footer>
  );
}
