import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import BlogDetail from "../components/BlogDetail";
import blogData from "../data/blog";
import Add_comment from "../components/Add_comment";

function BlogDetailPage() {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const foundBlog = blogData.find((b) => b.id === id);
      setBlog(foundBlog);
    } catch (error) {
      console.error("Error fetching blog:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
        <div className="text-center p-8">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-lg text-gray-600 font-medium">Loading...</p>
        </div>
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-red-50 to-rose-100">
        <div className="text-center p-8">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
            <p className="text-xl text-red-600 font-semibold mb-2">Blog not found</p>
            <p className="text-gray-600">
              The blog post you're looking for doesn't exist.
            </p>
          </div>
        </div>
      </div>
    );
  }

 return (
  <div className="min-h-screen bg-[linear-gradient(to_bottom_right,theme(colors.slate.50),theme(colors.blue.50),theme(colors.emerald.50),theme(colors.indigo.100))] flex items-center justify-center px-4 py-8">

    <main className="w-full max-w-5xl"> {/* widened from 3xl to 5xl */}
      <div className="p-6 lg:p-12">
        {/* Blog Content */}
        <BlogDetail {...blog} />
        <section className="mt-16">
          <Add_comment />
        </section>
      </div>
    </main>
  </div>
);

}

export default BlogDetailPage;
