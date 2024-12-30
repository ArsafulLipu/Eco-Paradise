const Menu = () => {
  



  const menuItems = [
    { id: 1, name: "কোল্ড কফি", price: "১২০ ৳", image: "https://i.ibb.co/z6npYDN/cold-coffee.jpg" },
    { id: 2, name: "হট কফি", price: "৪০ ৳", image: "https://i.ibb.co/dctx2V7/coffee.jpg" },
    { id: 3, name: "ফালুদা", price: "১৫০ ৳", image: "https://i.ibb.co.com/dL8cL9F/Faluda.jpg" },
    { id: 4, name: "পুডিং", price: "১০০ ৳", image: "https://i.ibb.co/GdTVVSW/pudding.jpg" },
    { id: 5, name: "লাচ্ছি", price: "১০০ ৳", image: "https://i.ibb.co/F3Ftnb8/lacchi.jpg" },
    { id: 6, name: "আইসক্রিম", price: "১০০ ৳", image: "https://i.ibb.co/ySkwKfQ/icecream.jpg" },
    { id: 7, name: "মালাই চা", price: "৩০ ৳", image: "https://i.ibb.co.com/X4jWFMT/masala-tea.jpg" },
    { id: 8, name: "দুধ চা", price: "১৫ ৳", image: "https://i.ibb.co.com/X4jWFMT/masala-tea.jpg" },
    { id: 9, name: "অপরাজিতা চা", price: "১৫ ৳", image: "https://i.ibb.co.com/YDgrVMP/oporajita.jpg" },
    { id: 10, name: "মসলা চা", price: "১৫ ৳", image: "https://i.ibb.co.com/X4jWFMT/masala-tea.jpg" },
    { id: 11, name: "মাল্টা চা", price: "১৫ ৳", image: "https://i.ibb.co/Qb7QKwG/tea.jpg" },
    { id: 12, name: "লেমন টি", price: "১০ ৳", image: "https://i.ibb.co.com/NSfVkb9/cinnamon-ginger-tea-recipe-with-lemon-and-honey-in-teacups-1-of-1-8.jpg" },
    { id: 13, name: "খিচুড়ি", price: "৮০ ৳", image: "https://i.ibb.co.com/c1kNyzv/khisuri.jpg" },
    { id: 14, name: "সিঙ্গারা", price: "১০ ৳", image: "https://i.ibb.co/wY6gr9V/singra.jpg" },
    { id: 15, name: "কিমা পুরি", price: "১০ ৳", image: "https://i.ibb.co/s1tC5Gf/roll.jpg" },
    { id: 16, name: "ভেজিটেবল রোল", price: "৩০ ৳", image: "https://i.ibb.co/s1tC5Gf/roll.jpg" },
    { id: 17, name: "পরোটা", price: "১০ ৳", image: "https://i.ibb.co.com/D9Hrtc5/Paratha.jpg" },
    { id: 18, name: "চিতই পিঠা", price: "১০ ৳", image: "https://i.ibb.co/nMgSYWv/pexels-pixabay-2135.jpg" },
    { id: 19, name: "হাঁসের মাংস", price: "বাজারদর", image: "https://i.ibb.co.com/C8ZF8ds/haser-mangso.jpg" },
    { id: 20, name: "কাকড়া ফ্রাই", price: "বাজারদর", image: "https://i.ibb.co/nbJGPz8/kakra.jpg" },
    { id: 21, name: "ফিশ বিবিকিউ", price: "বাজারদর", image: "https://i.ibb.co.com/XSDftQZ/fish-bbq.jpg" },
    { id: 22, name: "চিংড়ি ফ্রাই", price: "বাজারদর", image: "https://i.ibb.co/2cGv95g/chingrii.jpg" },
    { id: 23, name: "গরুর মাংস", price: "বাজারদর", image: "https://i.ibb.co.com/m6N5ggN/gorur-mangso.jpg" },
    { id: 24, name: "চিকেন ফ্রাই", price: "১০০ ৳", image: "https://i.ibb.co/MVGwFtG/chicken-fry.jpg" },
    { id: 25, name: "ফ্রেঞ্চ ফ্রাই", price: "১০০ ৳", image: "https://i.ibb.co/H4zhKTB/french-fry.jpg" },
    { id: 26, name: "চাওমিন", price: "১৫০ ৳", image: "https://i.ibb.co/6ND9x69/noodles.jpg" },
    { id: 27, name: "পাস্তা", price: "১৫০ ৳", image: "https://i.ibb.co/RCjVL5R/pasta.jpg" },
    { id: 28, name: "চিকেন টিকা বার্গার", price: "২০০ ৳", image: "https://i.ibb.co/wdKkDC3/burger.jpg" },
    { id: 29, name: "চিকেন বার্গার", price: "১৫০ ৳", image: "https://i.ibb.co/wdKkDC3/burger.jpg" },
    { id: 30, name: "এগ বার্গার", price: "৬০ ৳", image: "https://i.ibb.co/wdKkDC3/burger.jpg" },
    { id: 31, name: "চিকেন স্যান্ডউইচ", price: "৬০ ৳", image: "https://i.ibb.co.com/nftWSj9/Sandwich.webp" },
    { id: 32, name: "চিকেন উইংস", price: "৩০০ ৳", image: "https://i.ibb.co.com/ZNwQS3F/chicken.jpg" },
    { id: 33, name: "চিকেন ললিপপ", price: "৩০০ ৳", image: "https://i.ibb.co/HhNy9wn/pexels-teejay-1362534.jpg" }
  ];

  return (
    <div id="menu" className="bg-gray-100 min-h-screen py-10">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">Our Menu</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {menuItems.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition duration-300"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-40 object-cover rounded-t-md mb-4"
              />
              <h2 className="text-xl font-semibold text-gray-800 mb-2">{item.name}</h2>
              <p className="text-lg text-gray-600">Price: {item.price}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Menu;
