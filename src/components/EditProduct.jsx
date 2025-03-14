import { useState, useEffect } from 'react';
import axios from 'axios';

function EditProduct() {
    const [formData, setFormData] = useState({
        postId: '',
        title: '',
        body: '',
        price: ''
    });

    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    // Handle input change
    const handleChange = (event) => {
        const { name, value } = event.target;
    
        // Update the corresponding key in the state object
        setFormData((prevState) => ({
          ...prevState, // Keep the existing form data
          [name]: value, // Update the key corresponding to the input's name attribute
        }));
    };

    // Form validation
    const validateForm = () => {
        const { postId, title, body, price } = formData;

        if (postId.trim() === '' || title.trim() === '' || body.trim() === '' || price.trim() === '') {
            setSuccess('');
            setError('Post ID, title, body, and price are required');
            return false;
        }
        setError('');
        return true;
    };

    // Fetch product details when postId changes
    useEffect(() => {
        if (formData.postId) {
            axios.get(`https://fakestoreapi.com/products/${formData.postId}`)
                .then(response => {
                    setFormData({
                        postId: response.data.id,
                        title: response.data.title,
                        body: response.data.description,
                        price: response.data.price
                    });
                })
                .catch(error => {
                    console.error('There was an error fetching the product details!', error);
                    setError('Failed to fetch product details');
                });
        }
    }, [formData.postId]);

    const updatePost = async (event) => {
        event.preventDefault();

        if (!validateForm()) {
            return; // If validation fails, exit
        }

        try {
            const { postId, title, body, price } = formData;

            const response = await fetch(`https://fakestoreapi.com/products/${postId}`, {
                method: 'PUT',  // Use PUT for full replacement or PATCH for partial updates
                body: JSON.stringify({
                    id: postId,
                    title: title,
                    description: body,
                    price: price
                }),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            });

            if (!response.ok) {
                throw new Error('Failed to update post');
            }

            const updatedPost = await response.json();
            
            setSuccess(
                <div>
                    <p>Post #{updatedPost.id} Updated Successfully!</p>                    
                    New Title: {updatedPost.title}<br/>
                    New Body: {updatedPost.description}<br/>
                    New Price: {updatedPost.price}
                </div>
            );
            setError(''); // Clear any previous errors
        } catch (error) {
            console.error(error.message);
            setError('Failed to update post');
            setSuccess(''); // Clear any previous success messages
        }
    };

    return (
        <div>
            <h1>Update Post</h1>
            <form onSubmit={updatePost}>
                <div>
                    <label htmlFor="postId">Post ID</label><br/>
                    <input
                        type="number"
                        id="postId"
                        name="postId"
                        value={formData.postId}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="title">Title:</label><br/>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="body">Body:</label><br/>
                    <textarea
                        id="body"
                        name="body"
                        value={formData.body}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="price">Price $:</label><br/>
                    <input
                        type="number"
                        id="price"
                        name="price"
                        value={formData.price}
                        onChange={handleChange}
                    />
                </div><br/>
                <button type="submit">Update Post</button>
            </form>

            {/* Display validation error or success message */}
            {error && <div style={{ color: 'red' }}>{error}</div>}
            {success && <div style={{ color: 'green' }}>{success}</div>}
        </div>
    );
}

export default EditProduct;