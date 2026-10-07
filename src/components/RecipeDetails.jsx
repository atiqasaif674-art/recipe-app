function RecipeDetails({ recipe, onBack }) {
  if (!recipe) return null;
  return (
    <div className="details-page">
      <button className="back-btn" onClick={onBack}>← Back to Recipes</button>
      <div className="details-container">
        <div className="details-image">
          <img src={recipe.image} alt={recipe.name} />
        </div>
        <div className="details-content">
          <span className="category">{recipe.category}</span>
          <h1>{recipe.name}</h1>
          <div className="details-info">
            <span>⏱️ {recipe.time}</span>
            <span>📊 {recipe.difficulty}</span>
          </div>
          <h2>🥕 Ingredients</h2>
          <ul className="ingredients">
            {recipe.ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
          <h2>👨‍🍳 Instructions</h2>
          <p className="instructions">{recipe.instructions}</p>
        </div>
      </div>
    </div>
  );
}
export default RecipeDetails;