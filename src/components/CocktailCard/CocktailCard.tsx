import { Cocktail } from 'interfaces';
import './CocktailCard.scss';

interface Props {
  cocktail: Cocktail;
}

const numbersIngredientsPositions = 4;

const getCocktailMeasure = (cocktail: Cocktail, index: number) => {
  const measureSplitted = (
    cocktail[('strMeasure' + index) as keyof Cocktail] as string
  )?.split(' ');

  return {
    first: measureSplitted?.slice(0, 1)?.join(' '),
    second: measureSplitted?.slice(1, 10)?.join(' '),
  };
};

const CocktailCard = ({ cocktail }: Props) => {
  return (
    <div className="cocktail">
      <div className="cocktail__head">
        <div className="cocktail__head__content">
          <h4>{cocktail.strDrink}</h4>
          <div
            className="cocktail__head__content__instructions"
            title={cocktail.strInstructions}
          >
            {cocktail.strInstructions}
          </div>
        </div>
        <div className="cocktail__head__image">
          <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink} />
        </div>
      </div>
      <div className="px-2">
        <hr />
      </div>
      <div className="cocktail__ingredients">
        <span className="cocktail__ingredients-title">Ingredients</span>
        <div className="cocktail__ingredients__container">
          {new Array(numbersIngredientsPositions).fill('').map((_, index) =>
            cocktail[('strIngredient' + index) as keyof Cocktail] ? (
              <div
                className="cocktail__ingredients__container__child"
                key={index}
              >
                <div className="cocktail__ingredients__container__child__measure">
                  <span className="cocktail__ingredients__container__child__measure-first">
                    {getCocktailMeasure(cocktail, index).first}
                  </span>
                  <span className="cocktail__ingredients__container__child__measure-second">
                    {getCocktailMeasure(cocktail, index).second}
                  </span>
                </div>
                <div className="cocktail__ingredients__container__child__ingredient">
                  {(cocktail[
                    ('strIngredient' + index) as keyof Cocktail
                  ] as string) || ''}
                </div>
              </div>
            ) : null,
          )}
        </div>
      </div>
    </div>
  );
};

export default CocktailCard;
