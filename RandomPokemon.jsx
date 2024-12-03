export default function RandomPokemon(){
    const randomNum = Math.floor(Math.random() * 200) + 1;
    const Url = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${randomNum}.png`
    return (
        <div>
            <h1>POKEMON #{randomNum}</h1>
            <img src={Url}/>
        </div>
    )
}