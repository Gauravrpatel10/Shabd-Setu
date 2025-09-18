import React from "react";
import { Heart, MessageCircle, Share2, Bot, Bookmark } from "lucide-react";
import { useNavigate } from "react-router-dom";

const ArticleCard = ({ blogs }) => {
    const { id, thumbnail, title, description, author, profile, createdAt, filter } = blogs;
    const navigation = useNavigate();

    return (
        <div
           
            className="bg-white rounded-xl border border-gray-200 shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer group overflow-hidden"
        >
            <div  onClick={() => navigation(`/blog/${id}`)}
            className="flex h-48 ">
                {/* Left side - Content */}
                <div className="flex-1 p-7 flex flex-col justify-between pr-5">
                    {/* Category badge */}
                    <div className="mb-2">
                        <span className="px-2 py-1 rounded-full bg-sky-50 text-sky-700 text-xs font-medium">
                            {filter}
                        </span>
                    </div>
                    <div>
                        {/* Title */}
                        <h3 className="text-3xl font-bold mb-2 text-black leading-snug line-clamp-2">
                            {title}
                        </h3>

                        {/* Description */}
                        <p
                            className="text-gray-600 text-sm leading-relaxed line-clamp-2"
                            dangerouslySetInnerHTML={{ __html: description.slice(0, 240) + "..." }}
                        ></p>

                        {/* Author info and stats */}
                        <div className="flex items-center justify-between mb-2 pb-3">
                            <div className="flex items-center">
                                <img
                                    className="w-10 h-10 rounded-full mr-2 border border-gray-200"
                                    src={profile}
                                    alt="Author"
                                />
                                <div className="flex items-center space-x-2 text-xs text-gray-500">
                                    <span className="font-medium text-sm text-gray-700">{author}</span>
                                    <span>•</span>
                                    <span>{createdAt}</span>
                                    <span>•</span>
                                    <span className="text-green-500 font-semibold">2.6K</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right side - Image */}
                <div className="relative w-36 h-36 flex-shrink-0 overflow-hidden rounded-lg my-6 mr-6">
                    <img
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        src={thumbnail}
                        alt={title}
                    />
                </div>
            </div>

            {/* Bottom action bar */}
            <div className="px-7 py-3 border-t border-gray-100 mt-3">
                <div className="flex items-center justify-between">
                    {/* Left side - Summary button */}
                    <button className="flex items-center space-x-1 text-gray-600 hover:text-gray-900 transition-colors">
                        <Bot className="w-5 h-5" />
                        <span className="font-medium text-sm">Summary</span>
                    </button>

                    {/* Right side - Action buttons */}
                    <div className="flex items-center space-x-3">
                        <Heart className="w-5 h-5 cursor-pointer text-gray-400 hover:text-gray-900 transition-colors" />
                        <MessageCircle className="w-5 h-5 cursor-pointer text-gray-400 hover:text-gray-900 transition-colors" />
                        <Share2 className="w-5 h-5 cursor-pointer text-gray-400 hover:text-gray-900 transition-colors" />
                        <Bookmark className="w-5 h-5 cursor-pointer text-gray-400 hover:text-gray-900 transition-colors" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ArticleCard;
