import Image from "next/image";

const BlogsCard = ({blog}) => {
    return (
        <div >
            <div className="max-w-sm bg-white rounded-2xl shadow-md overflow-hidden transition-transform hover:scale-105 cursor-pointer">
      <Image src={blog.image} className="w-full h-48 object-cover"  alt='blog image' width={400} height={400}/>
      <div className="p-4">
        <span className="text-sm text-gray-500">{blog.date} • {blog.category}</span>
        <h3 className="text-black text-lg font-bold mt-2">{blog.title}</h3>
        <p className="text-gray-600 text-sm mt-1">By {blog.author}</p>
        <div className="mt-2">
          {blog.tags.map((tag, index) => (
            <span key={index} className="inline-block bg-blue-100 text-blue-600 text-xs px-2 py-1 rounded mr-2">
              {tag}
            </span>
          ))}
        </div>
        <button className="mt-3 w-full text-white bg-blue-500 py-2 rounded-lg hover:bg-blue-700 cursor-pointer">
          Read More
        </button>
      </div>
    </div>
        </div>
    );
};

export default BlogsCard;