import React from "react";
import { FaFacebook, FaInstagramSquare, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer>
      <hr />
      <ul className="contact-list">
        <li>
          <a href="https://www.instagram.com/abc.parcels/">
            <FaInstagramSquare />
          </a>
        </li>
        <li>
          <a href="https://www.facebook.com/abcparcels/">
            <FaFacebook />
          </a>
        </li>
        <li>
          <a href="mailto:abcparcels@gmail.com">
            <FaEnvelope />
          </a>
        </li>
      </ul>{" "}
    </footer>
  );
}
