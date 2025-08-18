import {  footer } from "../data/config";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <p className="footer-text">© {year} {footer.text}</p>
    </footer>
  );
}
