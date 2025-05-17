import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import EmojiPicker from 'emoji-picker-react';
import { FiThumbsUp } from "react-icons/fi";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch, useSelector } from 'react-redux';
import { addReactionsData, postReset } from '../../../features/Posts/postSlice';

const emojiReactions = [
  { name: 'Like', image: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f44d/512.webp', color: '#1877F2' },
  { name: 'Love', image: 'https://fonts.gstatic.com/s/e/notoemoji/latest/2764_fe0f/512.webp', color: '#F33E58' },
  { name: 'Haha', image: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f602/512.webp', color: '#F7B125' },
  { name: 'Wow', image: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f929/512.webp', color: '#F7B125' },
  { name: 'Sad', image: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f62d/512.webp', color: '#F7B125' },
  { name: 'Angry', image: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f92c/512.webp', color: '#E9710F' },
];

const FacebookReaction = ({ onReactionSelect, post_id, likes }) => {
  const [isHovering, setIsHovering] = useState(false);
  const [selectedEmoji, setSelectedEmoji] = useState(null);
  const [showPicker, setShowPicker] = useState(false);
  const hoverTimeoutRef = useRef(null);
  const componentRef = useRef(null);

  const dispatch = useDispatch();
  const { reactionSucess } = useSelector((state) => state.post);
  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    if (reactionSucess) {
      toast.success('Reaction Added!');
      dispatch(postReset());
    }
  }, [reactionSucess, dispatch]);

  const handleMouseEnter = () => {
    clearTimeout(hoverTimeoutRef.current);
    hoverTimeoutRef.current = setTimeout(() => {
      setIsHovering(true);
    }, 300);
  };

  const handleMouseLeave = () => {
    clearTimeout(hoverTimeoutRef.current);
    if (!selectedEmoji && !showPicker) {
      setIsHovering(false);
    }
  };

  const handleEmojiClick = (emoji) => {
    setSelectedEmoji(emoji);
    setIsHovering(false);

    if (!user?._id) {
      toast.error('You must be logged in to react.');
      return;
    }

    const reactionData = {
      user_id: user._id,
      post_id,
      emoji: emoji.name,
    };

    dispatch(addReactionsData(reactionData));
    if (onReactionSelect) {
      onReactionSelect(emoji);
    }
  };

  const handlePickerSelect = (emojiData) => {
    const emojiObj = {
      name: emojiData.names[0],
      image: emojiData.imageUrl,
      color: '#000000',
    };
    handleEmojiClick(emojiObj);
    setShowPicker(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (componentRef.current && !componentRef.current.contains(event.target)) {
        setIsHovering(false);
        setShowPicker(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const isPresent = likes?.find((item) => item?.id === user?._id);

  return (
    <div
      ref={componentRef}
      className="reaction-container p-2 hover:bg-gray-200 transition-all rounded"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}

      style={{ position: 'relative', display: 'inline-block' }}
    >
      <button
        className="reaction-trigger  h"
        style={{
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          fontSize: '16px',
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          gap: '5px',
        }}
      >
        {selectedEmoji ? (
          <>
            <img src={selectedEmoji.image} alt={selectedEmoji.name} width={27} height={27} />
            <span style={{ fontSize: '18px', color: selectedEmoji.color }}>{selectedEmoji.name}</span>
          </>
        ) : (
          <>
            <FiThumbsUp className="text-gray-600" />
            <h6 className="font-semibold text-sm text-gray-600">
              {isPresent?.type || 'Like'}
            </h6>
          </>
        )}
      </button>

      <AnimatePresence>
        {isHovering && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.2 }}
            className="emoji-reactions "
            style={{
              position: 'absolute',
              bottom: '100%',
              left: '50%',
              transform: 'translateX(-50%)',
              background: 'white',
              borderRadius: '50px',
              padding: '8px 12px',
              boxShadow: '0 2px 10px rgba(0,0,0,0.2)',
              display: 'flex',
              zIndex: 1000,
            }}
          >
            {emojiReactions.map((emoji, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.5, y: -10 }}
                className=''
                transition={{ type: 'spring', stiffness: 500 }}
                style={{ margin: '0 6px', cursor: 'pointer', textAlign: 'center' }}
                onClick={() => handleEmojiClick(emoji)}
              >
                <img src={emoji.image} alt={emoji.name} width={28} height={28} />
                <div style={{ fontSize: '10px', color: '#555' }}>{emoji.name}</div>
              </motion.div>
            ))}

            <motion.div
              whileHover={{ scale: 1.1 }}
              style={{
                margin: '0 5px',
                cursor: 'pointer',
                fontSize: '18px',
                display: 'flex',
                alignItems: 'center',
                color: '#65676B',
              }}
              onClick={() => {
                setShowPicker(true);
                setIsHovering(false);
              }}
            >
              <span>+</span>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {showPicker && (
        <div
          style={{
            position: 'absolute',
            bottom: '100%',
            left: '50%',
            transform: 'translateX(-50%)',
            zIndex: 1000,
          }}
        >
          <EmojiPicker
            onEmojiClick={(emojiData) => handlePickerSelect(emojiData)}
            width={300}
            height={350}
            previewConfig={{ showPreview: false }}
          />
        </div>
      )}
    </div>
  );
};

export default FacebookReaction;
