import { useState } from 'react';

function Dislike() {
  const [dislikes, setDislikes] = useState(0);

  function handleDislike() {
    setDislikes(dislikes + 1);
  }

  return (
    <div>
      <button className='btn min-w-min w-max px-1 py-1 h-7 mb-[22px] 
      flex justify-center items-center' 
      onClick={handleDislike}>Dislike: {dislikes}
      </button>
    </div>
  );
}

export default Dislike;
