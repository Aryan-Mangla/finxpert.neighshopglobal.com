import React from 'react';
import './Blog.css';

const blogPosts = [
  {
    id: 1,
    title: "Mastering Your Personal Finances in 2026",
    category: "Financial Planning",
    date: "April 4, 2026",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=800",
    excerpt: "Discover the top strategies for managing your money, reducing debt, and building wealth in the current economic landscape."
  },
  {
    id: 2,
    title: "Why Mutual Funds are Your Best Friend for Long-term Growth",
    category: "Investments",
    date: "April 2, 2026",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
    excerpt: "A deep dive into how mutual funds work and why they should be a core part of your investment portfolio."
  },
  {
    id: 3,
    title: "Navigating the Complex World of Health Insurance",
    category: "Insurance",
    date: "March 30, 2026",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=800",
    excerpt: "Everything you need to know about choosing the right health insurance plan for you and your family."
  }
];

const Blog = () => {
  return (
    <section id="blog" className="blog section">
      <div className="container">
        <div className="blog-header center animate-fade-up">
          <span className="subtitle">FINXPERT INSIGHTS</span>
          <h2 className="section-heading">Latest from our <span className="accent">Blog</span></h2>
          <p className="section-subtext">Expert advice and insights to help you make better financial decisions.</p>
        </div>
        <div className="blog-grid">
          {blogPosts.map((post, index) => (
            <div key={post.id} className={`blog-card animate-fade-up delay-${index + 1}`}>
              <div className="blog-image">
                <img src={post.image} alt={post.title} />
                <span className="blog-category">{post.category}</span>
              </div>
              <div className="blog-content">
                <div className="blog-meta">
                  <span>{post.date}</span>
                </div>
                <h3>{post.title}</h3>
                <p>{post.excerpt}</p>
                <a href={`/blog/${post.id}`} className="read-more">Read More <i className="arrow-right"></i></a>
              </div>
            </div>
          ))}
        </div>
        <div className="blog-cta animate-fade-up delay-4">
          <button className="btn-secondary">View All Insights</button>
        </div>
      </div>
    </section>
  );
};

export default Blog;
