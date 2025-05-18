const SearchInput = ({ handleSearch, placeholder }: { handleSearch: (event: React.ChangeEvent<HTMLInputElement>) => void, placeholder: string }) => (
  <input
    type="text"
    onChange={handleSearch}
    className="w-full p-2 mb-4 rounded-lg border dark:bg-gray-800 dark:border-gray-700"
    placeholder={placeholder}
  />
);

export default SearchInput;