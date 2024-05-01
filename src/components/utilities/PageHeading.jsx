import {TbBooks} from "react-icons/tb";

const PageHeading = ({id}) => {
  return (
    <div className="flex items-center p-3 text-gray-500 border-b-2 cursor-pointer">
      <TbBooks className="text-xl" />
      <span> &#62; Bukhari </span>
      {id ? <span> &#62; {id} </span> : null}
    </div>
  );
};

export default PageHeading;
