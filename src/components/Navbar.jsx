import { useState } from 'react';
import { logo, close, menu } from '../assets';
import { navLinks } from '../constant/index';
const Nav = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="flex justify-between w-full py-6 ">
      <img src={logo} alt="" className="h-[32px]w-[124px]" />

      <ul className="flex gap-10 sm:flex hidden items-center justify-end flex-1">
        {navLinks.map((nav) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[16px]`}
          >
            <a href={nav.id} className="text-white">
              {nav.title}
            </a>
          </li>
        ))}
      </ul>

      <div className="sm:hidden flex justify-end  items-center flex-1">
        <img
          src={toggle ? close : menu}
          alt=""
          className="h-[28px] w-[28px] object-contain cursor-pointer"
          onClick={() => setToggle((prev) => !prev)}
        />

        <div
          className={`${
            toggle ? 'flex' : 'hidden'
          } p-6 bg-black-gradient absolute  top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className="list-none  flex flex-col justify-end items-center flex-1 ">
            {navLinks.map((nav) => (
              <li
                key={nav.id}
                className={`font-poppins font-normal cursor-pointer text-[16px] m-4 text-white`}
              >
                {' '}
                <a href={`${nav.id}`}>{nav.title} </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
