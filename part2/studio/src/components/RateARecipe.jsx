let stars = ["⭐", "⭐ ⭐", "⭐ ⭐ ⭐", "⭐ ⭐ ⭐ ⭐", "⭐ ⭐ ⭐ ⭐ ⭐"];

function GiveRating(props) {
  props 
  return (
  <h1>number of stars{stars[props.rating-1]}</h1>
  );
}

function RateARecipe() {  
  return <GiveRating rating={4} />; 
}

export default RateARecipe;
//conditional to render stars based on a number provided in App.js 
