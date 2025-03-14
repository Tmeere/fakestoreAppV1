import { useState, useEffect } from 'react';
import axios from 'axios';

function RemoveProduct() {
    const [postId, setPostId] = useState('');
    const [productName, setProductName] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    // Handle input change
    const handleChange = (event) => {
        setPostId(event.target.value);
    };

    // Fetch product details when postId changes
    useEffect(() => {
        if (postId.trim() !== '') {
            axios.get(`https://fakestoreapi.com/products/${postId}`)
                .then(response => {
                    setProductName(response.data.title);
                    setError('');
                })
                .catch(error => {
                    console.error('There was an error fetching the product details!', error);
                    setError('Failed to fetch product details');
                    setProductName('');
                });
        } else {
            setProductName('');
        }
    }, [postId]);

    // Handle form submission
    const handleSubmit = async (event) => {
        event.preventDefault();

        if (postId.trim() === '') {
            setError('Post ID is required');
            setSuccess('');
            return;
        }

        if (productName.trim() === '') {
            setError('Product not found and was not removed');
            setSuccess('');
            return;
        }

        try {
            const response = await axios.delete(`https://fakestoreapi.com/products/${postId}`);

            if (response.status !== 200) {
                throw new Error('Failed to delete post');
            }

            setSuccess(`Product "${productName}" (ID: ${postId}) deleted successfully!`);
            setError('');
            setPostId(''); // Reset postId
            setProductName(''); // Reset productName
        } catch (error) {
            console.error('There was an error deleting the product!', error);
            setError('Failed to delete post');
            setSuccess('');
        }
    };

    return (
        <div>
            <h1>REMOVE PRODUCT</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="postId">Post ID</label><br/>
                    <input
                        type="number"
                        id="postId"
                        name="postId"
                        value={postId}
                        onChange={handleChange}
                    />
                </div><br/>
                {productName && <p>Product Name: {productName}</p>}
                <button type="submit">Remove Post</button>
            </form>

            {/* Display validation error or success message */}
            {error && <div style={{ color: 'red' }}>{error}</div>}
            {success && <div style={{ color: 'green' }}>{success}</div>}
        </div>
    );
}

export default RemoveProduct;