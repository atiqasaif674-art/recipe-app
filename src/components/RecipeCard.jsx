//recipe → recipe ka data
// onSelect → "View Recipe" click hone par kya karna hai
// isFavorite → ye recipe favorite hai ya nahi (true/false)
// onFavorite → favorite button click hone par kya karna hai
function RecipeCard({ recipe, onSelect, isFavorite, onFavorite }) {
  return (
    <div className="recipe-card">
      {/* Ye image aur favorite button ko ek container mein rakhta hai. */}
      <div className="image-container">
        {/* Yahan recipe.image se image ka URL liya ja raha hai. */}
        <img src={recipe.image} alt={recipe.name} />
        {/* Parent component decide karega ke recipe ko favorite mein add karna hai ya remove. */}
        <button className={`favorite-btn ${isFavorite ? "active" : ""}`} onClick={() => onFavorite(recipe.id)}>
          {isFavorite ? "❤️" : "🤍"}
        </button>
      </div>
      {/* Iske andar recipe ki remaining information hai. */}
      <div className="recipe-content">
        <span className="category">{recipe.category}</span>
        <h2>{recipe.name}</h2>
        <div className="recipe-info">
          <span>⏱️ {recipe.time}</span>
          <span>📊 {recipe.difficulty}</span>
        </div>
        {/* Yahan poora recipe object parent ko bheja ja raha hai */}
        <button className="view-btn" onClick={() => onSelect(recipe)}>
          View Recipe
        </button>
      </div>
    </div>
  );
}
export default RecipeCard;