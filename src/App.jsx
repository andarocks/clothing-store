import CategoryItem from './components/category-item';
import './categories.styles.scss';
import categories from './categories.json';
const App = () => {
  return (
    <div className="categories-container">
      {categories.map((category) => {
        return <CategoryItem title={category.title} key={category.id} imgUrl={category.imageUrl} />;
      })}
    </div>
  );
};

export default App;
