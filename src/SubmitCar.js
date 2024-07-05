import React, { useState } from 'react';
import { Link } from 'react-router-dom'; 
import './App.css'; 

function App() {
  const [carModel, setCarModel] = useState('');
  const [price, setPrice] = useState('');
  const [phone, setPhone] = useState('');
  const [city, setCity] = useState('');
  const [copies, setCopies] = useState(1);
  const [images, setImages] = useState([]);

  const handleCarModelChange = (e) => {
    setCarModel(e.target.value);
  };

  const handlePriceChange = (e) => {
    setPrice(e.target.value);
  };

  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };

  const handleCityChange = (e) => {
    setCity(e.target.value);
  };

  const handleCopiesChange = (e) => {
    setCopies(e.target.value);
  };

  const handleImageUpload = (e) => {
    const files = e.target.files;
    const newImages = Array.from(files).map((file) => URL.createObjectURL(file));
    setImages([...images, ...newImages]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', { carModel, price, phone, city, copies, images });
  };

  return (
    <div className="container">
      <h1>Add Car</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="carModel">Car Model:</label>
          <input
            type="text"
            id="carModel"
            value={carModel}
            onChange={handleCarModelChange}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="price">Price:</label>
          <input
            type="text"
            id="price"
            value={price}
            onChange={handlePriceChange}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone:</label>
          <input
            type="text"
            id="phone"
            value={phone}
            onChange={handlePhoneChange}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="city">City:</label>
          <div className="radio-group">
            <label>
              <input
                type="radio"
                name="city"
                value="Lahore"
                checked={city === 'Lahore'}
                onChange={handleCityChange}
              />
              Lahore
            </label>
            <label>
              <input
                type="radio"
                name="city"
                value="Karachi"
                checked={city === 'Karachi'}
                onChange={handleCityChange}
              />
              Karachi
            </label>
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="copies">No. of copies:</label>
          <input
            type="number"
            id="copies"
            value={copies}
            onChange={handleCopiesChange}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="images">Add Pictures:</label>
          <input
            type="file"
            id="images"
            accept="image/*"
            onChange={handleImageUpload}
            multiple
            className="form-control"
          />
        </div>
        <div className="image-container">
          {images.map((image, index) => (
            <img key={index} src={image} alt={`Image ${index + 1}`} />
          ))}
        </div>
        <Link to="/">
          <button type="submit" className="btn btn-primary">Add Car</button>
        </Link>      </form>
    </div>
  );
}

export default App;
