"use client";

import axios from "axios";
import React, { useState, useEffect } from "react";

const AdminReservations = () => {
  const [reservations, setReservations] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const api = process.env.NEXT_PUBLIC_BACKEND_URL_ADDRESS;
      const response = await axios.get(`${api}/api/getall/reservations`);

      console.log(response)
      
      if (response.data.reservations) {
        setReservations(response.data.reservations);
      }
    } catch (error) {
      console.error("Error fetching reservations:", error);
    }
  };

  const handleApprove = async (id) => {
    try {
      const api = process.env.NEXT_PUBLIC_BACKEND_URL_ADDRESS;
      const response = await axios.put(`${api}/api/reservations/${id}/approve`);
      
      if (response.status === 200) {
        alert(`Reservation ${id} approved`);
        fetchData(); // Refresh the list
      }
    } catch (error) {
      console.error("Error approving reservation:", error);
      alert("Failed to approve reservation");
    }
  };

  const handleReject = async (id) => {
    try {
      const api = process.env.NEXT_PUBLIC_BACKEND_URL_ADDRESS;
      const response = await axios.put(`${api}/api/reservations/${id}/reject`);
      
      if (response.status === 200) {
        alert(`Reservation ${id} rejected`);
        fetchData(); // Refresh the list
      }
    } catch (error) {
      console.error("Error rejecting reservation:", error);
      alert("Failed to reject reservation");
    }
  };

  const handleDelete = async (id) => {
    try {
      const api = process.env.NEXT_PUBLIC_BACKEND_URL_ADDRESS;
      const response = await axios.delete(`${api}/api/reservations/${id}`);
      
      if (response.status === 200) {
        alert(`Reservation ${id} deleted`);
        setReservations(reservations.filter((reservation) => reservation.id !== id));
      }
    } catch (error) {
      console.error("Error deleting reservation:", error);
      alert("Failed to delete reservation");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-orange-100">
      <div className="w-full max-w-4xl p-6 bg-white rounded-lg shadow-md">
        <h1 className="flex items-center justify-center mb-4 text-2xl font-bold">
          Admin Reservations
        </h1>
        <table className="w-full table-auto">
          <thead>
            <tr>
              <th className="px-4 py-2">ID</th>
              <th className="px-4 py-2">Cafe</th>
              <th className="px-4 py-2">Date</th>
              <th className="px-4 py-2">Time</th>
              <th className="px-4 py-2">People</th>
              <th className="px-4 py-2">Status</th>
              <th className="px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {reservations.map((reservation) => (
              <tr key={reservation._id}>
                <td className="px-4 py-2 border">{reservation._id}</td>
                <td className="px-4 py-2 border">{reservation.cafe}</td>
                <td className="px-4 py-2 border">{reservation.date}</td>
                <td className="px-4 py-2 border">{reservation.time}</td>
                <td className="px-4 py-2 border">{reservation.people}</td>
                <td className="px-4 py-2 border">{reservation.status || 'Pending'}</td>
                <td className="px-4 py-2 border">
                  <button
                    onClick={() => handleApprove(reservation._id)}
                    className="px-2 py-1 mr-2 text-white bg-green-500 rounded"
                    disabled={reservation.status === 'approved'}
                  >
                    Approve
                  </button>
                  <button
                    onClick={() => handleReject(reservation._id)}
                    className="px-2 py-1 mr-2 text-white bg-yellow-500 rounded"
                    disabled={reservation.status === 'rejected'}
                  >
                    Reject
                  </button>
                  <button
                    onClick={() => handleDelete(reservation._id)}
                    className="px-2 py-1 text-white bg-red-500 rounded"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminReservations;