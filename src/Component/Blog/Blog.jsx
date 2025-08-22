import PropTypes from "prop-types";
import { TiBookmark } from "react-icons/ti";

const Blog = ({blog, handleAddToBookmark}) => {
    const {title,cover,reading_time, author , author_img,posted_date,hashtags} = blog;
    return (
        <div className="mb-20">
            <img className="w-full mb-8" src={cover} alt={`Cover picture of the title ${title}`} />
            <div className="flex justify-between mb-4">
               <div className="flex">
                    <img className='w-11 rounded-4xl'  src={author_img} alt="" />
                 <div className="ml-6">
                    <h3 className="text-2xl">{author}</h3>
                    <p>{posted_date}</p>
                 </div>
                </div>
                <div>
                    <span>{reading_time} min read</span>
                    <button onClick={handleAddToBookmark}
                    className="ml-2 text-red-800 text-xl"><TiBookmark></TiBookmark></button>
                </div>
            </div>
            <h2 className="text-4xl ">{title}</h2>
            <p>
                {
                    hashtags.map((hash ,idx)=> <span key = {idx}><a href="">{hash}</a></span>)
                }
            </p>
        </div>
    );
};
    Blog.PropTypes = {
        blog: PropTypes.object.isRequired
    }
export default Blog;