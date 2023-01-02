import categories from '../../categories.json';

import CategoryItem from '../category-item';

import './categories.styles.scss';

const Categories = () => {
  return (
    <div className="categories-container">
      {categories.map((category) => {
        return <CategoryItem category={category} key={category.id} />;
      })}
    </div>
  );
};

export default Categories;
