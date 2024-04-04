import { FaSearch } from 'react-icons/fa'

const Search = () => {
  return (
    <div className="flex items-center gap-2">
      <input type="text" placeholder="Search" className="input w-full text-black max-w-xs bg-white border border-black" />
      <FaSearch className="text-2xl text-black" />
    </div>
  );
}

export default Search;
