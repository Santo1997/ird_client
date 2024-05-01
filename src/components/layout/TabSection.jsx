import {useEffect, useState} from "react";
import {Tab, Tabs, TabList, TabPanel} from "react-tabs";
import Search from "../utilities/Search";
import {convertNum} from "../utilities/func";
import {Link} from "react-router-dom";

const TabSection = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [books, setBooks] = useState([]);
  const [chapters, setChapters] = useState([]);

  useEffect(() => {
    fetch(`https://ird-task-server-pink.vercel.app/getBooks`)
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);

  useEffect(() => {
    fetch(`https://ird-task-server-pink.vercel.app/getChapter`)
      .then((res) => res.json())
      .then((data) => setChapters(data));
  }, []);

  return (
    <>
      <Tabs className="h-full">
        <TabList className="grid grid-cols-2 justify-items-center w-full text-center  cursor-pointer">
          <Tab
            className={`w-full p-3 border-b-2 focus:outline-0 ${activeTab == 99999 ? "bg-emerald-600 text-white" : ""}`}
            onClick={() => setActiveTab(99999)}>
            বই
          </Tab>
          <Tab
            className={`w-full p-3 border-b-2 focus:outline-0 ${
              activeTab == 999999 ? "bg-emerald-600 text-white" : ""
            }`}
            onClick={() => setActiveTab(999999)}>
            অধ্যায়
          </Tab>
        </TabList>
        <div className="p-3 h-full overflow-hidden">
          <Search />
          <div className="py-3 h-full overflow-auto ">
            <TabPanel>
              {books.map((book) => (
                <Link to={`/`} key={book.id}>
                  <div
                    className={`flex items-center gap-2 p-4 rounded-xl hover:bg-emerald-100 custom_parent ${
                      activeTab == book.id ? "bg-emerald-100 text-white" : ""
                    }`}
                    onClick={() => setActiveTab(book.id)}>
                    <p
                      className={`w-10 h-10 flex justify-center items-center rounded-full text-sm text-gray-200 font-bold custom_child ${
                        activeTab == book.id ? "bg-emerald-600 text-white" : "bg-gray-300"
                      }`}>
                      {book.abvr_code}
                    </p>
                    <p className="text-xs">
                      <span className="font-bold text-black">{book.title}</span> <br />
                      <span className="text-gray-500">সর্বমোট হাদিস - {convertNum(book.number_of_hadis)}</span>
                    </p>
                  </div>
                </Link>
              ))}
            </TabPanel>
            <TabPanel>
              {chapters.map((chapter) => (
                <Link to={`/bukhari/${chapter.id}`} key={chapter.id}>
                  <div
                    className={`flex items-center gap-2 p-4 rounded-xl hover:bg-emerald-100 custom_parent ${
                      activeTab == chapter.id ? "bg-emerald-100 text-white" : ""
                    }`}
                    onClick={() => setActiveTab(chapter.id)}>
                    <p
                      className={`w-10 h-10 flex justify-center items-center rounded-full text-sm text-gray-200 font-bold custom_child ${
                        activeTab == chapter.id ? "bg-emerald-600 text-white" : "bg-gray-300"
                      }`}>
                      {convertNum(chapter.id)}
                    </p>
                    <p className="text-xs">
                      <span className="font-bold text-black">{chapter.title}</span> <br />
                      <span className="text-gray-500">হাদিসের রেঞ্জ: {chapter.hadis_range}</span>
                    </p>
                  </div>
                </Link>
              ))}
            </TabPanel>
          </div>
        </div>
      </Tabs>
    </>
  );
};

export default TabSection;
