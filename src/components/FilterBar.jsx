import React from "react";
import { motion } from "motion/react";
import filters from "../data/filters";

function FilterBar() {
   
    const [menu, setMenu] = React.useState("All");

    return (
        <div className="border rounded-lg border-gray-200 bg-white">
            <div className="container mx-auto px-6">
                <div className="flex items-center space-x-3 sm:space-x-4 overflow-x-auto py-3 no-scrollbar coursor-pointer">
                    {filters.map((filters, index)=>(
                        <motion.button 
                        key={filters} 
                        onClick={() => setMenu(filters)}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className={"px-4 py-1.5 rounded-full text-lg font-semibold whitespace-nowrap " + 
                            (menu === filters ? "bg-sky-600 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200")
                        }
                        >
                           {filters}
                           
                        </motion.button>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default FilterBar;