const Sidebar = () => {
  return (
    <div className="h-full overflow-auto  bg-gray-200 ">
      <div className="p-3 rounded-2xl bg-white mb-3">
        <h1 className="text-2xl text-center font-bold">সেটিংস</h1>

        <p className="mt-5 text-sm mb-2">আরবি ফন্ট সিলেক্ট করুন</p>
        <select className="select select-bordered w-full text-lg font-bold mb-8">
          <option selected>KFGQ</option>
          <option>Me Quran</option>
          <option>Al Mushaf</option>
          <option>Amiri</option>
          <option>Arial</option>
        </select>

        <p className="text-sm font-bold my-3">এরাবিক ফন্ট সাইজ</p>
        <input type="range" min={0} max="100" className="range range-xs h-3 range-success" />
        <p className="text-sm font-bold my-3">অনুবাদ ফন্ট সাইজ</p>
        <input type="range" min={0} max="100" className="range range-xs h-3 range-success" />
        <p className="flex items-center justify-between text-sm font-bold my-5">
          <span>নাইট মোড</span> <input type="checkbox" className="toggle toggle-md toggle-success" />
        </p>
      </div>

      <div className="p-3 text-white rounded-2xl bg-emerald-600">
        <h1 className="text-xl font-bold ">আপনিও সদাকায়ে জারিয়াতে অংশ নিন</h1>
        <p className="my-5">
          আপনার দান, সেটা ছোট হলেও, ইসলামের বার্তা ও হাদিস প্রচারে সহায়তা করবে। আমাদের কাজের অংশ হতে এবং এই
          গুরুত্বপূর্ণ কাজে সাহায্য করতে আমাদের প্রজেক্টে হাদিয়া দিন। ইনশাআল্লাহ এটি সদাকায়ে জারিয়াহ হিসেবে আল্লাহ্‌র
          কাছে কবুল হবে।
        </p>

        <div className="text-center">
          <button className="btn text-emerald-600 hover:bg-white hover:shadow-lg">সাপোর্ট করুন</button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
