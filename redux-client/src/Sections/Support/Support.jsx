import React from "react";
import support from "../../../public/support.gif";

const Support = () => {
  return (
    <div
      id="support"
      className="lg:flex items-center justify-between my-32 gap-10"
    >
      <div data-aos="fade-left" className="lg:w-full w-96 m-auto">
        <h1 className="my-5  dark:text-white">
          সার্বক্ষণিক সহায়তার জন্য থাকছে
          <span className="primary-highlighter dark:text-[#38bdf8]">
            {" "}
            ডিসকোর্ড
          </span>{" "}
          সাপোর্ট চ্যানেল
        </h1>
        <p className="text-primary-color dark:text-[#7a899d]">
          এই বইটির জন্য আমরা একটি প্রাইভেট ডিসকোর্ড সাপোর্ট চ্যানেল তৈরী করেছি
          যেখানে বইটির লেখক আব্দুর রহমান সুলতানী সহ আরো 4-5 জন ওয়েব ডেভেলপার
          সরাসরি আপনাদের বিভিন্ন প্রশ্নের উত্তর দিবেন। আমরা অঙ্গীকার করছি
          সর্বোচ্চ ২৪ ঘণ্টার মধ্যে আপনাদের প্রশ্নের উত্তর দিতে পারবো। তবে
          অধিকাংশ ক্ষেত্রে তার চেয়েও কম সময়ে আপনারা উত্তর পেয়ে যাবেন। এছাড়া
          প্রতি সপ্তাহে লাইভ সেশন থাকবে যেখানে আপনারা সরাসরি প্রশ্ন করে উত্তর
          পেতে পারবেন।
        </p>
        <div className="flex gap-5 mt-3">
          <button className="flex gap-1 bg-[#0f172a] dark:text-[#38bdf8] hover:bg-slate-600 rounded-[50px] py-2 px-5 text-white border-2 dark:border-[#38bdf8]">
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 640 512"
              height="24"
              width="24"
              className=""
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M524.531,69.836a1.5,1.5,0,0,0-.764-.7A485.065,485.065,0,0,0,404.081,32.03a1.816,1.816,0,0,0-1.923.91,337.461,337.461,0,0,0-14.9,30.6,447.848,447.848,0,0,0-134.426,0,309.541,309.541,0,0,0-15.135-30.6,1.89,1.89,0,0,0-1.924-.91A483.689,483.689,0,0,0,116.085,69.137a1.712,1.712,0,0,0-.788.676C39.068,183.651,18.186,294.69,28.43,404.354a2.016,2.016,0,0,0,.765,1.375A487.666,487.666,0,0,0,176.02,479.918a1.9,1.9,0,0,0,2.063-.676A348.2,348.2,0,0,0,208.12,430.4a1.86,1.86,0,0,0-1.019-2.588,321.173,321.173,0,0,1-45.868-21.853,1.885,1.885,0,0,1-.185-3.126c3.082-2.309,6.166-4.711,9.109-7.137a1.819,1.819,0,0,1,1.9-.256c96.229,43.917,200.41,43.917,295.5,0a1.812,1.812,0,0,1,1.924.233c2.944,2.426,6.027,4.851,9.132,7.16a1.884,1.884,0,0,1-.162,3.126,301.407,301.407,0,0,1-45.89,21.83,1.875,1.875,0,0,0-1,2.611,391.055,391.055,0,0,0,30.014,48.815,1.864,1.864,0,0,0,2.063.7A486.048,486.048,0,0,0,610.7,405.729a1.882,1.882,0,0,0,.765-1.352C623.729,277.594,590.933,167.465,524.531,69.836ZM222.491,337.58c-28.972,0-52.844-26.587-52.844-59.239S193.056,219.1,222.491,219.1c29.665,0,53.306,26.82,52.843,59.239C275.334,310.993,251.924,337.58,222.491,337.58Zm195.38,0c-28.971,0-52.843-26.587-52.843-59.239S388.437,219.1,417.871,219.1c29.667,0,53.307,26.82,52.844,59.239C470.715,310.993,447.538,337.58,417.871,337.58Z"></path>
            </svg>
            সাপোর্ট চ্যানেল
          </button>

          <button className="flex gap-1 border-slate-950 border-2 rounded-[50px] py-2 px-5 text-black dark:text-[#38bdf8]  dark:border-[#38bdf8]">
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 1024 1024"
              height="24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M877.1 238.7L770.6 132.3c-13-13-30.4-20.3-48.8-20.3s-35.8 7.2-48.8 20.3L558.3 246.8c-13 13-20.3 30.5-20.3 48.9 0 18.5 7.2 35.8 20.3 48.9l89.6 89.7a405.46 405.46 0 0 1-86.4 127.3c-36.7 36.9-79.6 66-127.2 86.6l-89.6-89.7c-13-13-30.4-20.3-48.8-20.3a68.2 68.2 0 0 0-48.8 20.3L132.3 673c-13 13-20.3 30.5-20.3 48.9 0 18.5 7.2 35.8 20.3 48.9l106.4 106.4c22.2 22.2 52.8 34.9 84.2 34.9 6.5 0 12.8-.5 19.2-1.6 132.4-21.8 263.8-92.3 369.9-198.3C818 606 888.4 474.6 910.4 342.1c6.3-37.6-6.3-76.3-33.3-103.4zm-37.6 91.5c-19.5 117.9-82.9 235.5-178.4 331s-213 158.9-330.9 178.4c-14.8 2.5-30-2.5-40.8-13.2L184.9 721.9 295.7 611l119.8 120 .9.9 21.6-8a481.29 481.29 0 0 0 285.7-285.8l8-21.6-120.8-120.7 110.8-110.9 104.5 104.5c10.8 10.8 15.8 26 13.3 40.8z"></path>
            </svg>
            সাপোর্ট চ্যানেল
          </button>
        </div>
      </div>
      <img src={support} alt="" data-aos="fade-right" />
    </div>
  );
};

export default Support;