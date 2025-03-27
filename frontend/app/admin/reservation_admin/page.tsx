"use client";

import React, { useState, useEffect } from "react";

const AdminReservations = () => {
  const [reservations, setReservations] = useState<{ id: number; cafe: string; date: string; time: string; people: number; agreeToTerms: boolean; }[]>([]);

  useEffect(() => {
    // Fetch reservations from the server or local storage
    // This is a placeholder for fetching data
    const fetchedReservations = [
      {
        id: 1,
        cafe: "Cafe Nuwara",
        date: "2023-10-01",
        time: "18:00",
        people: 4,
        agreeToTerms: true,
      },
      {
        id: 2,
        cafe: "Cafe Colombo",
        date: "2023-10-02",
        time: "19:00",
        people: 2,
        agreeToTerms: true,
      },
    ];
    setReservations(fetchedReservations);
  }, []);

  const handleApprove = (id: number) => {
    // Logic to approve reservation
    alert(`Reservation ${id} approved`);
  };

  const handleReject = (id: number) => {
    // Logic to reject reservation
    alert(`Reservation ${id} rejected`);
  };

  const handleDelete = (id: number) => {
    // Logic to delete reservation
    setReservations(reservations.filter((reservation) => reservation.id !== id));
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-orange-100">
      <div className="w-full max-w-4xl p-6 bg-white shadow-md rounded-lg">
        <h1 className="text-2xl flex items-center justify-center font-bold mb-4">Admin Reservations</h1>
        <table className="w-full table-auto">
          <thead>
            <tr>
              <th className="px-4 py-2">ID</th>
              <th className="px-4 py-2">Cafe</th>
              <th className="px-4 py-2">Date</th>
              <th className="px-4 py-2">Time</th>
              <th className="px-4 py-2">People</th>
              <th className="px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {reservations.map((reservation) => (
              <tr key={reservation.id}>
                <td className="border px-4 py-2">{reservation.id}</td>
                <td className="border px-4 py-2">{reservation.cafe}</td>
                <td className="border px-4 py-2">{reservation.date}</td>
                <td className="border px-4 py-2">{reservation.time}</td>
                <td className="border px-4 py-2">{reservation.people}</td>
                <td className="border px-4 py-2">
                  <button
                    onClick={() => handleApprove(reservation.id)}
                    className="bg-green-500 text-white px-2 py-1 rounded mr-2"
                  >
                    Approve
                  </button>
                  <button
                    onClick={() => handleReject(reservation.id)}
                    className="bg-yellow-500 text-white px-2 py-1 rounded mr-2"
                  >
                    Reject
                  </button>
                  <button
                    onClick={() => handleDelete(reservation.id)}
                    className="bg-red-500 text-white px-2 py-1 rounded"
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