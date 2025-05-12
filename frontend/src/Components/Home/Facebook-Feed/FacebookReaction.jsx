import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import EmojiPicker from 'emoji-picker-react';
import { TbThumbUp } from 'react-icons/tb';

const emojiReactions = [
  { name: 'Like', image: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f44d/512.webp', color: '#1877F2' }, // Blue
  { name: 'Love', image: 'https://fonts.gstatic.com/s/e/notoemoji/latest/2764_fe0f/512.webp', color: '#F33E58' }, // Red
  { name: 'Haha', image: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f602/512.webp', color: '#F7B125' }, // Yellow
  { name: 'Wow', image: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f929/512.webp', color: '#F7B125' }, // Yellow
  { name: 'Sad', image: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f62d/512.webp', color: '#F7B125' }, // Yellow
  { name: 'Angry', image: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f92c/512.webp', color: '#E9710F' }, // Orange
];


const FacebookReaction = ({ onReactionSelect }) => {
  const [isHovering, setIsHovering] = useState(false);
  const [selectedEmoji, setSelectedEmoji] = useState(null);
  const [showPicker, setShowPicker] = useState(false);
  const hoverTimeoutRef = useRef(null);
  const componentRef = useRef(null);

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
    if (onReactionSelect) {
      onReactionSelect(emoji);
    }
  };

  const handlePickerSelect = (emojiData) => {
    const emojiObj = { name: emojiData.names[0], image: emojiData.imageUrl };
    setSelectedEmoji(emojiObj);
    setShowPicker(false);
    if (onReactionSelect) {
      onReactionSelect(emojiObj);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (componentRef.current && !componentRef.current.contains(event.target)) {
        setIsHovering(false);
        setShowPicker(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div
      ref={componentRef}
      className="reaction-container"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ position: 'relative', display: 'inline-block' }}
    >
      <button
        className="reaction-trigger"
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
 <> <TbThumbUp size={20} /> Like</>
)}

      </button>

      <AnimatePresence>
        {isHovering && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.2 }}
            className="emoji-reactions"
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
                transition={{ type: 'spring', stiffness: 500 }}
                style={{
                  margin: '0 6px',
                  cursor: 'pointer',
                  textAlign: 'center',
                }}
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
        <div style={{ position: 'absolute', bottom: '100%', left: '50%', transform: 'translateX(-50%)', zIndex: 1000 }}>
          <EmojiPicker
            onEmojiClick={handlePickerSelect}
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
