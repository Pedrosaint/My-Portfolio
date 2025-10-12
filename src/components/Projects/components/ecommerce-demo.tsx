import React from 'react'

const EcommerceDemo: React.FC = () => {
  return (
    <div>
          <div className="space-y-6">
                    <div className="bg-white border border-gray-200 rounded-lg shadow-sm">
                      <div className="px-6 py-4 border-b border-gray-200">
                        <h2 className="text-lg font-semibold text-gray-900">
                          Live Demo & Source Code
                        </h2>
                      </div>
                      <div className="p-6 text-center space-y-6">
                        <div className="grid md:grid-cols-2 gap-6">
                          <div className="p-6 border border-gray-200 rounded-lg">
                            <div className="text-4xl mb-4">🌐</div>
                            <h3 className="text-lg font-semibold mb-2">Live Demo</h3>
                            <p className="text-gray-600 mb-4">
                              Experience the full functionality of the e-commerce
                              application
                            </p>
                            <a
                              href="#"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center justify-center w-full px-4 py-2 text-sm font-medium text-white bg-blue-600 border border-transparent rounded-md hover:bg-blue-700"
                            >
                              🔗 View Live Demo
                            </a>
                          </div>
                          <div className="p-6 border border-gray-200 rounded-lg">
                            <div className="text-4xl mb-4">📂</div>
                            <h3 className="text-lg font-semibold mb-2">
                              Source Code
                            </h3>
                            <p className="text-gray-600 mb-4">
                              Explore the complete codebase and implementation details
                            </p>
                            <a
                              href="#"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center justify-center w-full px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50"
                            >
                              📂 View Source Code
                            </a>
                          </div>
                        </div>
      
                        <div className="bg-gray-50 rounded-lg p-6">
                          <h4 className="font-semibold mb-3">Demo Credentials</h4>
                          <div className="grid md:grid-cols-2 gap-4 text-sm">
                            <div>
                              <p className="font-medium">Admin Access:</p>
                              <p className="text-gray-600">Email: admin@store.com</p>
                              <p className="text-gray-600">Password: admin</p>
                            </div>
                            <div>
                              <p className="font-medium">User Access:</p>
                              <p className="text-gray-600">Register with any email</p>
                              <p className="text-gray-600">Or browse as guest</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
    </div>
  )
}

export default EcommerceDemo
