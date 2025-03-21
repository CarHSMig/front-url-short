"use client";

import Image from "next/image";
import Link from "next/link";
import HeaderButton from "../header_button"
import "./index.css";

export default function Header() {  

  return(
    <header>
      <HeaderButton
        element="123"
        label="Encurtador"
      />
      <HeaderButton
        element="123"
        label="Desencurtador"
      />
      <nav className="header">
        <Link href="/" className="logo">
          <Image src="/logo.jpg" 
                alt="logo" 
                width={200}
                height={50}
          />
        </Link>
      </nav>
      <HeaderButton
        element="123"
        label="Sobre"
      />
      <HeaderButton
        element="123"
        label="Contatos"
      />
    </header>
  );
} 