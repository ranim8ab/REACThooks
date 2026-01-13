const Filter = ({ setTitleFilter, setRateFilter }) => {
  return (
    <div className="filter-container">
      <input
        type="text"
        placeholder="🔍 Search movies or TV shows..."
        onChange={(e) => setTitleFilter(e.target.value)}
      />

      <select onChange={(e) => setRateFilter(Number(e.target.value))}>
        <option value="0">All ratings</option>
        <option value="3">3 ⭐ & up</option>
        <option value="4">4 ⭐ & up</option>
        <option value="5">5 ⭐ only</option>
      </select>
    </div>
  );
};

export default Filter;

