const Banner = () => {
    return (
<section
  className="relative bg-[url(https://i.ibb.co.com/q0wdth8/banner-img.jpg)] bg-cover bg-center bg-no-repeat"
>
  <div
    className="absolute inset-0 bg-white/75 sm:bg-transparent sm:from-white/95 sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"
  ></div>

  <div
    className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8"
  >
    <div className="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
      <h1 className="text-3xl font-extrabold sm:text-5xl noto-serif-bengali">
      ইকো প্যারাডাইস

        <strong className="block font-extrabold text-rose-700"> আমাদের সাথে কাটান মনোরম পরিবেশে অসাধারণ খাবারের মুহূর্ত। </strong>
      </h1>

      <p className="mt-4 max-w-lg sm:text-xl/relaxed noto-serif-bengali bg-gray-50 border rounded-lg">
      ইকো প্যারাডাইসে আপনাকে স্বাগতম!
      আমাদের রেস্টুরেন্টের মূল আকর্ষণ হলো সতেজ, স্বাস্থ্যকর এবং পরিবেশবান্ধব খাবার। শুদ্ধ উপাদান ও সৃজনশীল রান্নার মাধ্যমে আমরা পরিবেশন করি এমন অভিজ্ঞতা, যা আপনাকে মুগ্ধ করবে।
      </p>

      <div className="mt-8 flex flex-wrap gap-4 text-center">
        <a
          href="#menu"
          className="block w-full rounded bg-rose-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
        >
          📖 মেনু দেখুন
        </a>

        <a
          href="#"
          className="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-rose-600 shadow hover:text-rose-700 focus:outline-none focus:ring active:text-rose-500 sm:w-auto"
        >
          Learn More
        </a>
      </div>
    </div>
  </div>
</section>
    );
};

export default Banner;