const Sitebar = () => {
  const suggestedUsers = [
    {
      name: "Mushtariy",
      username: "@Mushtar565266",
      avatar: "/placeholder.svg?height=40&width=40"
    },
    {
      name: "Shuhratbek",
      username: "@mrshukhrat",
      avatar: "/placeholder.svg?height=40&width=40"
    }
  ];

  const trends = [
    {
      category: "Trending in Germany",
      title: "Revolution",
      tweets: "50.4K Tweets"
    },
    {
      category: "Trending in Germany",
      title: "Revolution",
      tweets: "40.4K Tweets"
    },
    {
      category: "Trending in Germany",
      title: "Revolution",
      tweets: "30.4K Tweets"
    }
  ];

  return (
    <div className="w-[350px] h-screen px-4 py-2 sticky top-0">
      <div className="relative mb-4">
        <input
          type="text"
          placeholder="Search Twitter"
          className="w-full bg-gray-100 rounded-full py-2 px-4 pl-12 focus:outline-none focus:bg-white focus:ring-1 focus:ring-blue-400"
        />
        <svg
          className="absolute left-4 top-3 h-4 w-4 text-gray-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </div>

      <div className="bg-gray-50 rounded-2xl mb-4">
        <h2 className="font-bold text-xl p-4">You might like</h2>
        {suggestedUsers.map((user, index) => (
          <div key={index} className="flex items-center justify-between p-4 hover:bg-gray-100">
            <div className="flex items-center">
              <img
                src={user.avatar || "/placeholder.svg"}
                alt={user.name}
                className="w-10 h-10 rounded-full"
              />
              <div className="ml-3">
                <div className="font-bold">{user.name}</div>
                <div className="text-gray-500">{user.username}</div>
              </div>
            </div>
            <button className="bg-black text-white rounded-full px-4 py-1 font-bold text-sm hover:bg-gray-800">
              Follow
            </button>
          </div>
        ))}
        <div className="p-4 text-blue-500 hover:bg-gray-100 rounded-b-2xl cursor-pointer">
          Show more
        </div>
      </div>

      <div className="bg-gray-50 rounded-2xl">
        <h2 className="font-bold text-xl p-4">Trends for you</h2>
        {trends.map((trend, index) => (
          <div key={index} className="p-4 hover:bg-gray-100 cursor-pointer">
            <div className="text-sm text-gray-500">{trend.category}</div>
            <div className="font-bold">{trend.title}</div>
            <div className="text-sm text-gray-500">{trend.tweets}</div>
          </div>
        ))}
        <div className="p-4 text-blue-500 hover:bg-gray-100 rounded-b-2xl cursor-pointer">
          Show more
        </div>
      </div>

      <div className="mt-4 px-4 text-sm text-gray-500">
        <span className="mr-2 hover:underline cursor-pointer">Terms of Service</span>
        <span className="mr-2 hover:underline cursor-pointer">Privacy Policy</span>
        <span className="mr-2 hover:underline cursor-pointer">Cookie Policy</span>
        <span className="mr-2 hover:underline cursor-pointer">Accessibility</span>
        <span className="mr-2 hover:underline cursor-pointer">Ads info</span>
        <span className="hover:underline cursor-pointer">More</span>
        <div className="mt-1">© 2024 X Corp.</div>
      </div>
    </div>
  );
};

export default Sitebar;