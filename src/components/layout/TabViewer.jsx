import {useEffect, useState} from "react";
import PageHeading from "../utilities/PageHeading";
import Search from "../utilities/Search";
import {convertNum} from "../utilities/func";
import {Link} from "react-router-dom";

const TabViewer = () => {
  const [showFull, setShowFull] = useState(true);
  const [books, setBooks] = useState([]);
  const [chapters, setChapters] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/getBooks`)
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);

  useEffect(() => {
    fetch(`http://localhost:5000/getChapter`)
      .then((res) => res.json())
      .then((data) => setChapters(data));
  }, []);

  return (
    <div>
      <PageHeading id={books[0]?.id} />

      <div className="h-[calc(100vh-150px)]  overflow-auto">
        <div className="border-b-2 mb-3">
          <div className="flex justify-between items-center p-3">
            <h1 className="text-2xl font-bold">{books[0]?.title}</h1>
            <Search />
          </div>

          {showFull ? (
            <p className="text-sm py-6 px-3">
              <span>{books[0]?.book_descr.slice(0, 250)}...</span>
              <button className="text-emerald-600" onClick={() => setShowFull(false)}>
                আরো দেখুন
              </button>
            </p>
          ) : (
            <p className="text-sm py-6 px-3">
              <span>{books[0]?.book_descr}</span>
              <button className="ms-1 text-emerald-600" onClick={() => setShowFull(true)}>
                লুকান
              </button>
            </p>
          )}
        </div>

        <div className="px-3">
          {chapters.map((chapter) => (
            <Link to={`/bukhari/${chapter.id}`} key={chapter.id}>
              <div className="flex items-center gap-4 p-4 rounded-xl hover:bg-green-100 border-b custom_parent">
                <p className="w-10 h-10 flex justify-center items-center rounded-full text-sm bg-gray-300 text-gray-200 font-bold custom_child">
                  {convertNum(chapter.id)}
                </p>
                <div className="w-full flex justify-between">
                  <p className="text-md font-bold text-black custom_name">{chapter.title}</p>
                  <p className="text-sm text-gray-500 custom_name">{chapter.hadis_range}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TabViewer;
