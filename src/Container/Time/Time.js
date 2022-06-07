import React, { useEffect, useState }  from 'react';

function Timefun(props) {
  const [Time , SetTime] = useState (Date());
  const [Data , SetData] = useState ([]);

  const tick = () => {
    SetTime(Date ());
  }

  useEffect(() => {
    const timeE = setInterval(() => tick() , 1000);

    return() => {
      clearInterval(timeE)
    }
  }, [Time , Data]);

  return (
    <div>
      <p>{JSON.stringify(Time)}</p>
    </div>
  );
}

export default Timefun;