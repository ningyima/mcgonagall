var RecipeList = (props) => (
  <div className="">
    {props.recipes.map(el =>
      <RecipeEntry recipe={el}/>)}
  </div>
);
