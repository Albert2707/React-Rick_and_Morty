import { useEffect, useState } from "react";
import Character from "./Character";

function NavPage({ page, setPage }) {
  return (
    <div className="flex justify-center md:justify-between items-center my-12">
      <button
        className="flex flex-row-reverse items-center bg-indigo-600  p-3 md:p-4  rounded-2xl rounded-r-none md:rounded-2xl text-bold text-lg border-2 border-indigo-500 hover:bg-indigo-900 transition duration-300 hover: md:text-xl group pr-7"
        onClick={() => {
          if (page <= 1) {
            setPage(1);
          } else {
            setPage(page - 1);
          }
        }}
      >
        Page:{page}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-8 h-8 md:group-hover:-translate-x-2 transition duration-300"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 19.5L8.25 12l7.5-7.5"
          />
        </svg>
      </button>

      <button
        className="flex items-center bg-indigo-600 p-3  md:p-4 rounded-2xl text-sold text-lg border-2 border-indigo-500 hover:bg-indigo-900 transition duration-300 hover: md:text-xl group pl-7  rounded-l-none md:rounded-2xl"
        onClick={() => {
          setPage(page + 1);
        }}
      >
        Page:{page + 1}{" "}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-8 h-8 md:group-hover:translate-x-2 transition duration-300"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.25 4.5l7.5 7.5-7.5 7.5"
          />
        </svg>
      </button>
    </div>
  );
}

function CharacterList() {
  const [character, setCharacter] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);

  useEffect(() => {
    //1ra formam de traer datos
    /*     fetch("https://rickandmortyapi.com/api/character")
        .then((res) => res.json())
        .then((data) => console.log(data)); */
    //2da forma de traer datos
    async function fetchData() {
      const res = await fetch(
        `https://rickandmortyapi.com/api/character?page=${page}`
      );
      const data = await res.json();

      if (res.status === 404) {
        setLoading(true);
      } else {
        setLoading(false);
        setCharacter(data.results);
      }
    }
    fetchData();
  }, [page]);

  return (
    <div className="container  mx-auto mt-10 ">
      <NavPage page={page} setPage={setPage} />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-5 place-items-center ">
        {loading ? (
          <div role="status">
            <svg
              aria-hidden="true"
              className="mr-2 w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
              viewBox="0 0 100 101"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="currentColor"
              />
              <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="currentFill"
              />
            </svg>
            <span className="sr-only">Loading...</span>
          </div>
        ) : (
          character.map((item) => {
            return <Character key={item.id} character={item} />;
          })
        )}
      </div>
      <NavPage page={page} setPage={setPage} />
    </div>
  );
}

export default CharacterList;
