/* eslint-disable react/prop-types */
const Bookmark = ({bookmark}) => {
    const {title} = bookmark;
    return (
        <div className="m-2 bg-white">
           <ul className="mx-6">
            <li className=" list-disc">{title}</li>
           </ul>
        </div>
    );
};

export default Bookmark;