export default function HobbyLinks(){
    let hobbyLinks = ["https://www.basspro.com/shop/en#", "https://react.dev/"]

    return(
        <div>
        <a href = {hobbyLinks[0]}>Bass Pro Shops</a>
        <a href = {hobbyLinks[1]}>Become a React Developer</a>
        </div>
    );
}