import React, { useEffect, useState } from 'react';
import Home from './Container/Home';
import Loading from './Container/Loading';

 const HomeWithLoading = Loading(Home);
 

function App(props) {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  const orgData = [
    {id:1, name:'Ritik'},
    {id:2, name:"Maithil"},
    {id:3, name:"Kartik"},
    {id:4, name:"Jaymin"},
    {id:5, name:"Sagar"},
    {id:6, name:"Zara"},
    {id:7, name:"Lilian"},
    {id:8, name:"Nora"},
    {id:9, name:"Prince"},
    {id:10, name:"Yash"}
  ];

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {setLoading(false); setData(orgData)} ,2000)
  },[])

  return (
    <div>
      <HomeWithLoading
      isLoading={loading}
      data={data}
      />
    </div>
  );
}

export default App;