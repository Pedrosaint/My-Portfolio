import React from 'react'

const EcommerceFeatures: React.FC = () => {
      const features = [
        {
          title: "User Authentication",
          description:
            "Login/Register with Firebase Auth including admin role management",
          icon: "👤",
          implemented: true,
        },
        {
          title: "Product Listing",
          description:
            "Dynamic product catalog with categories (Menswear, Womenswear, Electronics)",
          icon: "📦",
          implemented: true,
        },
        {
          title: "Search & Filters",
          description:
            "Real-time product search with category and price filtering",
          icon: "🔍",
          implemented: true,
        },
        {
          title: "Shopping Cart",
          description:
            "Add to cart with persistence across refresh/logins using localStorage",
          icon: "🛒",
          implemented: true,
        },
        {
          title: "Checkout Flow",
          description:
            "Complete checkout process with payment form and order confirmation",
          icon: "💳",
          implemented: true,
        },
        {
          title: "Admin Dashboard",
          description:
            "Add/update/remove products, view sales analytics and order management",
          icon: "🛡️",
          implemented: true,
        },
        {
          title: "Responsive Design",
          description:
            "Mobile-first design that works seamlessly on desktop and mobile devices",
          icon: "📱",
          implemented: true,
        },
      ];
  return (
    <div>
      <div className="space-y-6">
        <div className="bg-white border border-gray-200 rounded-lg shadow-sm">
          <div className="px-6 py-4 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-gray-900 flex items-center">
              ⭐ Key Features
            </h2>
          </div>
          <div className="p-6">
            <div className="grid md:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-3 p-4 border border-gray-200 rounded-lg"
                >
                  <div className="flex-shrink-0">
                    {feature.implemented ? (
                      <span className="text-green-500 text-lg">✅</span>
                    ) : (
                      <div className="w-5 h-5 border-2 border-gray-400 rounded-full" />
                    )}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <span className="text-lg">{feature.icon}</span>
                      <h3 className="font-semibold">{feature.title}</h3>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EcommerceFeatures
