import React, { useState } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'

import PodcastDetailsEpisodes from './PodcastDetailsEpisodes'
import LoadMore from '../containers/Spinner/LoadMore'


const PodcastDetailsBody = ({ episodes, handlePause, handlePlay }) => {

  const [count, setCount] = useState({ prev: 1, next: 10 })
  const [hasMore, setHasMore] = useState(true);
  const [current, setCurrent] = useState(episodes.slice(count.prev, count.next))

  const getMoreData = () => {
    if (current.length  + 10 >= episodes.length) {
      setHasMore(false);
      return;
    }
    setTimeout(() => {
      setCurrent(current.concat(episodes.slice(count.prev + 10, count.next + 10)))
    }, 1000)
    setCount((prevState) => ({ prev: prevState.prev + 10, next: prevState.next + 10 }))
  }

  return (
    <div className="flex max-w-full md:px-8 px-0 text-left text-gray-300">
      <div className="md:w-7/12 w-full">
        <InfiniteScroll
          dataLength={current.length}
          next={getMoreData}
          hasMore={hasMore}
          loader={<LoadMore />}
        >
          <PodcastDetailsEpisodes episodes={current} handlePause={handlePause} handlePlay={handlePlay} />
        </InfiniteScroll>
      </div>

      <div className="w-5/12 h-32 pl-12 md:block hidden">
        <h2 className="font-semibold text-2xl">About</h2>
        <p className="text-1xl font-thin pt-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur corrupti cupiditate quibusdam magnam ipsum.
          Eveniet numquam sit, dignissimos rerum nihil quod mollitia, natus tempora ullam, esse dolores error repellat nisi.
          </p>
      </div>
    </div>
  )
}

export default PodcastDetailsBody