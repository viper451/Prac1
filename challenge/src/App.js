import React,{useState,useEffect} from 'react';
import logo from './logo.svg';
import  axios from 'axios';
import './App.css';
import Table from 'react-bootstrap/Table';


function App() {
  const[info,setInfo]=useState([]);
 
  useEffect(() => {
    get();
}, []);


useEffect(() => {
    console.log(info); 
}, [setInfo]);           

const get = async () => {
    await axios.get("https://gorest.co.in/public/v2/users").then((res) => {
        setInfo(res.data);
    });
    console.log(info);
};



console.log(info)


  return (
    <>
    <h1 style={{textAlign:'center'}}>DETAIL OF USER</h1>
    <div className="App">
      
    <table>
      <tr>
        <th>Id</th>
        <th>Name</th>
        <th>Email</th>
        <th>Gender</th>
        <th>Status</th>
      </tr>
      {info?.map((val, key) => {
        return (
          <tr key={key}>
            <td>{val.id}</td>
            <td>{val.name}</td>
            <td>{val.email}</td>
            <td>{val.gender}</td>
            <td>{val.status}</td>
          </tr>
        )
      })}
    </table>
  </div>
  </>
  );
}

export default App;
