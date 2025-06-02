interface props {}

const SearchBar: React.FC<props> = ({}) => {
  return (
    <div id="search-bar-container">
      <svg
        width="367"
        height="50"
        viewBox="0 0 367 50"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="367" height="50" rx="2" fill="#D9D9D9" />
      </svg>
      <svg
        width="17"
        height="17"
        viewBox="0 0 17 17"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="relative bottom-8.5 left-3"
      >
        <circle
          cx="7.80834"
          cy="7.80834"
          r="6.80834"
          stroke="black"
          stroke-width="1.5"
        />
        <path
          d="M12.825 12.825L15.3333 15.3334"
          stroke="black"
          stroke-width="1.5"
          stroke-linecap="round"
        />
      </svg>
    </div>
  );
};

export default SearchBar;
