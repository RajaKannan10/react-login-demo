import React, { useEffect, useState } from "react";
import UserData from "./userData";
import Header from "./header";
import "./header.css";
import Footer from "./footer";
import "./footer.css";

const API = "http://localhost:3000/users";

const Dashboard = () => {
    const [users, setUsers] = useState([]); 

  const fetchUsers = async(url) =>{
    try{
        const res =  await fetch(url);
        const data = await res.json();
        if(data.length > 0){
            setUsers(data);
        }
        console.log(data);

    }catch(e){
        console.error(e)
    }
  }
  useEffect(() =>{
    fetchUsers(API);
  },[])
  return <>
  <div>
    <Header/>
  </div>
  <h1>React Tables</h1>
  <table> 
    <thead>
        <tr>
        <th>ID</th>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Email</th>
        <th>Gender</th>
        </tr>
    </thead>
    <tbody>
        <UserData users ={users} />
    </tbody>
  </table>

  <div>
    <Footer/>
  </div>
  </>

  
 
};

export default Dashboard;
