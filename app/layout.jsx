import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "ElecScoot",
  description: "Marketplace de scooters en next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {/*BARRA NAVEGACION*/}
        <nav
          className="navbar fixed-top navbar-expand-lg bg-body-secondary"
          data-bs-theme=""
        >
          <div className="container-fluid">
          <Link className="navbar-brand d-flex  align-items-center" rel="stylesheet" href="/">
              <img
                src="./img/logo.png"
                alt="Logo"
                height={35}
                className="d-inline-block align-text-top"
              />
              <span className="fs-2 ps-3 fw-bold">ElecScoot</span>
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link" rel="stylesheet" href="/">Home</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" rel="stylesheet" href="/scooter">Scooters</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" rel="stylesheet" href="/importacion">Importacion</Link>
                </li>
              </ul>
            </div>
            <div className="form-check form-switch">
              <input
                className="form-check-input"
                type="checkbox"
                role="switch"
                id="flexSwitchCheckDefault"
              />
              <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
                Tema oscuro
              </label>
            </div>
          </div>
        </nav>
        {children}
      </body>
    </html>
  );
}
