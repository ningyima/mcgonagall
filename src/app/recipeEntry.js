const RecipeEntry = ({recipe}) => (
  <div><div><Image wrapped size='medium' src={recipe.image}/></div>
    <span>{recipe.title}</span>
  </div>
)

export default RecipeEntry;