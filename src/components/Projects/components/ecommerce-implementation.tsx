import React from 'react'

const EcommerceImplementation: React.FC = () => {
  return (
    <div>
      <div className="space-y-6">
        <div className="grid gap-6">
          <div className="bg-white border border-gray-200 rounded-lg shadow-sm">
            <div className="px-6 py-4 border-b border-gray-200">
              <h2 className="text-lg font-semibold text-gray-900">
                Frontend Implementation
              </h2>
            </div>
            <div className="p-6 space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold mb-2">React Components</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Modular component architecture</li>
                    <li>• Custom hooks for state management</li>
                    <li>• Responsive navigation and mobile menu</li>
                    <li>• Product cards with interactive elements</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">State Management</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• React hooks for local state</li>
                    <li>• Context API for user authentication</li>
                    <li>• localStorage for cart persistence</li>
                    <li>• Real-time updates across components</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg shadow-sm">
            <div className="px-6 py-4 border-b border-gray-200">
              <h2 className="text-lg font-semibold text-gray-900">
                Backend & Database
              </h2>
            </div>
            <div className="p-6 space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold mb-2">Firebase Integration</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Firestore for product and user data</li>
                    <li>• Firebase Auth for secure authentication</li>
                    <li>• Real-time database synchronization</li>
                    <li>• Security rules for data protection</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Cart Persistence</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• localStorage for guest users</li>
                    <li>• Firebase sync for authenticated users</li>
                    <li>• Seamless cart transfer on login</li>
                    <li>• Cross-session persistence</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EcommerceImplementation
