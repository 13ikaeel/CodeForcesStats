const Header = () => {
  return (
    <header className="px-10 flex items-center justify-between gap-4 bg-pri">
      <span className="text-text-sec font-semibold text-2xl cursor-pointer">
        CodeForcesStats
      </span>

      <ul className="flex gap-3">
        <a
          href="https://github.com/13ikaeel/CodeForcesStats"
          className="bg-accent p-4"
          target="_blank"
          rel="noopener noreferrer"
        >
          <li className="">
            <span className="text-text-sec mr-2">GitHub</span>
            <i className="fa-brands fa-github fill-current text-text-sec"></i>
          </li>
        </a>
      </ul>
    </header>
  );
};

export default Header;
