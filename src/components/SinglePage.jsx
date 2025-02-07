import React from "react";
import { useParams } from "react-router-dom";
import { blogPosts } from "./Blog";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faTwitter, faLinkedinIn } from "@fortawesome/free-brands-svg-icons"; // Brand Icons
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";  // Back Arrow Icon
import '../style/singlepage.css'
function SinglePage(){
    const {id} =useParams();

    const blog=blogPosts.find((blog)=> blog.id==id);

    if (!blog) {
        return <div className="pagecontainer">Blog post not found</div>;
    }

    return(
        <div className="pagecontainer">
            <h1 className="heading">{blog.title}</h1>

            <img src={blog.image} alt={blog.title} />

            <div className="first-paragraph">
                <p>{blog.conts}</p>
                <img src={blog.image4}/>
            </div>
            
            {blog.prom && (
                <blockquote className="quote">
                  <p>{blog.prom}</p>
                </blockquote>
              )}
               <div className="image-grid">
                    {blog.image2 && (
                        <div className="image-grid-item">
                            <img src={blog.image2} alt="Related" />
                        </div>
                    )}
                    {blog.image3 && (
                        <div className="image-grid-item">
                            <img src={blog.image3} alt="Additional" />
                        </div>
                    )}
                </div>
            {blog.cont && (
                <div>
                    <p>{blog.cont}</p>
                </div>
              )}

            <div className="share-section">
                <div className="share-label">SHARE:</div>
                <div className="social-icons">
                    <a href="#" aria-label="Facebook"><FontAwesomeIcon icon={faFacebookF} /></a>
                    <a href="#" aria-label="Twitter"><FontAwesomeIcon icon={faTwitter} /></a>
                    <a href="#" aria-label="LinkedIn"><FontAwesomeIcon icon={faLinkedinIn} /></a>
                </div>
            </div>

            <div className="article-navigation">
              <FontAwesomeIcon icon={faArrowLeft} style={{ marginRight: "5px" }} />  
              <a href="#">Previous: Previous Article Title</a>
            </div>
        </div>
    );
}

export default SinglePage;