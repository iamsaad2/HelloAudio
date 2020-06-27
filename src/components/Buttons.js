import React from 'react';

import { CopyToClipboard } from 'react-copy-to-clipboard';

const Buttons = (props) => {
  const url = new URL(window.location);

  let foo = url.searchParams.get('url') + window.location.hash;

  let link = foo.slice(6);

  return (
    <div className='buttons'>
      <div className='button-container'>
        <form action={`podcast:${link}`}>
          <button type='submit' className='button'>
            APPLE PODCASTS
          </button>
        </form>
        <form action={`overcast://x-callback-url/add?url=https:${link}`}>
          <button className='button'>OVERCAST</button>
        </form>
        <form action={`podcastaddict:${link}`}>
          <button className='button'>PODCAST ADDICT</button>
        </form>
        <form action={`pktc://subscribe${link.slice(1)}`}>
          <button className='button'>POCKET CASTS</button>
        </form>
        <CopyToClipboard text={foo}>
          <button className='button'>COPY RSS FEED</button>
        </CopyToClipboard>
      </div>

      <div className='link-container'>
        <p className='link'>Your RSS Feed URL:</p>
        <p className='link link2'>{foo}</p>
      </div>
    </div>
  );
};

export default Buttons;
