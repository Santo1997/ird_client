import {FaExternalLinkAlt, FaRegBookmark, FaSwatchbook} from "react-icons/fa";
import PageHeading from "./PageHeading";
import {HiOutlineBookOpen} from "react-icons/hi";
import {GiSevenPointedStar} from "react-icons/gi";
import {TiTabsOutline} from "react-icons/ti";
import {FiShare2} from "react-icons/fi";
import {ImInfo} from "react-icons/im";
import {useEffect, useState} from "react";
import {convertNum} from "./func";

const Page = () => {
  const [section, setSection] = useState([]);
  const [hadith, setHadith] = useState([]);
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

  useEffect(() => {
    fetch(`https://ird-task-server-pink.vercel.app/getSection`)
      .then((res) => res.json())
      .then((data) => setSection(data));
  }, []);

  useEffect(() => {
    fetch(`https://ird-task-server-pink.vercel.app/getHadith`)
      .then((res) => res.json())
      .then((data) => setHadith(data));
  }, []);

  return (
    <div className="h-full bg-gray-200 overflow-auto">
      <div className="bg-white rounded-2xl mb-3">
        <PageHeading id={1} />

        <div className="p-3 flex justify-between items-center font-bold">
          <div className="flex gap-4 py-4 items-center">
            <FaSwatchbook className="text-5xl" />
            <div>
              <h1 className="text-2xl mb-2">{books[0]?.title}</h1>
              <p className="text-xs">সর্বমোট হাদিস - ৭৫৬৩</p>
            </div>
          </div>
          <p className="text-2xl">{books[0]?.title_ar}</p>
        </div>
      </div>
      <div className="bg-white p-4 flex gap-4 items-center rounded-2xl font-bold mb-3">
        <p className="flex justify-center items-center w-10 h-10 text-lg  text-white bg-emerald-600 rounded-xl">১</p>
        <p className="text-lg">{chapters[0]?.title}</p>
      </div>

      {hadith.map((hadis) =>
        section.map((sect) => {
          if (sect.id === hadis.section_id) {
            return (
              <div key={sect.id}>
                <div className="bg-white p-4 rounded-2xl mb-3">
                  <p className="flex items-center gap-3 font-bold">
                    <span>
                      <HiOutlineBookOpen className="text-emerald-600 text-4xl" />
                    </span>
                    <span> {sect.number} </span>
                  </p>
                  <p className="py-4  text-sm font-bold">{sect.title}</p>
                  {sect?.preface ? <p className="text-xs pt-2 border-t-2 leading-loose"> {sect.preface}</p> : null}
                </div>
                <div className="bg-white p-4 rounded-2xl mb-3">
                  <p className="flex items-center gap-3 font-bold">
                    <span>
                      <GiSevenPointedStar className="text-emerald-600 text-4xl" />
                    </span>
                    <span className="text-2xl font-bold text-emerald-600"> {convertNum(hadis.section_id)} </span>
                  </p>
                  <p className="py-4 border-b-2 text-2xl text-right leading-loose">{hadis.ar}</p>
                  <p className="text-xs pt-2 leading-loose">
                    <strong className="text-emerald-600">{hadis.narrator}থেকে বর্ণিত:</strong>
                    <br /> <br />
                    <span>{hadis.bn}</span>
                  </p>
                  <p className="mt-10 flex justify-between items-center">
                    <span className="text-sm me-24">
                      হাদিসের মান : <button className="btn btn-sm btn-success text-white">{hadis.grade}</button>
                    </span>
                    <TiTabsOutline className="text-2xl text-gray-500" />
                    <FaRegBookmark className="text-2xl text-gray-500" />
                    <FiShare2 className="text-2xl text-gray-500" />
                    <ImInfo className="text-2xl text-gray-500" />
                    <FaExternalLinkAlt className="text-2xl text-gray-500" />
                  </p>
                </div>
              </div>
            );
          }
        })
      )}

      {/* {section.map((sect) =>
        hadith.map((hadis) => {
          if (sect.id === hadis.hadith_id) {
            return (
              <div key={sect.id}>
                <div className="bg-white p-4 rounded-2xl mb-3">
                  <p className="flex items-center gap-3 font-bold">
                    <span>
                      <HiOutlineBookOpen className="text-emerald-600 text-4xl" />
                    </span>
                    <span> {sect.number} </span>
                  </p>
                  <p className="py-4  text-sm font-bold">{sect.title}</p>
                  {sect?.preface ? <p className="text-xs pt-2 border-t-2 leading-loose"> {sect.preface}</p> : null}
                </div>
                <div className="bg-white p-4 rounded-2xl mb-3">
                  <p className="flex items-center gap-3 font-bold">
                    <span>
                      <GiSevenPointedStar className="text-emerald-600 text-4xl" />
                    </span>
                    <span className="text-2xl font-bold text-emerald-600"> {convertNum(hadis.section_id)} </span>
                  </p>
                  <p className="py-4 border-b-2 text-2xl text-right leading-loose">{hadis.ar}</p>
                  <p className="text-xs pt-2 leading-loose">
                    <strong className="text-emerald-600">{hadis.narrator}থেকে বর্ণিত:</strong>
                    <br /> <br />
                    <span>{hadis.bn}</span>
                  </p>
                  <p className="mt-10 flex justify-between items-center">
                    <span className="text-sm me-24">
                      হাদিসের মান : <button className="btn btn-sm btn-success text-white">{hadis.grade}</button>
                    </span>
                    <TiTabsOutline className="text-2xl text-gray-500" />
                    <FaRegBookmark className="text-2xl text-gray-500" />
                    <FiShare2 className="text-2xl text-gray-500" />
                    <ImInfo className="text-2xl text-gray-500" />
                    <FaExternalLinkAlt className="text-2xl text-gray-500" />
                  </p>
                </div>
              </div>
            );
          }
        })
      )} */}
    </div>
  );
};

export default Page;
