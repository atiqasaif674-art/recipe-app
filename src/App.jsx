import { useState } from "react";
import SearchBar from "./components/SearchBar";
import RecipeList from "./components/RecipeList";
import RecipeDetails from "./components/RecipeDetails";
import recipesData from "./data/recipes";
import "./App.css";
function App() {
  const [search, setSearch] = useState("");
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [favorites, setFavorites] = useState([]);
  const filteredRecipes = recipesData.filter((recipe) =>
    recipe.name.toLowerCase().includes(search.toLowerCase())
  );
  const handleFavorite = (id) => {
    setFavorites((previousFavorites) => {
      if (previousFavorites.includes(id)) {
        return previousFavorites.filter((favoriteId) => favoriteId !== id);
      }
      return [...previousFavorites, id];
    });
  };
  const handleSelectRecipe = (recipe) => {
    setSelectedRecipe(recipe);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  const handleBack = () => {
    setSelectedRecipe(null);
  };
  return (
    <div className="app">
      <header className="header">
        <div className="logo">
          🍴 <span>RecipeHub</span>
        </div>
        <div className="favorite-count">
          ❤️ {favorites.length}
        </div>
      </header>
      {!selectedRecipe ? (
        <>
          <section className="hero">
            <div className="hero-content">
              <p className="small-title">WELCOME TO RECIPEHUB</p>
              <h1>Discover Your<span> Favorite Recipes</span></h1>
              <p>Find delicious and easy recipes for every occasion.</p>
              <SearchBar search={search} setSearch={setSearch}/>
            </div>
          </section>
          <main className="main-content">
            <div className="section-heading">
              <div>
                <p>OUR COLLECTION</p>
                <h2>Popular Recipes 🍽️</h2>
              </div>
              <span>{filteredRecipes.length} recipes</span>
            </div>
            <RecipeList recipes={filteredRecipes} onSelect={handleSelectRecipe} favorites={favorites} onFavorite={handleFavorite}/>
          </main>
        </>
      ) : (
        <RecipeDetails recipe={selectedRecipe} onBack={handleBack}/>
      )}
      <footer>
        <p>Made with ❤️ using React</p>
      </footer>
    </div>
  );
}
export default App;