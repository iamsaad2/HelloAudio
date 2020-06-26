import React from 'react';

import { CopyToClipboard } from 'react-copy-to-clipboard';

const Buttons = () => {
  return (
    <div className='buttons'>
      <div className='button-container'>
        <form action='https://helloaudio.fm/subscribe?url=podcast://click.helloaudio.fm/examplefeed#auth=3ab59d'>
          <button type='submit' className='button'>
            APPLE PODCASTS
          </button>
        </form>
        <form action='https://helloaudio.fm/subscribe?url=overcast://x-callback-url/add?url=https://click.helloaudio.fm/examplefeed#auth=3ab59d'>
          <button className='button'>OVERCAST</button>
        </form>
        <form action='https://helloaudio.fm/subscribe?url=podcastaddict://click.helloaudio.fm/examplefeed#auth=3ab59d'>
          <button className='button'>PODCAST ADDICT</button>
        </form>
        <form action='https://helloaudio.fm/subscribe?url=pktc://subscribe/click.helloaudio.fm/examplefeed#auth=3ab59d'>
          <button className='button'>POCKET CASTS</button>
        </form>
        <CopyToClipboard
          text={'https://click.helloaudio.fm/examplefeed#auth=3ab59d'}
        >
          <button className='button'>COPY RSS FEED</button>
        </CopyToClipboard>
      </div>

      <div className='link-container'>
        <p className='link'>Your RSS Feed URL:</p>
        <p className='link link2'>
          https://click.helloaudio.fm/examplefeed#auth=3ab59d
        </p>
      </div>
    </div>
  );
};

export default Buttons;
