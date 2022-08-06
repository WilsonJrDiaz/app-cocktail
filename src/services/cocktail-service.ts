import Cocktail from '../interfaces/Cocktail';
import httpClient from '../utils/httpClient';

interface CocktailsByNameResponse {
  drinks: Cocktail[];
}
export const getCocktailsByName = async (name: string) => {
  const { data } = await httpClient.get<CocktailsByNameResponse>(
    `/search.php?s=${name}`,
  );
  console.log(data);
  return data;
};
