import { useState } from 'react';

function CreateProduct() {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [price, setPrice] = useState('');
  const [type, setType] = useState(''); // New state for product type
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  // Handle input change
  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleBodyChange = (event) => {
    setBody(event.target.value);
  };

  const handlePriceChange = (event) => {
    setPrice(event.target.value);
  };

  const handleTypeChange = (event) => {
    setType(event.target.value);
  };

  // Form validation
  const validateForm = () => {
    if (title.trim() === '' || body.trim() === '' || type.trim() === '') {
      setError('Content is Missing, please fill in all fields');
      return false;
    }
    setError('');
    return true;
  };

  // Handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent default form submission

    if (!validateForm()) {
      return; // If validation fails, exit
    }

    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
          title: title,
          body: body,
          price: price,
          type: type, // Include product type in the request body
          userId: 1,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      });

      if (!response.ok) {
        throw new Error('Failed to create post');
      }

      const data = await response.json();

      setTitle('');  // Reset title
      setBody('');   // Reset body
      setPrice('');  // Reset price
      setType('');   // Reset type
      setSuccess(
        <div>
            <p>New Post Created Successfully:</p>
            ID: {data.id}<br/>
            Title: {data.title}<br/>
            Body: {data.body}<br/>
            Type: {data.type}
        </div>
      );
    } catch (e) {
      setError(e.message);
    }
  };

  return (
    <div>
      <h1>ADD NEW PRODUCT</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Product Name:</label><br/>
          <input
            type="text"
            id="title"
            value={title}
            onChange={handleTitleChange}
            placeholder="Enter Product Name"
          />
        </div>
        <div>
          <label htmlFor="price">Price:</label><br/>
          <input
            type="text"
            id="price"
            value={price}
            onChange={handlePriceChange}
            placeholder="Enter Price ($)"
          />
        </div>
        <div>
          <label htmlFor="body">Item Description:</label><br/>
          <textarea
            id="body"
            value={body}
            onChange={handleBodyChange}
            placeholder="Enter product content"
          />
        </div>
        <div>
          <label htmlFor="type">Product Type:</label><br/>
          <select id="type" value={type} onChange={handleTypeChange}>
            <option value="">Select Type</option>
            <option value="electronics">Electronics</option>
            <option value="clothing">Clothing</option>
            <option value="accessories">Accessories</option>
            <option value="home">Home</option>
          </select>
        </div>
        <br/>
        <button type="submit">Create Post</button>
      </form>

      {/* Display validation error or success message */}
      {error && <div style={{ color: 'red' }}>{error}</div>}
      {success && <div style={{ color: 'green' }}>{success}</div>}
    </div>
  );
}

export default CreateProduct;