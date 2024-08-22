export default function BookList() {
   let pageTitle = "My Reading List";
   let book1 = "https://m.media-amazon.com/images/M/MV5BMTA1NDQ3NTcyOTNeQTJeQWpwZ15BbWU3MDA0MzA4MzE@._V1_.jpg";
   let book2 = "https://m.media-amazon.com/images/M/MV5BNTEyNjUwMTkxMV5BMl5BanBnXkFtZTcwNjk0NDk0NA@@._V1_.jpg";
   let book3 = "https://m.media-amazon.com/images/M/MV5BOTAzODEzNDAzMl5BMl5BanBnXkFtZTgwMDU1MTgzNzE@._V1_FMjpg_UX1000_.jpg";

   return (
      <div>
         <h3>{pageTitle}</h3>
         <img src={book1} alt="Pride and Prejudice" />
         <img src={book2} alt="Leagally Blonde" />
         <img src={book3} alt="Starwars" />
      </div>      
   );
}