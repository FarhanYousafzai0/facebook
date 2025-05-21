import React, { useEffect, useState } from "react";
import { FaGlobe, FaRegComment, FaUser } from "react-icons/fa";
import { PiShareFat } from "react-icons/pi";
import FacebookReaction from "./FacebookReaction";
import axios from "axios";
import { emojiMap } from "./emojis";
import CommentsModel from "./CommentsModel";

const Feed = ({ background, caption, _id, user_id, image,comments}) => {
  const [likes, setLikes] = useState([]);
  const [reactionSummary, setReactionSummary] = useState([]);

  const handleGetLikes = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8000/api/post/get-reactions/${_id}`
      );
      setLikes(response?.data?.likes || []);
      setReactionSummary(response?.data?.reactionSummary || []);
    } catch (error) {
      console.error("Error fetching reactions:", error);
    }
  };

  useEffect(() => {
    handleGetLikes();
  }, []);

  return (
    <div className="shadow-lg xl:w-[70%] mx-auto lg:w-[80%] md:w-[90%]  w-[95%] bg-white rounded-md my-2">
      {/* User Info */}
      <div className="flex p-3 justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-[45px] h-[45px] bg-gray-200 border-gray-300 rounded-full border flex justify-center items-center">
            <FaUser size={25} className="text-gray-600" />
          </div>
          <div>
            <h6 className="font-semibold text-sm"></h6>
            <div className="flex items-center gap-1 text-gray-500 text-sm">
              <span>6h</span>
              <span className="h-[2px] w-[2px] bg-gray-500 rounded-full" />
              <FaGlobe />
            </div>
          </div>
        </div>
      </div>

      {/* Caption */}
      {(background.startColor === "#ffffff" || background.image !== "") && (
        <p className="text-gray-900 p-3 my-2 capitalize">{caption}</p>
      )}

      {/* Background/Image */}
      {(background.startColor !== "#ffffff" || background.image !== "") && (
        <div
          className="h-[400px] relative"
          style={{
            background: background.image || image
              ? `url(${background.image || image})`
              : `linear-gradient(${background?.startColor}, ${background?.endColor})`,
            backgroundSize: "contain",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <p className="text-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-3 text-white capitalize text-4xl">
            {caption}
          </p>
        </div>
      )}

      {/* Reactions */}
      <div className="p-3 text-gray-600 flex items-center gap-1 text-sm">
        {likes.length > 0 ? (
          <>
            {reactionSummary.map((reaction, index) => {
              const emoji = emojiMap[reaction.type];
              if (!emoji) return null;

              return (
                <span
                  key={reaction.type}
                  className={`relative z-${50 - index} -ml-2 animate-shake`}
                  style={{ animationDuration: "0.5s" }}
                  title={`${reaction.type} (${reaction.count})`}
                >
                  <picture>
                    <source srcSet={emoji.webp} type="image/webp" />
                    <img
                      src={emoji.gif}
                      alt={emoji.alt}
                      width="22"
                      height="22"
                      className="rounded-full"
                    />
                  </picture>
                </span>
              );
            })}
            <span className="ml-2">{likes.length}</span>
          </>
        ) : (
          <span>No reactions yet</span>
        )}
      </div>

      <hr className="bg-gray-300 h-[1px] border-0" />

      {/* Buttons */}
      <div className="flex justify-around items-center p-3">
        <div className="flex gap-2 items-center w-full cursor-pointer hover:bg-gray-100 py-2 rounded-md justify-center">
          <FacebookReaction post_id={_id} likes={likes} />
        </div>
        <CommentsModel background={background} comments={comments} Commentcaption={caption} image={image} post_id={_id}  />
        <div className="flex gap-2 items-center w-full cursor-pointer hover:bg-gray-100 py-2 rounded-md justify-center">
          <PiShareFat className="text-gray-600" />
          <h6 className="font-semibold text-sm text-gray-600">Share</h6>
        </div>
      </div>
    </div>
  );
};

export default Feed;
