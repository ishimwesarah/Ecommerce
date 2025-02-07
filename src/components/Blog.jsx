import React from 'react';
import '../style/Blog.css';
import image1 from '../assets/blog1.jpg'
import image2 from '../assets/blog2.jpg'
import image3 from '../assets/blog3.jpg'
import image4 from '../assets/blog4.jpg'
import image5 from '../assets/blog5.jpg'
import image6 from '../assets/blog6.jpg'
import image7 from '../assets/1blog.jpg'
import image8 from '../assets/12blog.jpg'
import image9 from '../assets/123blog.jpg'
import { useNavigate } from "react-router-dom";

export const blogPosts = [
  {
    id: 1,
    image:image1,
    title: 'Sed magna dui, dignissim id felis vitae, consectetur',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum porta elit [...]',
    prom:'Maecenas in est at neque feugiat mattis. Praesent vel pellentesque lorem. Fusce sit amet sollicitudin metus. Nullam vitae purus imperdiet, consequat eros id, rhoncus orci. Sed facilisis convallis lectus a porta. Sed magna dui, dignissim id felis vitae, consectetur consectetur tellus. Vestibulum congue tellus eu ipsum finibus, id vulputate mi dignissim.',
    image2: image7,
    image3: image8,
    image4: image9,
    conts: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum porta elit a porttitor mattis. Pellentesque sit amet fringilla mauris. Cras eu faucibus lorem. Integer mattis dolor eu feugiat finibus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Phasellus ut metus ac nunc tristique pellentesque vel auctor libero.',
    cont: 'Nulla facilisi. Praesent diam leo, dapibus ultricies porta in, tincidunt eget augue. Curabitur rutrum maximus lacus, ut scelerisque ipsum porttitor et. In non fringilla justo. Pellentesque venenatis suscipit lacus. Sed non laoreet elit. Fusce vel tellus vulputate, dignissim turpis sit amet, aliquet mi. Etiam elementum, massa et fermentum viverra, odio ipsum gravida metus, at interdum tellus est eget mi.'
  },
  {
    id: 2,
    image: image2,
    image2: image7,
    image3: image8,
    image4: image9,
    prom:'Maecenas in est at neque feugiat mattis. Praesent vel pellentesque lorem. Fusce sit amet sollicitudin metus. Nullam vitae purus imperdiet, consequat eros id, rhoncus orci. Sed facilisis convallis lectus a porta. Sed magna dui, dignissim id felis vitae, consectetur consectetur tellus. Vestibulum congue tellus eu ipsum finibus, id vulputate mi dignissim.',
    title: 'Fusce suscipit risus tempor, blandit urna at, laoreet ex',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum porta elit [...]',
    conts: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum porta elit a porttitor mattis. Pellentesque sit amet fringilla mauris. Cras eu faucibus lorem. Integer mattis dolor eu feugiat finibus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Phasellus ut metus ac nunc tristique pellentesque vel auctor libero.',
    cont: 'Nulla facilisi. Praesent diam leo, dapibus ultricies porta in, tincidunt eget augue. Curabitur rutrum maximus lacus, ut scelerisque ipsum porttitor et. In non fringilla justo. Pellentesque venenatis suscipit lacus. Sed non laoreet elit. Fusce vel tellus vulputate, dignissim turpis sit amet, aliquet mi. Etiam elementum, massa et fermentum viverra, odio ipsum gravida metus, at interdum tellus est eget mi.'
  },
  {
    id: 3,
    image: image3 ,
    image2: image7,
    image3: image8,
    image4: image9,
    title: 'Pellentesque varius, diam vitae mattis luctus, mi mi cursus',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum porta elit [..]',
    prom:'Maecenas in est at neque feugiat mattis. Praesent vel pellentesque lorem. Fusce sit amet sollicitudin metus. Nullam vitae purus imperdiet, consequat eros id, rhoncus orci. Sed facilisis convallis lectus a porta. Sed magna dui, dignissim id felis vitae, consectetur consectetur tellus. Vestibulum congue tellus eu ipsum finibus, id vulputate mi dignissim.',
  conts: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum porta elit a porttitor mattis. Pellentesque sit amet fringilla mauris. Cras eu faucibus lorem. Integer mattis dolor eu feugiat finibus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Phasellus ut metus ac nunc tristique pellentesque vel auctor libero.',
    cont: 'Nulla facilisi. Praesent diam leo, dapibus ultricies porta in, tincidunt eget augue. Curabitur rutrum maximus lacus, ut scelerisque ipsum porttitor et. In non fringilla justo. Pellentesque venenatis suscipit lacus. Sed non laoreet elit. Fusce vel tellus vulputate, dignissim turpis sit amet, aliquet mi. Etiam elementum, massa et fermentum viverra, odio ipsum gravida metus, at interdum tellus est eget mi.'
  },
  {
    id: 4,
    image: image4 ,
    image2: image7,
    image3: image8,
    image4: image9,
    title: 'Nam pharetra fringilla justo, et commodo lacus molestie ut',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum porta elit [...]',
    prom:'Maecenas in est at neque feugiat mattis. Praesent vel pellentesque lorem. Fusce sit amet sollicitudin metus. Nullam vitae purus imperdiet, consequat eros id, rhoncus orci. Sed facilisis convallis lectus a porta. Sed magna dui, dignissim id felis vitae, consectetur consectetur tellus. Vestibulum congue tellus eu ipsum finibus, id vulputate mi dignissim.',
  conts: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum porta elit a porttitor mattis. Pellentesque sit amet fringilla mauris. Cras eu faucibus lorem. Integer mattis dolor eu feugiat finibus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Phasellus ut metus ac nunc tristique pellentesque vel auctor libero.',
    cont: 'Nulla facilisi. Praesent diam leo, dapibus ultricies porta in, tincidunt eget augue. Curabitur rutrum maximus lacus, ut scelerisque ipsum porttitor et. In non fringilla justo. Pellentesque venenatis suscipit lacus. Sed non laoreet elit. Fusce vel tellus vulputate, dignissim turpis sit amet, aliquet mi. Etiam elementum, massa et fermentum viverra, odio ipsum gravida metus, at interdum tellus est eget mi.'
  },
  {
    id: 5,
    image: image5 ,
    image2: image7,
    image3: image8,
    image4: image9,
    title: 'Fusce vel tellus vulputate, dignissim turpis sit amet, aliquet mi',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum porta elit [-]',
    prom:'Maecenas in est at neque feugiat mattis. Praesent vel pellentesque lorem. Fusce sit amet sollicitudin metus. Nullam vitae purus imperdiet, consequat eros id, rhoncus orci. Sed facilisis convallis lectus a porta. Sed magna dui, dignissim id felis vitae, consectetur consectetur tellus. Vestibulum congue tellus eu ipsum finibus, id vulputate mi dignissim.',
  conts: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum porta elit a porttitor mattis. Pellentesque sit amet fringilla mauris. Cras eu faucibus lorem. Integer mattis dolor eu feugiat finibus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Phasellus ut metus ac nunc tristique pellentesque vel auctor libero.',
    cont: 'Nulla facilisi. Praesent diam leo, dapibus ultricies porta in, tincidunt eget augue. Curabitur rutrum maximus lacus, ut scelerisque ipsum porttitor et. In non fringilla justo. Pellentesque venenatis suscipit lacus. Sed non laoreet elit. Fusce vel tellus vulputate, dignissim turpis sit amet, aliquet mi. Etiam elementum, massa et fermentum viverra, odio ipsum gravida metus, at interdum tellus est eget mi.'
  },
  {
    id: 6,
    image: image6,
    image2: image7,
    image3: image8,
    image4: image9,
    title: 'Duis lacinia convallis odio, quis efficitur dolor pulvinar nec',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum porta elit [..]',
    prom:'Maecenas in est at neque feugiat mattis. Praesent vel pellentesque lorem. Fusce sit amet sollicitudin metus. Nullam vitae purus imperdiet, consequat eros id, rhoncus orci. Sed facilisis convallis lectus a porta. Sed magna dui, dignissim id felis vitae, consectetur consectetur tellus. Vestibulum congue tellus eu ipsum finibus, id vulputate mi dignissim.',
  conts: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum porta elit a porttitor mattis. Pellentesque sit amet fringilla mauris. Cras eu faucibus lorem. Integer mattis dolor eu feugiat finibus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Phasellus ut metus ac nunc tristique pellentesque vel auctor libero.',
    cont: 'Nulla facilisi. Praesent diam leo, dapibus ultricies porta in, tincidunt eget augue. Curabitur rutrum maximus lacus, ut scelerisque ipsum porttitor et. In non fringilla justo. Pellentesque venenatis suscipit lacus. Sed non laoreet elit. Fusce vel tellus vulputate, dignissim turpis sit amet, aliquet mi. Etiam elementum, massa et fermentum viverra, odio ipsum gravida metus, at interdum tellus est eget mi.'
  }
];

const Blog = () => {

  const blogst = useNavigate();
  const handleBlogst =(id)=> {
      blogst(`/singlecard/${id}`)
  }
  return (
    <div className='blogs-container'>
    <h1 className="blog-title">Blog</h1>
    <div className="blog-container">
      {blogPosts.map((post) => (
        <div key={post.id} className="blog-card">
          <img src={post.image} alt={post.title} />
          
          <div className="blog-content">
            <h2>{post.title}</h2>
            <p>{post.content}</p>
            <button onClick={()=>handleBlogst(post.id)}>Read more</button>
          </div>
        </div>
      ))}
    </div>
    </div>
  
  );
};

export default Blog;