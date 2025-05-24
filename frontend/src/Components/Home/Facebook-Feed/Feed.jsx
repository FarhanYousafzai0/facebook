import React, { useEffect, useState } from "react";
import { FaGlobe, FaRegComment, FaUser } from "react-icons/fa";
import { PiShareFat } from "react-icons/pi";
import FacebookReaction from "./FacebookReaction";
import axios from "axios";
import { emojiMap } from "./emojis";
import { Avatar } from '@mui/material';
import moment from 'moment'
import CommentsModel from "./CommentsModel";
import { useSelector } from "react-redux";

const Feed = ({
  background, caption, _id, user_id, image, comments, createdAt
}) => {
  const [likes, setLikes] = useState([]);
  const [reactionSummary, setReactionSummary] = useState([]);
  const { post } = useSelector((state) => state.post);

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
  }, [post]);

  return (
    <div className="bg-white rounded-lg shadow mb-4">
      {/* Post Header */}
      <div className="p-4">
        <div className="flex justify-between items-center mb-2">
          <div className="flex items-center space-x-2">
            <Avatar
              sx={{ width: 40, height: 40 }}
              alt={user_id?.name || "User Avatar"}
              src={user_id?.profilePic || "/static/images/avatar/1.jpg"}
            />
            <div>
              <p className="font-medium">{user_id?.name}</p>
              <div className="flex items-center text-xs text-gray-500">
                <span>{moment(createdAt).fromNow()}</span>
                <span className="mx-1">·</span>
                <FaGlobe className="text-xs" />
              </div>
            </div>
          </div>
          <button className="text-gray-500 hover:text-gray-700">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
            </svg>
          </button>
        </div>

        {/* Post Content */}
        {(background.startColor === "#ffffff" || background.image !== "") && (
          <p className="text-gray-900 mb-3 capitalize">{caption}</p>
        )}

        {/* Background/Image */}
        {(background.startColor !== "#ffffff" || background.image !== "") && (
          <div
            className="h-[400px] relative rounded-lg overflow-hidden mb-3"
            style={{
              background: background.image || image
                ? `url(${background.image || image})`
                : `linear-gradient(${background?.startColor}, ${background?.endColor})`,
              backgroundSize: "cover",
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
        <div className="flex justify-between items-center px-2 py-1 text-gray-500 text-sm">
          <div className="flex items-center">
            {likes.length > 0 ? (
              <>
                <div className="flex">
                  {reactionSummary.map((reaction, index) => {
                    const emoji = emojiMap[reaction.type];
                    if (!emoji) return null;

                    return (
                      <span
                        key={reaction.type}
                        className={`relative z-${50 - index} -ml-2`}
                        title={`${reaction.type} (${reaction.count})`}
                      >
                        <picture>
                          <source srcSet={emoji.webp} type="image/webp" />
                          <img
                            src={emoji.gif}
                            alt={emoji.alt}
                            width="18"
                            height="18"
                            className="rounded-full"
                          />
                        </picture>
                      </span>
                    );
                  })}
                </div>
                <span className="ml-1">{likes.length}</span>
              </>
            ) : (
              <span>No reactions yet</span>
            )}
          </div>
          <div className="hover:underline cursor-pointer">
            {comments.length} comments
          </div>
        </div>

        {/* Action Buttons */}
        <div className="border-t border-b border-gray-200 py-1 flex">
          <div className="flex-1 flex items-center justify-center text-gray-500 hover:bg-gray-100 py-1 rounded font-medium cursor-pointer">
            <FacebookReaction post_id={_id} likes={likes} />
           
          </div>
          <CommentsModel 
            userInfo={user_id} 
            background={background} 
            comments={comments} 
            Commentcaption={caption} 
            image={image} 
            post_id={_id}
            trigger={
              <div className="flex-1 flex items-center justify-center text-gray-500 hover:bg-gray-100 py-1 rounded font-medium cursor-pointer">
                <FaRegComment className="mr-1" />
                Comment
              </div>
            }
          />
          <div className="flex-1 flex items-center justify-center text-gray-500 hover:bg-gray-100 py-1 rounded font-medium cursor-pointer">
            <PiShareFat className="mr-1" />
            Share
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feed;