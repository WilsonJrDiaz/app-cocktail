import { useCallback, useEffect, useState } from 'react';
import { CocktailCard, NavTab } from './components';
import { getCocktailsByName } from './services/cocktail-service';
import { Cocktail } from 'interfaces';
import { getQueryParams, updateQueryParams } from './utils';

const App = () => {
  const [searchFieldValue, setSearchFieldValue] = useState(
    getQueryParams('search') || '',
  );

  const [searchParam, setSearchParam] = useState(
    getQueryParams('search') || '',
  );

  const handleSetSearch = (search: string) => {
    setSearchFieldValue(search);
    const searchParams = new URLSearchParams(window.location.search);
    searchParams.set('search', search);
    updateQueryParams(searchParams.toString());
  };

  const [cocktails, setCocktails] = useState<Cocktail[]>([]);

  const [isLoading, setIsLoading] = useState(false);

  const handleSearchCrockTailsByName = useCallback(async () => {
    const searchParams = new URLSearchParams(window.location.search);
    searchParams.set('search', searchFieldValue);
    updateQueryParams(searchParams.toString());
    setSearchParam(searchFieldValue);
    try {
      setIsLoading(true);
      const cocktails = await getCocktailsByName(searchFieldValue);
      searchFieldValue
        ? setCocktails(cocktails?.drinks || [])
        : setCocktails(cocktails?.drinks.slice(0, 5) || []);

      setIsLoading(false);
    } catch (error) {
      setCocktails([]);
      setIsLoading(false);
    }
  }, [searchParam, searchFieldValue, setSearchFieldValue, setSearchParam]);

  useEffect(() => {
    handleSearchCrockTailsByName();
  }, []);

  return (
    <div className="container">
      <NavTab
        search={searchFieldValue}
        setSearch={setSearchFieldValue}
        handleSearchCrockTailsByName={handleSearchCrockTailsByName}
      />   
      {isLoading ? (
        <span>Loading...</span>
      ) : (
        <>
          <h2>{searchParam ? 'Results of search' : 'Top 5 most popular cocktails:'}</h2>
          <small>{`I have found ${cocktails.length} cocktails...`}</small>
          <div className="cocktail-container">
            {(cocktails.length &&
              cocktails.map((cocktail) => (
                <CocktailCard cocktail={cocktail} key={cocktail.idDrink} />
              ))) || <span>There are no results to show &nbsp;<img width={50} src="https://cdn-icons-png.flaticon.com/512/5058/5058046.png" alt="" /></span>}
          </div>
        </>
      )}
    </div>
  );
};

export default App;
