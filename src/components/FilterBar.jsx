import React from "react";

function FilterBar() {
    const filters = ["All", "Technology", "Travel", "Health", "Education", "Entertainment","Lifestyle","Trending"];

    return (
        <div className="border-t border-gray-200 bg-white">
            <div className="container mx-auto px-6">
                <div className="flex items-center space-x-3 sm:space-x-4 overflow-x-auto py-3 no-scrollbar">
                    {filters.map((filters, index)=>(
                        <button 
                        key={filters} 
                        className={"px-4 py-1.5 rounded-full text-sm font-medium whitespace-nowrap " + 
                            (index ===0 ? "bg-sky-600 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200")
                        }
                        >
                           {filters}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default FilterBar;