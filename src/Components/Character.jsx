function Character({ character }) {
  return (
    <div className="container px-5 sm:px-5 md:px-0 ">
    <div className="bg-slate-800  shadow-2xl shadow-slate-800 md:hover:shadow-none md:hover:scale-105 transition-all duration-500 md:hover:border-4 border-2 border-y-sky-700 border-x-emerald-600 p-6 rounded-2xl w-full h-[100%] ">
      <div className="flex flex-col items-center space-y-5 group">
        <img
          className="w-32 h-32 rounded-full  "
          src={character.image}
          alt={character.name}
        />
        <h2 className="text-center text-white uppercase ">{character.name}</h2>
        <h2 className="text-center text-white uppercase ">{character.origin.name}</h2>

      </div>
    </div>
    </div>
  );
}

export default Character;
