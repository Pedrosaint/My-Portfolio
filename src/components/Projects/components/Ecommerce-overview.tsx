const EcommerceOverview = () => {
  return (
    <div className="space-y-6">
      <div className="bg-gray-900 border border-gray-700 rounded-lg">
        <div className="px-6 py-4 border-b border-gray-700">
          <h2 className="text-lg font-semibold">🎯 Project Overview</h2>
        </div>
        <div className="p-6 grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-lg font-semibold mb-3">What it does</h3>
            <p className="text-claude-text-muted leading-relaxed">
              A full-featured online store with product catalog, shopping cart,
              user authentication, and admin dashboard. Users can browse
              products, add items to cart, and complete purchases while
              administrators can manage inventory and track orders.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-3">Why I built it</h3>
            <p className="text-claude-text-muted leading-relaxed">
              Created as a portfolio project to demonstrate full-stack
              development skills, modern React patterns, and real-world
              e-commerce functionality.
            </p>
          </div>
        </div>
          <div className="p-6 bg-gray-800 border border-gray-700 rounded-lg">
            <h3 className="text-lg font-semibold mb-2 text-gray-100">Overview</h3>
            <p className="text-claude-text-muted">A full-featured e-commerce app built with React.</p>
          </div>
    </div>
    </div>
  );
};

export default EcommerceOverview;
