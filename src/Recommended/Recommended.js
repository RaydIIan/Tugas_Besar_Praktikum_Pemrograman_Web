import "./Recommended.css";
import Button from "../components/Buttons";

const Recommended = ({ handleClick }) => {
    return (
      <>
        <div>
          <h2 className="recommended-title">Rekomendasi</h2>
          <div className="recommended-flex">
            <Button onClickHandler={handleClick} value="" title="Semua Produk" />
            <Button onClickHandler={handleClick} value="Nike" title="Nike" />
            <Button onClickHandler={handleClick} value="Adidas" title="Adidas" />
            <Button onClickHandler={handleClick} value="Puma" title="Puma" />
            <Button onClickHandler={handleClick} value="Skechers" title="Skechers" />
          </div>
        </div>
      </>
    );
  };
  
  export default Recommended;