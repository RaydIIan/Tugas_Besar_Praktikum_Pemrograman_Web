import Input from "../../components/Input";
import "./Colors.css";

const Colors = ({ handleChange }) => {
    return (
      <>
        <div>
          <h2 className="sidebar-title color-title">Warna</h2>
          <label className="sidebar-label-container">
            <input onChange={handleChange} type="radio" value="" name="test1" />
            <span className="checkmark all"></span>Semua
          </label>
  
          <Input
            handleChange={handleChange}
            value="black"
            title="Hitam"
            name="test1"
            color="black"
          />
  
          <Input
            handleChange={handleChange}
            value="blue"
            title="Biru"
            name="test1"
            color="blue"
          />
  
          <Input
            handleChange={handleChange}
            value="red"
            title="Merah"
            name="test1"
            color="red"
          />
  
          <Input
            handleChange={handleChange}
            value="green"
            title="Hijau"
            name="test1"
            color="green"
          />
  
          <label className="sidebar-label-container">
            <input
              onChange={handleChange}
              type="radio"
              value="white"
              name="test1"
              title="Putih"
            />
            <span
              className="checkmark"
              style={{ background: "white", border: "2px solid black" }}
            ></span>
            Putih
          </label>
        </div>
      </>
    );
  };

export default Colors;