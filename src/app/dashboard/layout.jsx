function layout({ children }) {
  return (
    <div>
      <nav className='flex gap-x-2'>
        <a className='underline' href='/dashboard/finance'>
          Dashboard finance
        </a>
        <a className='underline' href='/dashboard/rh'>
          Dashboard RH
        </a>
      </nav>
      {children}
    </div>
  );
}

export default layout;
