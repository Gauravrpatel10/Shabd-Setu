import React from "react";
import { Heart, MessageCircle, Share2, Bookmark } from "lucide-react";
import styles from "./BlogDetail.module.css";

function BlogDetail({ thumbnail, title, subTitle, description, author, profile, updatedAt, filter }) {
    return (
        <article className="w-full bg-transparent max-w-4xl flex flex-col items-center justify-center mx-auto">
            {/* Blog Header */}
            <header className="p-4 sm:p-6 lg:p-8 text-center">
                {/* Category Tag */}
                <div className="mb-4">
                    <span className="inline-block bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 text-white text-ms font-semibold px-5 py-2 rounded-full shadow-md hover:scale-105 transition-transform">
                        {filter}
                    </span>
                </div>


                {/* Blog Title */}
                <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold mb-4 leading-snug">
                    <span className="bg-gradient-to-r from-slate-800 via-blue-900 to-indigo-900 bg-clip-text text-transparent">
                        {title}
                    </span>
                </h1>
                {/* Blog Subtitle */}
                {subTitle && (
                    <p className="text-lg sm:text-xl text-gray-600 mb-6 max-w-2xl mx-auto">
                        {subTitle}
                    </p>
                )}

                {/* Author Info */}
                <div className="flex items-center justify-center gap-4 mt-6">
                    <img
                        className="w-12 h-12 sm:w-14 sm:h-14 rounded-full object-cover ring-4 ring-blue-200/50 shadow-lg"
                        src={profile}
                        alt={author}
                    />
                    <div className="text-left">
                        <p className="text-lg sm:text-xl font-bold text-gray-900">{author}</p>
                        <p className="text-sm text-gray-600 mt-1">
                            <span className="font-medium">{updatedAt}</span>
                            <span className="mx-2 text-gray-400">•</span>
                            <span className="text-green-600 font-semibold">1.2k Reads</span>
                        </p>
                    </div>
                </div>
            </header>

            <div className="bg-white/70 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20">

                {/* Blog Thumbnail */}
                <div className="mb-8 mt-8 px-4 sm:px-6 lg:px-8">
                    <div className="relative overflow-hidden rounded-2xl bg-gray-100 shadow-lg aspect-video">
                        <img
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 ease-out"
                            src={thumbnail}
                            alt={title}
                        />
                    </div>
                </div>


                {/* Blog Content */}
                <div className="px-4 sm:px-6 lg:px-8">
                    <div
                        className={`${styles["blog-content"]} prose prose-lg max-w-none`}
                        dangerouslySetInnerHTML={{ __html: description }}
                    />
                </div>

                {/* Engagement Section */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-6 mt-12 mb-10 px-4 sm:px-6 lg:px-8">
                    {/* Buttons */}
                    <div className="flex flex-wrap gap-3 justify-center">
                        <button className="group flex items-center gap-3 px-5 py-3 bg-red-50 rounded-full hover:bg-red-100 transition-all border border-red-100">
                            <Heart className="w-5 h-5 text-red-500 group-hover:scale-110 transition-transform" />
                            <span className="text-sm font-semibold text-gray-700">1.3k</span>
                        </button>
                        <button className="group flex items-center gap-3 px-5 py-3 bg-blue-50 rounded-full hover:bg-blue-100 transition-all border border-blue-100">
                            <MessageCircle className="w-5 h-5 text-blue-500 group-hover:scale-110 transition-transform" />
                            <span className="text-sm font-semibold text-gray-700">1.3k</span>
                        </button>
                        <button className="group flex items-center gap-3 px-5 py-3 bg-green-50 rounded-full hover:bg-green-100 transition-all border border-green-100">
                            <Share2 className="w-5 h-5 text-green-500 group-hover:scale-110 transition-transform" />
                            <span className="text-sm font-semibold text-gray-700">Share</span>
                        </button>
                    </div>
                    <button className="group flex items-center gap-3 px-5 py-3 bg-purple-50 rounded-full hover:bg-purple-100 transition-all border border-purple-100">
                        <Bookmark className="w-5 h-5 text-purple-500 group-hover:scale-110 transition-transform" />
                        <span className="text-sm font-semibold text-gray-700">Save</span>
                    </button>
                </div>
            </div>
        </article>
    );
}

export default BlogDetail;
