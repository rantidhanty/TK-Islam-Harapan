import { useState } from "react";
import { FaBars, FaHome, FaChevronDown, FaRegFileAlt } from "react-icons/fa";
import { RiGalleryFill } from "react-icons/ri";
import { MdOutlineGroups2 } from "react-icons/md";

function Navbar() {
  const [isDropdownDaftarOpen, setIsDropdownDaftarOpen] = useState(false);
  const [isDropdownProgramOpen, setIsDropdownProgramOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-green-300 via-pink-300 to-blue-300 shadow-md fixed w-full z-10 top-0 left-0">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <div className="flex flex-wrap items-center justify-between w-full">
          {/* Logo di pojok kiri */}
          <a
            href="/"
            className="text-white text-lg sm:text-xl md:text-3xl font-bold tracking-wide whitespace-nowrap"
          >
            🌈 TK Islam Harapan Cikarang
          </a>

          {/* Tombol Daftar Sekarang */}
          <div className="relative">
            <button
              className="bg-yellow-400 hover:bg-yellow-500 text-white font-semibold text-sm md:text-lg py-2 px-4 rounded-lg transition-all flex items-center"
              onMouseEnter={() => setIsDropdownDaftarOpen(true)}
              onMouseLeave={() => setIsDropdownDaftarOpen(false)}
              onClick={() => setIsDropdownDaftarOpen(!isDropdownDaftarOpen)}
            >
              <FaRegFileAlt className="mr-2" />
              Daftar Sekarang
              <FaChevronDown className="ml-2" />
            </button>

            {/* Dropdown Daftar Sekarang */}
            {isDropdownDaftarOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg z-50">
                <a
                  href="https://wa.me/+6288973422409"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block px-4 py-2 text-gray-700 hover:bg-yellow-100"
                >
                  Ibu Nink
                </a>
                <a
                  href="https://wa.me/+6282112066639"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block px-4 py-2 text-gray-700 hover:bg-yellow-100"
                >
                  Ibu Eni
                </a>
              </div>
            )}
          </div>
        </div>

        {/* Tombol untuk hamburger menu pada tampilan mobile:text-xl*/}
        <button
          className="text-white md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <FaBars size={24} />
        </button>

        {/* Menu Dropdown untuk mobile */}
        <div
          className={`${
            isMobileMenuOpen ? "block" : "hidden"
          } md:flex md:items-center md:space-x-6 flex-col space-y-4 md:space-y-0 absolute top-16 left-0 w-full bg-gradient-to-r from-green-300 via-pink-300 to-blue-300 p-4 rounded-lg`}
        >
          {/* Navigation Links */}
          <ul className="flex flex-col items-center space-y-4 md:flex-row md:space-x-6 md:space-y-0">
            <li>
              <a
                href="/"
                className="text-white text-lg hover:text-yellow-500 flex items-center"
              >
                <FaHome className="mr-2" />
                Home
              </a>
            </li>

            {/* Dropdown Menu */}
            <li
              className="relative"
              onMouseEnter={() => setIsDropdownProgramOpen(true)} // Membuka dropdown saat mouse masuk
              onMouseLeave={() => setIsDropdownProgramOpen(false)} // Menutup dropdown saat mouse keluar
            >
              <button className="text-white flex items-center text-lg hover:text-yellow-500 focus:outline-none">
                <FaChevronDown className="mr-2" /> Program Pendidikan
              </button>
              {/* Menampilkan dropdown hanya jika isDropdownOpen true */}
              {isDropdownProgramOpen && (
                <ul className="absolute bg-white shadow-lg rounded-lg mt-2 w-56 z-20">
                  <li>
                    <a
                      href="/creative-learning"
                      className="block px-4 py-2 text-gray-700 hover:bg-yellow-100"
                    >
                      🎨 Pembelajaran Kreatif dan Inovatif
                    </a>
                  </li>
                  <li>
                    <a
                      href="/sports"
                      className="block px-4 py-2 text-gray-700 hover:bg-yellow-100"
                    >
                      ⚽ Kegiatan Olahraga
                    </a>
                  </li>
                  <li>
                    <a
                      href="/social-emotional"
                      className="block px-4 py-2 text-gray-700 hover:bg-yellow-100"
                    >
                      🤝 Pengembangan Sosial
                    </a>
                  </li>
                </ul>
              )}
            </li>

            <li>
              <a
                href="/gallery"
                className="text-white text-lg hover:text-yellow-500 flex items-center"
              >
                <RiGalleryFill className="mr-2" />
                Gallery
              </a>
            </li>

            <li>
              <a
                href="/about"
                className="text-white text-lg hover:text-yellow-500 flex items-center"
              >
                <MdOutlineGroups2 className="mr-2" />
                Tentang Kami
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
