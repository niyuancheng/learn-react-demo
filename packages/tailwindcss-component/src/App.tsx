import { Home } from './Home';
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
    <div className="App flex justify-center items-center">
      <Home />
      <h1 className='text-gray-400 ml-10 underline'>哈哈哈</h1>
      <div className="i-vscode-icons:file-type-light-pnpm hover:i-vscode-icons-file-type-jss" w="20 hover:20" h="20 hover:20"></div>

      <div
        className='i-svg-spinners-blocks-wave hover:i-svg-spinners-gooey-balls-1 hover:cursor-pointer'
        w="10 hover:10"
        h="10 hover:10"
        flex="flex justify-center items-center"
        bg="pink hover:pink"
      ></div>
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
