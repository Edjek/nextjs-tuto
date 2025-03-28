function Navbar() {
  return (
    <nav className='flex gap-x-2'>
      <a className='underline' href='/'>
        Accueil
      </a>
      <a className='underline' href='/blog'>
        Blog
      </a>
      <a className='underline' href='/contact'>
        Contact
      </a>
      <a className='underline' href='/dashboard'>
        Dashboard
      </a>
    </nav>
  );
}

export default Navbar;
