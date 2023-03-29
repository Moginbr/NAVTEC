import { useState } from 'react';

function LikeButton() {
  const [likes, setLikes] = useState(0);

  function handleLike() {
    setLikes(likes + 1);
  }

  return (
    <div>
      <button className='btn min-w-min w-max px-1 py-1 h-7 mb-[22px] 
      flex justify-center items-center' 
      onClick={handleLike}>Like: {likes}
      </button>
    </div>
  );
}

export default LikeButton;
