import Input from "../../components/Input";
import "./Category.css";

function Category({ handleChange }) {
    return (
      <div>
        <h2 className="sidebar-title">Kategori</h2>
  
        <div>
          <label className="sidebar-label-container">
            <input onChange={handleChange} type="radio" value="" name="test" />
            <span className="checkmark"></span>Semua
          </label>
          <Input
            handleChange={handleChange}
            value="sneakers"
            title="Sneakers"
            name="test"
          />
          <Input
            handleChange={handleChange}
            value="t-shirt"
            title="T-Shirt"
            name="test"
          />
          <Input
            handleChange={handleChange}
            value="sandals"
            title="Sendal"
            name="test"
          />
          <Input
            handleChange={handleChange}
            value="hat"
            title="Topi"
            name="test"
          />
        </div>
      </div>
    );
  }
  
  export default Category;