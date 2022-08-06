import './NavTab.scss';

interface Props {
  search: string;
  setSearch: (search: string) => void;
  handleSearchCrockTailsByName: () => Promise<void>;
}
const NavTab = ({ search, setSearch, handleSearchCrockTailsByName }: Props) => {
  return (
    <nav className="mt-2 nav navtab d-flex justify-content-between align-items-center">
      <a href="/?search=">
      <img
        className="navtab__logo"
        src="public/assets/images/cocktail.png"
        alt="logo"  
        title='Cocktail APP'
      />
     
       </a>
      <div className="form-search input-group mb-3 col-6 d-flex">
        <input
          id='input-search'
          type="text"
          className="form-control"
          value={search}
          onKeyDown={(e) => { e.key === 'Enter' && handleSearchCrockTailsByName() }}
          onChange={(e) => setSearch(e.target.value)}
        />
        <div className="input-group-append">
          <button
           id='btn-search'
            className="btn button-search d-flex align-items-center"
            type="submit"
            onClick={handleSearchCrockTailsByName}
          >
            <img
              className="form-search__icon"
              src="public/assets/icons/loupe-icon.svg"
              alt="Buscar"
            />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavTab;
