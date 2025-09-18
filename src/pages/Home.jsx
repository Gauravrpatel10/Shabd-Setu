import React from "react";
import FilterBar from "../components/FilterBar";
import ArticleCard from "../components/ArticleCard";
import Hero from "../components/Wellcome_Part";
import TrendingAuthors from "../components/TrendingAuthors";

import blogs from "../data/blog";
import Latest_Blogs from "../components/Latest_Blogs";

function Home() {


    return (
        <div >
            
            
            <Hero />

            {/* Blog preview section */}
            <main className="container bg-transparent mx-auto px-6 py-12 grid grid-cols-1 lg:grid-cols-3 gap-10">
               
                {/* Blog Feed */}
                <section className="lg:col-span-2 space-y-8">
                    <Latest_Blogs blogs={blogs} />
                </section>

                {/* Sidebar */}
                <section className="lg:col-span-1 space-y-8">
                    <TrendingAuthors />
                </section>
            </main>

        </div>

    );
}

export default Home;
