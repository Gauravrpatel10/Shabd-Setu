import React, { useState } from 'react';
import commentsData from '../data/comments';
import { Heart, MessageCircle, Share2 } from "lucide-react";


export default function CommentSection() {
    const [activeInput, setActiveInput] = useState(false);// to track if the input box is active
    const [commentText, setCommentText] = useState('');// to track the text in the input box
    const [commentsList, setCommentsList] = useState([...commentsData]);// to track the list of commentsList

    const handleSubmit = () => {
        if (commentText.trim()) {
            const newComment = {
                id: commentsList.length + 1,
                author: 'You',
                avatar: '/api/placeholder/40/40',
                time: 'Just now',
                text: commentText
            };
            setCommentsList([...commentsList, newComment]);
            setCommentText('');
            setActiveInput(false);
        }
    };

    return (
        <div className="max-w-5xl mx-auto p-6 bg-transparent">
            {/* Header */}
            <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Join the Discussion</h2>
                <p className="text-gray-600">Share your thoughts and engage with other readers of <span className='text-blue-500 font-semibold '>Shabd-Setu</span></p>
            </div>

            {/* Comment Input Section */}
            <div className="mb-8 bg-white/90 backdrop-blur-sm rounded-xl p-6 border border-gray-200 shadow-lg shadow-blue-100/50">
                <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center flex-shrink-0 shadow-md shadow-indigo-200/60">
                        <span className="text-white font-medium text-sm">You</span>
                    </div>

                    <div className="flex-1">
                        {!activeInput ? (
                            <button
                                onClick={() => setActiveInput(true)}
                                className="w-full text-left p-4 bg-white/80 border border-gray-300 rounded-lg text-gray-500 hover:border-blue-300 hover:bg-blue-50 shadow-sm hover:shadow-md transition-all duration-300"
                            >
                                Share your thoughts on this article...
                            </button>
                        ) : (
                            <div className="space-y-4">
                                <textarea
                                    value={commentText}
                                    onChange={(e) => setCommentText(e.target.value)}
                                    className="w-full p-4 bg-white/90 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none transition-all duration-200 text-gray-900 shadow-sm focus:shadow-md"
                                    rows="4"
                                    placeholder="Write a thoughtful comment..."
                                    autoFocus
                                />
                                <div className="flex justify-end gap-3">
                                    <button
                                        onClick={() => {
                                            setActiveInput(false);
                                            setCommentText('');
                                        }}
                                        className="px-4 py-2 text-gray-600 hover:text-gray-800 font-medium transition-colors duration-200"
                                    >
                                        Cancel
                                    </button>
                                    <button
                                        onClick={handleSubmit}
                                        disabled={!commentText.trim()}
                                        className="px-6 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg hover:from-blue-700 hover:to-indigo-700 disabled:bg-gray-300 disabled:cursor-not-allowed font-medium shadow-md hover:shadow-lg transition-all duration-300"
                                    >
                                        Post Comment
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>


            {/* CommentsList List */}
            <div className="space-y-6">
                {commentsList.map((comment) => (
                    <div key={comment.id} className="bg-transparent p-6">
                        <div className="flex items-start gap-4">
                            {/* Avatar */}
                            <div className="w-12 h-12 rounded-full flex items-center justify-center shadow-md shadow-blue-100/50">
                                <img
                                    className="rounded-full object-cover ring-2 ring-blue-200/60"
                                    src={comment.profile}
                                    alt={comment.author}
                                    onError={(e) => {
                                        e.target.src = "/NODP.jpg"; // fallback avatar
                                    }}
                                />
                            </div>

                            {/* Comment Card */}
                            <div className="bg-white/90 backdrop-blur-sm flex-1 min-w-0 border border-gray-200 rounded-xl p-4 shadow-sm hover:shadow-lg transition-shadow duration-300">
                                <div className="flex items-center justify-between mb-2">
                                    <h4 className="font-semibold text-gray-900">{comment.author}</h4>
                                    <span className="text-sm text-gray-500">{comment.time}</span>
                                </div>

                                <p className="text-gray-700 leading-relaxed">{comment.text}</p>

                                {/* Actions */}
                                <div className="flex items-center border-t border-gray-200 gap-4 mt-4 pt-4">
                                    <button className="flex items-center gap-2 text-gray-500 hover:text-red-600 hover:bg-red-50 px-3 py-2 rounded-lg transition-all duration-200 transform hover:scale-105 shadow-sm hover:shadow-md">
                                        <Heart className="w-5 h-5 cursor-pointer hover:text-red-500" />
                                        <span className="text-sm font-medium">Like</span>
                                    </button>

                                    <button className="flex items-center gap-2 text-gray-500 hover:text-blue-600 hover:bg-blue-50 px-3 py-2 rounded-lg transition-all duration-200 transform hover:scale-105 shadow-sm hover:shadow-md">
                                        <MessageCircle className="w-5 h-5 cursor-pointer hover:text-blue-500" />
                                        <span className="text-sm font-medium">Reply</span>
                                    </button>

                                    <button className="flex items-center gap-2 text-gray-500 hover:text-green-600 hover:bg-green-50 px-3 py-2 rounded-lg transition-all duration-200 transform hover:scale-105 shadow-sm hover:shadow-md">
                                        <Share2 className="w-5 h-5 cursor-pointer hover:text-green-500" />
                                        <span className="text-sm font-medium">Share</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Load More */}
            <div className="mt-8 text-center">
                <button className="px-6 py-3 text-blue-600 hover:text-blue-700 font-medium transition-colors duration-200">
                    Load more commentsList
                </button>
            </div>
        </div>
    );
}