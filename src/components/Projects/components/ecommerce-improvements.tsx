import React from 'react'

const EcommerceImprovements: React.FC = () => {  const futureImprovements = [
  "Add wishlist/favorites functionality for better user engagement",
  "Implement order tracking system with real-time status updates",
  "Enhanced analytics dashboard with sales charts and user insights",
  "Dark mode toggle for improved accessibility",
  "Payment integration with Stripe/PayPal for real transactions",
  "Product reviews and rating system",
  "Email notifications for order confirmations",
];


  return (
    <div>
      <div className="space-y-6">
        <div className="bg-white border border-gray-200 rounded-lg shadow-sm">
          <div className="px-6 py-4 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-gray-900 flex items-center">
              💡 Future Improvements
            </h2>
          </div>
          <div className="p-6">
            <div className="grid md:grid-cols-2 gap-4">
              {futureImprovements.map((improvement, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-3 p-4 border border-gray-200 rounded-lg"
                >
                  <span className="text-blue-600 flex-shrink-0 mt-0.5">→</span>
                  <p className="text-gray-600">{improvement}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EcommerceImprovements
