import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import EmojiPicker from 'emoji-picker-react';
import { TbThumbUp } from 'react-icons/tb';

const FacebookReaction = ({ onReactionSelect }) => {
  const [isHovering, setIsHovering] = useState(false);
  const [selectedEmoji, setSelectedEmoji] = useState(null);
  const [showPicker, setShowPicker] = useState(false);
  const hoverTimeoutRef = useRef(null);
  const componentRef = useRef(null);

  const emoji = ['👍', '❤️', '😂', '😮', '😢', '😠'];

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
    setSelectedEmoji(emojiData.emoji);
    setShowPicker(false);
    if (onReactionSelect) {
      onReactionSelect(emojiData.emoji);
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
        }}
      >
        {selectedEmoji ? (
          <span style={{ fontSize: '18px' }}>{selectedEmoji}</span>
        ) : (
          <TbThumbUp size={20} />
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
              padding: '5px 10px',
              boxShadow: '0 2px 10px rgba(0,0,0,0.2)',
              display: 'flex',
              zIndex: 1000,
            }}
          >
            {commonEmojis.map((emoji, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.5, y: -10 }}
                transition={{ type: 'spring', stiffness: 500 }}
                style={{
                  margin: '0 5px',
                  cursor: 'pointer',
                  fontSize: '24px',
                  lineHeight: 1,
                }}
                onClick={() => handleEmojiClick(emoji)}
              >
                {emoji}
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
