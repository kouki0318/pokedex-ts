import img from 'next/image';

export default async function Home() {

  // 1~100番目のポケモンを取得
  const pokemonList = await Promise.all(
    Array.from({ length: 100 }, (_, i) =>
      fetch(`https://pokeapi.co/api/v2/pokemon/${i + 1}`).then((res) => res.json()))
  );

  return (
    <main className="p-8 grid grid-cols-2 sm:grid-cols3 md:grid-cols-4 gap-4">
      {pokemonList.map((pokemon: any) => (
        <div
          key={pokemon.id}
          className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center"
          >
            <h2 className='text-lg font-bold mb-2'>{pokemon.name}</h2>
            <img
              src={pokemon.sprites.front_default}
              alt={pokemon.name}
              className='mx-auto'
            ></img>
            <p>Type: {pokemon.types[0].type.name}</p>
        </div>
      ))}
    </main>
  );
}
