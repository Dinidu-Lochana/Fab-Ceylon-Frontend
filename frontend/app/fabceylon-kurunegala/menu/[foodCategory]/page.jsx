import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import axios from 'axios';

const Orders = ({ userId, adminId }) => {
  const [orders, setOrders] = useState([]);
  const [ratings, setRatings] = useState({});
  const [showReviewPopup, setShowReviewPopup] = useState(false);
  const [currentOrder, setCurrentOrder] = useState(null);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/customers/rating/getOrders/${userId}/${adminId}`
        );
        setOrders(response.data);

        const initialRatings = {};
        response.data.forEach((order) => {
          order.items.forEach((item) => {
            initialRatings[item.foodId] = item.averageRating || 0;
          });
        });
        setRatings(initialRatings);
      } catch (error) {
        toast.error('Failed to fetch orders');
      }
    };

    fetchOrders();
  }, [userId, adminId]);

  const handleRatingChange = (foodId, newRating) => {
    setRatings((prevRatings) => ({
      ...prevRatings,
      [foodId]: newRating,
    }));
  };

  const handleSubmitRating = async () => {
    if (!currentOrder) return;

    const token = localStorage.getItem('customer');
    const ratingPayload = {
      _id: currentOrder._id,
      userId,
      adminId,
      items: currentOrder.items.map((item) => ({
        foodId: item.foodId,
        quantity: item.quantity,
        price: item.price,
        ratings: [
          {
            userId,
            rating: ratings[item.foodId] || 0,
          },
        ],
      })),
      orderType: currentOrder.orderType,
      paymentMethod: currentOrder.paymentMethod,
      orderDescription: currentOrder.orderDescription,
    };

    try {
      await axios.patch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/customers/rating/submitFoodRating`,
        ratingPayload,
        { headers: { Authorization: `Bearer ${token}` } }
      );
      toast.success('Ratings submitted successfully!');
      setShowReviewPopup(false);
      setCurrentOrder(null);
    } catch (error) {
      toast.error('Failed to submit ratings');
    }
  };

  const openReviewPopup = (order) => {
    setCurrentOrder(order);
    setShowReviewPopup(true);
  };

  const closeReviewPopup = () => {
    setShowReviewPopup(false);
    setCurrentOrder(null);
  };

  return (
    <div className="orders-container">
      <h1>Your Orders</h1>
      <div className="orders-list">
        {orders.map((order) => (
          <div className="order-card" key={order._id}>
            <h2>Order #{order._id.slice(-6)}</h2>
            <p>
              Date: {new Date(order.createdAt).toLocaleDateString()} {new Date(order.createdAt).toLocaleTimeString()}
            </p>
            <p>Total Amount: Rs.{order.totalAmount}</p>
            <p>Status: {order.status}</p>
            <button className="review-button" onClick={() => openReviewPopup(order)}>
              Review
            </button>
          </div>
        ))}
      </div>

      {showReviewPopup && currentOrder && (
        <div className="review-popup">
          <h2>Review Order #{currentOrder._id.slice(-6)}</h2>
          <div className="popup-content">
            {currentOrder.items.map((item) => (
              <div className="food-item" key={item.foodId}>
                <img
                  src={
                    item.image
                      ? `${process.env.NEXT_PUBLIC_BACKEND_URL}/${item.image.replace('\\', '/')}`
                      : '/default-image.jpg'
                  }
                  alt={item.foodName || 'Food Item'}
                  className="food-image"
                />
                <div className="food-details">
                  <h3>{item.foodName || 'No Name'}</h3>
                  <p>Price: Rs.{item.price}</p>
                  <RatingReview
                    rating={ratings[item.foodId] || 0}
                    setRating={(newRating) => handleRatingChange(item.foodId, newRating)}
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="button-container">
            <button className="submit-button" onClick={handleSubmitRating}>
              Submit
            </button>
            <button className="close-button" onClick={closeReviewPopup}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

function RatingReview({ rating, setRating }) {
  return (
    <div className="rating-stars">
      {[1, 2, 3, 4, 5].map((star) => (
        <span
          className="star"
          style={{
            cursor: 'pointer',
            color: rating >= star ? 'gold' : 'gray',
            fontSize: '35px',
          }}
          onClick={() => setRating(star)}
          key={star}
        >
          ★
        </span>
      ))}
    </div>
  );
}

export default Orders;
