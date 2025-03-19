import Link from 'next/link';
import { FaSearch, FaStar, FaChartLine, FaCog } from 'react-icons/fa'; // Example icons, choose appropriate ones

export default function Home() {
  const categories = [
    { name: "Point of Sale (POS) Systems", slug: "pos-systems", icon: <FaCog size={20} className="text-blue-500 mr-2" /> }, //Added icons
    { name: "Online Ordering Platforms", slug: "online-ordering-platforms", icon: <FaCog size={20} className="text-blue-500 mr-2" /> },
    { name: "QR Menus", slug: "qr-menus", icon: <FaCog size={20} className="text-blue-500 mr-2" /> },
    { name: "Kitchen Display Systems (KDS)", slug: "kitchen-display-systems", icon: <FaCog size={20} className="text-blue-500 mr-2" /> },
    { name: "Delivery Management Software", slug: "delivery-management-software", icon: <FaCog size={20} className="text-blue-500 mr-2" /> },
    { name: "Payment Processing", slug: "payment-processing", icon: <FaCog size={20} className="text-blue-500 mr-2" /> },
    { name: "Table Reservation Systems", slug: "table-reservation-systems", icon: <FaCog size={20} className="text-blue-500 mr-2" /> },
    { name: "Inventory Management", slug: "inventory-management-software", icon: <FaCog size={20} className="text-blue-500 mr-2" /> },
    { name: "Staff Scheduling", slug: "staff-scheduling-labor-management", icon: <FaCog size={20} className="text-blue-500 mr-2" /> },
    { name: "CRM & Loyalty", slug: "crm-loyalty-programs", icon: <FaCog size={20} className="text-blue-500 mr-2" /> },
    { name: "WiFi & Network", slug: "wifi-network-infrastructure", icon: <FaCog size={20} className="text-blue-500 mr-2" /> },
    { name: "Marketing Automation", slug: "marketing-automation", icon: <FaCog size={20} className="text-blue-500 mr-2" /> },
    { name: "Analytics & Reporting", slug: "analytics-reporting", icon: <FaCog size={20} className="text-blue-500 mr-2" /> },
    { name: "Self-Ordering", slug: "self-ordering-tablets-kiosks", icon: <FaCog size={20} className="text-blue-500 mr-2" /> },
    { name: "Digital Menu Boards", slug: "digital-menu-boards", icon: <FaCog size={20} className="text-blue-500 mr-2" /> },
    { name: "Accounting & Finance", slug: "accounting-finance", icon: <FaCog size={20} className="text-blue-500 mr-2" /> },
    { name: "Robotics & Automation", slug: "robotics-automation", icon: <FaCog size={20} className="text-blue-500 mr-2" /> },
    { name: "Security Systems", slug: "security-systems", icon: <FaCog size={20} className="text-blue-500 mr-2" /> },
    { name: "Sustainability", slug: "sustainability-tools", icon: <FaCog size={20} className="text-blue-500 mr-2" /> },
    { name: "Voice Ordering", slug: "voice-ordering", icon: <FaCog size={20} className="text-blue-500 mr-2" /> }
  ];

    const featuredReviews = [
    { title: "Top 5 POS Systems for Small Restaurants", slug: "top-pos-small-restaurants", excerpt: "We compare the best POS options...", rating: 4.5 },
    { title: "Is Online Ordering Worth the Investment?", slug: "online-ordering-roi", excerpt: "A deep dive into the costs and benefits...", rating: 4 },
    { title: "The Ultimate Guide to QR Code Menus", slug: "qr-code-menu-guide", excerpt: "Everything you need to know...", rating: 5 },
  ];

  const latestNews = [
    { title: "New POS System Integrates with AI-Powered Inventory", slug: "new-pos-ai-inventory" },
    { title: "Restaurant Tech Startup Raises $50 Million in Series B Funding", slug: "restaurant-tech-funding" },
    { title: "Delivery Apps Face Increased Scrutiny Over Fees", slug: "delivery-app-fees" },
  ];



  return (
    <div className="min-h-screen bg-gray-100 font-sans">
      {/* Hero Section */}
      <div className="bg-blue-600 py-16 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Revolutionize Your Restaurant with Tech</h1>
          <p className="text-xl md:text-2xl mb-8">
            Find the perfect technology solutions to boost efficiency, enhance customer experience, and drive growth.
          </p>
          <div className="relative w-full md:w-2/3 mx-auto">
            <input
              type="text"
              placeholder="Search for software, categories, or reviews..."
              className="w-full py-3 pl-12 pr-4 text-gray-800 bg-white rounded-full shadow-md focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
            <span className="absolute left-4 top-3 text-gray-500">
              <FaSearch />
            </span>
          </div>
        </div>
      </div>

      {/* Category Section */}
      <div className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Explore Restaurant Technology Categories</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <Link
              key={category.slug}
              href={`/category/${category.slug}`}
              className="flex items-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-200 border border-gray-200"
            >
              {category.icon}
              <h3 className="text-lg font-semibold text-gray-700">{category.name}</h3>
            </Link>
          ))}
        </div>
      </div>

      {/* Featured Reviews Section */}
      <div className="bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Featured Reviews</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredReviews.map((review) => (
              <div key={review.slug} className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200">
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    <Link href={`/review/${review.slug}`}>{review.title}</Link>
                  </h3>
                  <p className="text-gray-600 mb-4">{review.excerpt}</p>
                  <div className="flex items-center text-yellow-500">
                    {Array(Math.floor(review.rating)).fill().map((_, i) => (
                      <FaStar key={i} />
                    ))}
                    {review.rating % 1 !== 0 && <FaStar className="text-yellow-500 opacity-50" />}
                    <span className="ml-2 text-gray-700">({review.rating})</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>


       {/* Latest News Section */}
      <div className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Latest News & Trends</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {latestNews.map((newsItem) => (
            <div key={newsItem.slug} className="bg-white rounded-xl shadow-md p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                <Link href={`/news/${newsItem.slug}`}>{newsItem.title}</Link>
              </h3>
            </div>
          ))}
        </div>
      </div>


      {/* Call to Action Section */}
       <div className="bg-blue-700 py-12 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Restaurant?</h2>
          <p className="text-xl mb-8">Explore our comprehensive reviews and find the perfect tech solutions today!</p>
          <Link href="/categories" className="bg-white text-blue-700 py-3 px-8 rounded-full font-semibold text-lg hover:bg-blue-100 transition-colors duration-200">
            Browse Categories
          </Link>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; {new Date().getFullYear()} Restaurant Tech Review. All rights reserved.</p>
        </div>
      </footer>

    </div>
  );
}