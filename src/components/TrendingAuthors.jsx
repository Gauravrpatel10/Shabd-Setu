import React from 'react'
import authors from '../data/authors'

const TrendingAuthors = () => {
    // Show only first 6 authors for
    const displayedAuthors = authors.slice(0, 6);

    return (
        <div className='bg-white rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-300 overflow-hidden max-w-sm mx-auto lg:max-w-none'>
            {/* Header */}
            <div className='p-4 border-b border-gray-100'>
                <h3 className='text-base font-semibold text-gray-900 leading-tight'>
                    Discover popular writers on{' '}
                    <span className='text-blue-600 font-bold'>Shabd-Setu</span>
                </h3>
            </div>

            {/* One Authors List like instagram */}
            <div className='p-4'>
                <div className='space-y-3'>
                    {displayedAuthors.map((author, index) => (
                        <div key={index} className='flex items-center justify-between gap-3 group'>
                            {/* Avatar + Info */}
                            <div className='flex items-center gap-3 min-w-0 flex-1'>
                                <div className='flex-shrink-0'>
                                    <img
                                        className="w-10 h-10 rounded-full object-cover ring-2 ring-gray-100 group-hover:ring-blue-200 transition-colors duration-200"
                                        src={author.profile_pic} 
                                        alt={author.name}
                                    />
                                </div>
                                <div className='min-w-0 flex-1'>
                                    <p className='text-sm font-semibold text-gray-900 truncate group-hover:text-blue-600 transition-colors duration-200'>
                                        {author.name}
                                    </p>
                                    <p className='text-xs text-gray-600 mt-0.5 truncate'>
                                        {author.desc}
                                    </p>
                                </div>
                            </div>

                            {/* Follow Button */}
                            <div className='flex-shrink-0'>
                                <button className='bg-blue-600 text-white px-3 py-1.5 rounded-full text-xs font-semibold hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-200 transform hover:scale-105'>
                                    Follow
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Footer CTA */}
            <div className='px-4 pb-4'>
                <button className='w-full text-blue-600 text-sm font-medium py-2.5 rounded-lg hover:bg-blue-50 transition-colors duration-200 border border-blue-200 hover:border-blue-300'>
                    View All Writers
                </button>
            </div>
        </div>
    )
}

export default TrendingAuthors