import React from 'react'

const EcommerceScreenshot: React.FC = () => {
  return (
    <div>
      <div className="space-y-6">
        <div className="bg-white border border-gray-200 rounded-lg shadow-sm">
          <div className="px-6 py-4 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-gray-900">
              Application Screenshots
            </h2>
          </div>
          <div className="p-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <img
                  src="/ecommerce-homepage-products.png"
                  alt="Homepage with product grid"
                  className="w-full rounded-lg border border-gray-200"
                />
                <p className="text-sm text-gray-600 text-center">
                  Homepage with product catalog
                </p>
              </div>
              <div className="space-y-4">
                <img
                  src="/shopping-cart-checkout-interface.jpg"
                  alt="Shopping cart and checkout"
                  className="w-full rounded-lg border border-gray-200"
                />
                <p className="text-sm text-gray-600 text-center">
                  Shopping cart and checkout flow
                </p>
              </div>
              <div className="space-y-4">
                <img
                  src="/admin-dashboard-analytics.jpg"
                  alt="Admin dashboard"
                  className="w-full rounded-lg border border-gray-200"
                />
                <p className="text-sm text-gray-600 text-center">
                  Admin dashboard with analytics
                </p>
              </div>
              <div className="space-y-4">
                <img
                  src="/mobile-responsive-ecommerce-design.jpg"
                  alt="Mobile responsive design"
                  className="w-full rounded-lg border border-gray-200"
                />
                <p className="text-sm text-gray-600 text-center">
                  Mobile responsive design
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EcommerceScreenshot
