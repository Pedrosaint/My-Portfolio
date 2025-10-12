import React from 'react'

const EcommereceChallenges: React.FC = () => {
    
  const challenges = [
    {
      challenge: "Handling cart persistence across login/logout sessions",
      solution:
        "Implemented hybrid approach: localStorage for guest users, Firebase sync for authenticated users",
      impact: "Seamless shopping experience regardless of authentication state",
    },
    {
      challenge: "Creating responsive UI with complex product grid layouts",
      solution:
        "Utilized Tailwind's responsive grid system with breakpoint-specific columns",
      impact: "Optimal viewing experience across all device sizes",
    },
    {
      challenge: "Securing admin features from unauthorized access",
      solution:
        "Applied role-based authentication with Firebase security rules and frontend guards",
      impact: "Protected admin functionality while maintaining user experience",
    },
  ];
  
  return (
    <div>
      <div className="space-y-6">
        <div className="bg-white border border-gray-200 rounded-lg shadow-sm">
          <div className="px-6 py-4 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-gray-900 flex items-center">
              🔧 Challenges & Solutions
            </h2>
          </div>
          <div className="p-6">
            <div className="space-y-6">
              {challenges.map((item, index) => (
                <div
                  key={index}
                  className="border border-gray-200 rounded-lg p-6"
                >
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-red-600 mb-2">
                        Challenge:
                      </h4>
                      <p className="text-gray-600">{item.challenge}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-green-600 mb-2">
                        Solution:
                      </h4>
                      <p className="text-gray-600">{item.solution}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-blue-600 mb-2">
                        Impact:
                      </h4>
                      <p className="text-gray-600">{item.impact}</p>
                    </div>
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

export default EcommereceChallenges
