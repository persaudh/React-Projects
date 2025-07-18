import CatrgoryItem from "../category-item/category-item.component";
import "./directory.styles.scss";
const Directory = ({categories}) => {
return (
<div className="directory-container">
      {categories.map((category) => (
        <CatrgoryItem category={category} key={category.id}/>
      ))}
    </div>
)};

export default Directory