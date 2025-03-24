"use client";

import Image from "next/image";
import Link from "next/link";
import HeaderButton from "../header_button"
import "./index.css";

export default function Header() {  

  return(
    <header>
      <nav className="header">
        <HeaderButton
        element="123"
        label="Encurtador"
        />
        <HeaderButton
        element="123"
        label="Desencurtador"
        />
        <Link href="/" className="logo">
          <Image src="/logo.png" 
                 alt="logo" 
                 width={200}
                 height={50}
          />
        </Link>
        <HeaderButton
        element="123"
        label="Sobre"
        />
        <HeaderButton
        element="123"
        label="Contatos"
        />
      </nav>
    </header>
  );
} 