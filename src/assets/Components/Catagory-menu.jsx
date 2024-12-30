const Menu = () => {
  const menuCategories = [
    {
      category: "Drinks",
      items: [
        { id: 1, name: "কোল্ড কফি", price: "১২০ ৳", image: "https://i.ibb.co/z6npYDN/cold-coffee.jpg" },
        { id: 2, name: "হট কফি", price: "৮০ ৳", image: "https://i.ibb.co/dctx2V7/coffee.jpg" },
        { id: 5, name: "লাচ্ছি", price: "১০০ ৳", image: "https://i.ibb.co/F3Ftnb8/lacchi.jpg" },
        { id: 6, name: "আইসক্রিম", price: "১০০ ৳", image: "https://i.ibb.co/ySkwKfQ/icecream.jpg" },
        { id: 7, name: "মালাই চা", price: "৩০ ৳", image: "https://i.ibb.co/Qb7QKwG/tea.jpg" },
        { id: 8, name: "দুধ চা", price: "১৫ ৳", image: "https://i.ibb.co/Qb7QKwG/tea.jpg" }
      ]
    },
    {
      category: "Main Dishes",
      items: [
        { id: 13, name: "খিচুড়ি", price: "৮০ ৳", image: "https://i.ibb.co/6ND9x69/noodles.jpg" },
        { id: 19, name: "হাঁসের মাংস", price: "বাজারদর", image: "https://i.ibb.co/2kxdrqM/pexels-pixabay-461198.jpg" },
        { id: 23, name: "গরুর মাংস", price: "বাজারদর", image: "https://i.ibb.co/2kxdrqM/pexels-pixabay-461198.jpg" },
        { id: 38, name: "মুরগির মাংস", price: "২০০ ৳", image: "https://i.ibb.co/5vMrtm9/murgir-mangso.jpg" },
        { id: 39, name: "হাঁসের মাংস", price: "৩০০ ৳", image: "https://i.ibb.co/C8ZF8ds/haser-mangso.jpg" },
        { id: 40, name: "গরুর মাংস", price: "৪০০ ৳", image: "https://i.ibb.co/m6N5ggN/gorur-mangso.jpg" }
      ]
    },
    {
      category: "Snacks",
      items: [
        { id: 14, name: "সিঙ্গারা", price: "১০ ৳", image: "https://i.ibb.co/wY6gr9V/singra.jpg" },
        { id: 15, name: "কিমা পুরি", price: "১০ ৳", image: "https://i.ibb.co/s1tC5Gf/roll.jpg" },
        { id: 16, name: "ভেজিটেবল রোল", price: "৩০ ৳", image: "https://i.ibb.co/s1tC5Gf/roll.jpg" },
        { id: 17, name: "পরোটা", price: "২০ ৳", image: "https://i.ibb.co/nMgSYWv/pexels-pixabay-2135.jpg" },
        { id: 34, name: "স্যান্ডউইচ", price: "১০০ ৳", image: "https://i.ibb.co/nftWSj9/Sandwich.webp" }
      ]
    },
    {
      category: "Special Dishes",
      items: [
        { id: 20, name: "কাকড়া ফ্রাই", price: "বাজারদর", image: "https://i.ibb.co/nbJGPz8/kakra.jpg" },
        { id: 21, name: "ফিশ বিবিকিউ", price: "বাজারদর", image: "https://i.ibb.co/2cGv95g/chingrii.jpg" },
        { id: 35, name: "ফিশ বিবিকিউ", price: "২৫০ ৳", image: "https://i.ibb.co/XSDftQZ/fish-bbq.jpg" },
        { id: 22, name: "চিংড়ি ফ্রাই", price: "বাজারদর", image: "https://i.ibb.co/2cGv95g/chingrii.jpg" }
      ]
    }
  ];

  return (
    <div className="bg-gray-100 min-h-screen py-10">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">Our Menu</h1>
        {menuCategories.map((category, index) => (
          <div key={index} className="mb-10">
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">{category.category}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {category.items.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition duration-300"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-40 object-cover rounded-t-md mb-4"
                  />
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{item.name}</h3>
                  <p className="text-lg text-gray-600">Price: {item.price}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
