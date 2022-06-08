import React, { useEffect, useState } from 'react';
import Home from './Container/Home';
import Loading from './Container/Loading';

 const HomeWithLoading = Loading(Home);
 

 

function App(props) {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  const orgData = [
    {id:101, name:'Ritik'},
    {id:102, name:"Maithil"}
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