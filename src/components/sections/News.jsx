import { blogPosts } from "@/data/mockData";
import { Link } from "react-router-dom";

export default function News() {
  const featuredPost = blogPosts.find(post => post.isFeatured);
  const sideArticles = blogPosts.filter(post => !post.isFeatured).slice(0, 2);

  return (
    <section className="py-10 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 ">
        <div className="text-center mb-16">
          <h2 style={{fontFamily:'libre baskerville'}} className="text-5xl font-semibold text-primary mb-4">News and Perspectives</h2>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Featured Article */}
          {featuredPost && (
            <div className="group cursor-pointer">
              <Link to={`/blog/${featuredPost.slug}`}>
                <div className="relative overflow-hidden ">
                  <img 
                    src={featuredPost.image} 
                    alt={featuredPost.title} 
                    className="w-full h-90 object-cover group-hover:scale-105 transition-transform duration-300" 
                  />
                  <div className="absolute   bottom-0 left-0 m-3 right-0 bg-secondary px-8 py-6 ">
                    <div className="mb-2">
                      <span className="bg-orange-600 text-secondary px-3 py-1 text-sm font-medium ">
                        {featuredPost.category}
                      </span>
                    </div>
                    <h3 className="text-2xl font-semibold hover:text-[#c58e46] trabsition-color duration-500 text-primary mb-2">{featuredPost.title}</h3>
                    <p className="text-gray-700 text-sm mb-2">
                      {featuredPost.publishedAt.toLocaleDateString('en-US', { 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                      })}
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      {featuredPost.excerpt}
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          )}

          {/* Side Articles */}
          <div className="space-y-6">
            {sideArticles.map((article) => (
              <div key={article.id} className="flex gap-4 group cursor-pointer">
                <Link to={`/blog/${article.slug}`} className="flex gap-4 w-full">
                  <div className="flex-shrink-0 overflow-hidden ">
                    <img 
                      src={article.image} 
                      alt={article.title} 
                      className="w-[20vw] h-[30vh] object-cover  group-hover:scale-105 transition-transform duration-300" 
                    />
                  </div>
                  <div className="flex-1">
                    <div className="mb-2">
                      <span className="bg-orange-600 text-secondary px-2 py-1 text-xs font-medium ">
                        {article.category}
                      </span>
                    </div>
                    <h4 className="text-lg font-medium text-primary mb-1 group-hover:text-[#c58e46] transition-colors duration-200">
                      {article.title}
                    </h4>
                    <p className="text-sm text-gray-500 mb-1">
                      {article.publishedAt.toLocaleDateString('en-US', { 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                      })}
                    </p>
                    <p className="text-sm text-text-gray">{article.excerpt}</p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}