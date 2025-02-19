'use client'
import Link from 'next/link';
import { useState } from 'react';
// import buy from '../app/BuyandDrive/page'

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header>
      <div className='flex justify-between'>
        <h1 className='text-3xl font-serif '>
          <Link href={'./'}>Imperial Autos</Link>
        </h1>

        <button onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? "Close" : "Menu"}
        </button>
      </div>
<hr />
      {
        isMobileMenuOpen && 
          (
          <menu className='mMenu  flex-col w-full outline items-center
            text-justify gap-2 text-xl 
            bg-red-950'>
              <Link href={''}>Buy 'n Drive</Link>
              <Link href="./RepairsandMaintenance">Repairs & Maintenance</Link>
              <a href="#">Rental & Logistics Services</a>
              <Link href="#">Contact</Link>
          </menu>
        )}
    </header>
  );
};

export default Header;