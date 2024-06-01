import React from 'react';
import { AiFillPlayCircle, AiOutlineArrowRight } from 'react-icons/ai'

const VideoThumbnail = ({ thumbnailUrl, title, date }) => {
  return (
    <div className="flex flex-col border-b border-gray-200 p-4">
      <div className="flex flex-row items-center justify-start mb-2">
        <img src="thumbnail.jpg" className="h-16 w-16 mr-4" alt="Video thumbnail" />
        <div className="flex flex-col">
          <h2 className="text-md font-medium text-white">January 19, 2023</h2>
          <p className="text-sm text-gray-300">MLops Community Conference</p>
        </div>
        <button className="ml-auto bg-gray-100 hover:bg-gray-300 text-black font-bold py-2 px-4 rounded">
          <div className="flex items-center">
            <div>
              <AiFillPlayCircle />
            </div>
            <div className="ml-2">
              Watch
            </div>
          </div>
        </button>
      </div>
      <div className="flex flex-row border-t items-center justify-start mb-2">
        <img src="thumbnail.jpg" className="h-16 w-16 mr-4" alt="Video thumbnail" />
        <div className="flex flex-col">
          <h2 className="text-md font-medium text-white">January 19, 2023</h2>
          <p className="text-sm text-gray-300">MLops Community Conference</p>
        </div>
        <button className="ml-auto bg-gray-100 hover:bg-gray-300 text-black font-bold py-2 px-4 rounded">
          <div className="flex items-center">
            <div>
              <AiFillPlayCircle />
            </div>
            <div className="ml-2">
              Watch
            </div>
          </div>
        </button>
      </div>
      <div className="flex flex-row border-t items-center justify-start mb-2">
        <img src="thumbnail.jpg" className="h-16 w-16 mr-4" alt="Video thumbnail" />
        <div className="flex flex-col">
          <h2 className="text-md font-medium text-white">January 19, 2023</h2>
          <p className="text-sm text-gray-300">MLops Community Conference</p>
        </div>
        <button className="ml-auto bg-gray-100 hover:bg-gray-3 text-white00 text-black font-bold py-2 px-4 rounded">
          <div className="flex items-center">
            <div>
              <AiFillPlayCircle />
            </div>
            <div className="ml-2">
              Watch
            </div>
          </div>
        </button>
      </div>
      <div className="flex flex-row border-t items-center justify-start mb-2">
        <img src="thumbnail.jpg" className="h-16 w-16 mr-4" alt="Video thumbnail" />
        <div className="flex flex-col">
          <h2 className="text-md font-medium text-white">January 19, 2023</h2>
          <p className="text-sm text-gray-300">MLops Community Conference</p>
        </div>
        <button className="ml-auto bg-gray-100 hover:bg-gray-300 text-black font-bold py-2 px-4 rounded">
          <div className="flex items-center">
            <div>
              <AiFillPlayCircle />
            </div>
            <div className="ml-2">
              Watch
            </div>
          </div>
        </button>
      </div>
      <div className="flex flex-row border-t items-center justify-start mb-2">
        <img src="thumbnail.jpg" className="h-16 w-16 mr-4" alt="Video thumbnail" />
        <div className="flex flex-col">
          <h2 className="text-md font-medium text-white">January 19, 2023</h2>
          <p className="text-sm text-gray-300">MLops Community Conference</p>
        </div>
        <button className="ml-auto bg-gray-100 hover:bg-gray-300 text-black font-bold py-2 px-4 rounded">
          <div className="flex items-center">
            <div>
              <AiFillPlayCircle />
            </div>
            <div className="ml-2">
              Watch
            </div>
          </div>
        </button>
      </div>
      <div className='text-white flex justify-center items-center mb-4'>
        <div className='flex justify-center items-center cursor-pointer'>
          View More
        </div>
        <div className='ml-2'>
          <AiOutlineArrowRight className='text-pink-500 cursor-pointer'/>
        </div>    
      </div>
    </div>
  );
};

export default VideoThumbnail;