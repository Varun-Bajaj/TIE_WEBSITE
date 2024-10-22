import React from "react";
import "./Blogs.css";
import blogImage from "../../Images/blogimg.png"; 
import post from "../../Images/post.png";

const Blogs = ({ navigate }) => {
  // Function to handle navigation to postpage1
  const handleNavigateToPostPage = () => {
    navigate("/postpage1"); // Navigate to postpage1 when Learn More is clicked
  };

  return (
    <div className="blogs-container">
      <div className="featured-article">
        <div className="article-content">
          <h2>Featured Article</h2>
          <h3>
            New resources to help you get work <span>Faster</span>
          </h3>
          <p>
            Over the past few months, we've added several new features to our
            solutions to help any business get paid faster and streamline their
            collection workflows.
          </p>
          <button>
            Read More <span>→</span>
          </button>
        </div>
        <div className="blog-image">
          <img src={blogImage} alt="People working in an office" />
        </div>
      </div>

      <h2 className="all-posts-title">
        All <span>Posts</span>
      </h2>
      <div className="blog-grid">
        {[...Array(6)].map((_, index) => (
          <div className="blog-card" key={index}>
            <img src={post} alt={`Blog ${index + 1}`} />
            <div className="blog-card-content">
              <h3>Modernizing platforms to support a brand expansion</h3>
              <p>
                From streamlining tasks to creating personalized customer
                interactions, we help you make your operations smoother...
              </p>
              {/* Add onClick to Learn More button */}
              <button
                className="learn-more"
                onClick={handleNavigateToPostPage} // Use navigate to go to postpage1
              >
                Learn More <span>→</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
