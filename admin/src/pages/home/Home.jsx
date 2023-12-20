import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import "./home.scss";
import Widget from "../../components/widget/Widget";
import Featured from "../../components/featured/Featured";
import React, { useState, useEffect } from 'react';
import axios from "axios"
import 'bootstrap/dist/css/bootstrap.min.css';


const Home = () => {
  const [customerCount, setCustomerCount] = useState(null);
  const [hotelCount, setHotelCount] = useState(null);
  const [roomCounts, setRoomCounts] = useState(null);

  
  useEffect(() => {
    console.log("hello")
    // Fetch customer count from Express.js backend using Axios
    axios.get('/customers/count')
      .then(response => setCustomerCount(response.data.count))
      .catch(error => console.error('Error fetching customer count:', error));

      axios.get('/hotel/count')
      .then(response => setHotelCount(response.data.count))
      .catch(error => console.error('Error fetching customer count:', error));

      axios.get('/rooms/countByTitle')
      .then(response => setRoomCounts(response.data))
      .catch(error => console.error('Error fetching room counts by title:', error));
  }, []);

  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="widgets">
          <Widget type="user" />
          <Widget type="order" />
          <Widget type="earning" />
          <Widget type="balance" />
        </div>
        {/* <div className="charts">
          <Featured />
          <Chart title="Last 6 Months (Revenue)" aspect={2 / 1} />
        </div> */}
        <div className="listContainer">
          <div className="listTitle">
          {customerCount !== null ? (
            <p>Number of Hotels: {hotelCount}</p>
          ) : (
            <p>Loading...</p>
          )}
          
          </div>
          </div>
          <div className="listContainer">
          <div className="listTitle"> 
          {customerCount !== null ? (
        <p>Number of Customers: {customerCount}</p>
      ) : (
        <p>Loading...</p>
      )}
          </div>
          </div>
          <div className="listContainer">
          <div className="listTitle">Room count : 
           {roomCounts !== null ? (
        <ul className="list-group">
          {Object.entries(roomCounts).map(([title, count]) => (
            <li key={title} className="list-group-item">
              <strong>{title}:</strong> {count} rooms
            </li>
          ))}
        </ul>
      ) : (
        <p>Loading...</p>
      )}
          
          </div>
          </div>
      </div>
    </div>
  );
};

export default Home;