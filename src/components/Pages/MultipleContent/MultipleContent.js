import React, { useState } from 'react';

const MultipleContent = () => {
    const [showNewContent, setShowNewContent] = useState(false);
    function handleScroll(event) {
        const { scrollTop } = event.target;
        setShowNewContent(scrollTop > 50); // change content after scrolling 50 pixels
      }
      const items = [
        {
            'id':1 ,
        'heading1' :'',
        'heading2' :'',
        'paragraph': ''
        },
        {
            'id': 2,
        'heading1' :'',
        'heading2' :'',
        'paragraph': ''
        },
        {
            'id':3,
        'heading1' :'',
        'heading2' :'',
        'paragraph': ''
        },
      ]
    return (
        <div style={{ height: "300px", overflowY: "scroll" }} onScroll={handleScroll}>
        {showNewContent ? (
          <>
            <p className='h-96 bg-blue-400'>This is the new content for paragraph 1.</p>
            <p className='h-96 bg-blue-400'>This is the new content for paragraph 2.</p>
            <p className='h-96 bg-blue-400'>This is the new content for paragraph 3.</p>
          </>
        ) : (
          <>
            <p className='h-96 bg-blue-400'>This is the initial content for paragraph 1.</p>
            <p className='h-96 bg-blue-400'>This is the initial content for paragraph 2.</p>
            <p className='h-96 bg-blue-400'>This is the initial content for paragraph 3.</p>
          </>
        )}
        </div>
    );
};

export default MultipleContent;