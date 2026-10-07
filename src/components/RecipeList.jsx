//RecipeCard.jsx naam ki file mein jo component bana hua hai, usko yahan use karna hai
// Yani RecipeList ke andar hum har recipe ko RecipeCard ki form mein show karenge
//| Prop         | Kaam                                  |
// | `recipes`    | Recipes ki list                       |
// | `onSelect`   | Recipe par click karne ka function    |
// | `favorites`  | Favorite recipes ki IDs               |
// | `onFavorite` | Favorite/unfavorite karne ka function |
import RecipeCard from "./RecipeCard";
function RecipeList({recipes,onSelect,favorites,onFavorite}) {
  //recipes.length batata hai ke array mein kitni recipes hain
  if (recipes.length === 0) {
    return (
      <div className="no-results">
        <h2>😕 No recipes found</h2>
        <p>Try searching for another recipe.</p>
      </div>
    );
  }
  return (
    //Agar recipes.length 0 nahi hai, to ye code chalega Iska purpose recipes ko grid layout mein show karna hai
    <div className="recipe-grid">
      {/*map() har recipe ke liye ek baar chalega */}
      {recipes.map((recipe) => (
        //Yahan hum RecipeCard ko data bhej rahe hain
        <RecipeCard key={recipe.id} recipe={recipe} onSelect={onSelect} isFavorite={favorites.includes(recipe.id)} onFavorite={onFavorite}/>
      ))}
    </div>
  );
}
export default RecipeList;
//onSelect=>User kisi recipe par click kare → us recipe ki details open ho