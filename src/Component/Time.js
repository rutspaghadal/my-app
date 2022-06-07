import React, { useEffect, useState }  from 'react';

function Timefun(props) {
  const [Time , SetTime] = useState (New Date());
  const [Data , SetData] = useState ([]);

  const tick = () => {
    setTimeout(New Date ());
  }

  useEffect(() => {
    const timeE = setInterval(() => tick() , 1000);

    return() => {
      clearInterval(timeE)
    }
  }, [time , data]);

  return (
    <div>
      <p>{time.tolocate Time String()}</p>
    </div>
  );
}

export default Timefun;