import React from "react";
import "../styles/Home.css";

const dummyVideos = Array.from({ length: 12 }, (_, i) => ({
  id: i,
  title: `Sample Video Title ${i + 1}`,
  channel: `Channel ${i + 1}`,
  views: `${(i + 1) * 10}K views`,
  time: `${i + 1} day ago`,
  thumbnail: `https://picsum.photos/300/200?random=${i + 1}`,
}));

const Home = () => {
  return (
    <div className="home-container">
      {/* {dummyVideos.map((video) => (
        <div className="video-card" key={video.id}>
          <img className="thumbnail loading" src={video.thumbnail} alt={video.title} />
          <div className="video-info">
            <div className="avatar"></div>
            <div className="video-text">
              <h4 className="title">{video.title}</h4>
              <p className="channel">{video.channel}</p>
              <p className="meta">
                {video.views} • {video.time}
              </p>
            </div>
          </div>
        </div>
      ))} */}
      Home
    </div>
  );
};

export default Home;

