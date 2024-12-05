import './index.css';
import React, { useState } from 'react';

function App() {
  const [isLoading, setIsLoading] = useState(false)
  let loadingTimer = -1;
  const handleClick = () => {
    if (isLoading) return
    setIsLoading(true)
    loadingTimer = window.setTimeout(() => {
      setIsLoading(false)
    }, 2000)
  }
  return (
    <div className="App flex justify-center">
      <h1 className='text-gray-400 ml-10 underline'>哈哈哈</h1>
      <button 
        bg="blue-400 hover:blue-500 dark:blue-500 dark:hover:blue-600" 
        text="2xl orange align-center" 
        border="hover:rounded-full" 
        p="5"
        cursor="default hover:pointer"
        transform="hover:scale-200 hover:rotate-180"
        transition="all"
        transition-duration-1000
        m="t-20 auto"
        onClick={handleClick}
      >
        {isLoading ? (
          <>
            <span className="loading loading-spinner"></span>
            <span>loading...</span>
          </>
        ) : <span>click me</span>
        }
      </button>     
    </div>
  );
}

export default App;
