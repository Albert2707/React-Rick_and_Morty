import CharacterList from "./Components/CharacterList";
function App() {
  return (
    <div className="bg-slate-900 text-white  pb-20">
      <h1 className =" text-2xl sm:text-4xl md:text-5xl font-extralight text-center py-4 ">Rick and Morty</h1>
      <CharacterList />
    </div>
  );
}

export default App;
