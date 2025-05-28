import React, { useState } from 'react';
import {
  Box,
  Drawer,
  Avatar,
  Typography,
  Divider,
  TextField,
  IconButton,
  Badge,
} from '@mui/material';
import {
  FaSmile,
  FaThumbsUp,
  FaPaperclip,
  FaImage,
  FaGift,
  FaEllipsisH,
  FaMicrophone,
} from 'react-icons/fa';
import { BsChatDots, BsSend, BsEmojiSmile, BsThreeDotsVertical } from 'react-icons/bs';
import { IoMdClose } from 'react-icons/io';

export default function MessagePanel({ myInfo, status = "active"  }) {
  const [open, setOpen] = useState(false);
  const [focused, setFocused] = useState(false);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([
    { id: 1, text: "Hey there!", sender: "them", time: "10:30 AM" },
    { id: 2, text: "Hi! How are you?", sender: "me", time: "10:31 AM" },
  ]);

  const toggleDrawer = (newOpen) => () => setOpen(newOpen);

  const handleSendMessage = () => {
    if (message.trim()) {
      const newMessage = {
        id: messages.length + 1,
        text: message,
        sender: "me",
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages([...messages, newMessage]);
      setMessage("");
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <Box sx={{ position: 'relative' }}>
      <button
        onClick={toggleDrawer(true)}
        className="bg-blue-50 hover:bg-blue-100 cursor-pointer rounded-full px-4 py-2 text-blue-600 font-semibold whitespace-nowrap flex items-center gap-2 shadow-sm"
      >
        <BsChatDots className="text-blue-600" />
        Message
      </button>

      <Drawer
        anchor="right"
        open={open}
        onClose={toggleDrawer(false)}
        PaperProps={{
          sx: {
            width: '380px',
            height: '580px',
            borderRadius: '12px 0 0 12px',
            top: "auto",
            bottom: "20px",
            right: '20px',
            backgroundColor: '#fff',
            boxShadow: '0 5px 15px rgba(0, 0, 0, 0.15)',
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden',
            border: '1px solid #e5e7eb',
          },
        }}
      >
        {/* Header */}
        <Box sx={{ 
          display: 'flex', 
          alignItems: 'center', 
          p: 2, 
          bgcolor: '#0084ff',
          color: 'white',
        }}>
          <Badge
            overlap="circular"
            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
            variant="dot"
            color={status === "active" ? "success" : "default"}
            sx={{ 
              '& .MuiBadge-badge': {
                border: '2px solid white',
              }
            }}
          >
            <Avatar
              src="https://randomuser.me/api/portraits/men/32.jpg"
              alt={myInfo.name}
              sx={{ width: 40, height: 40, mr: 2 }}
            />
          </Badge>
          <Box sx={{ flexGrow: 1 }}>
            <Typography variant="subtitle1" fontWeight="600" fontSize="16px">
              {myInfo.name}
            </Typography>
            <Typography variant="caption" sx={{ opacity: 0.9 }}>
              {status === "active" ? "Active now" : "Offline"}
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', gap: 1 }}>
            <IconButton sx={{ color: 'white', p: 0.5 }}>
              <FaEllipsisH size={16} />
            </IconButton>
            <IconButton onClick={toggleDrawer(false)} sx={{ color: 'white', p: 0.5 }}>
              <IoMdClose size={20} />
            </IconButton>
          </Box>
        </Box>

        {/* Message Area */}
        <Box sx={{ 
          flexGrow: 1, 
          p: 2, 
          bgcolor: '#f0f2f5', 
          overflowY: 'auto',
          display: 'flex',
          flexDirection: 'column',
          gap: 1,
        }}>
          {messages.length === 0 ? (
            <Box sx={{ 
              display: 'flex', 
              flexDirection: 'column', 
              alignItems: 'center', 
              justifyContent: 'center', 
              height: '100%',
              color: '#65676b'
            }}>
              <Avatar
                src="https://randomuser.me/api/portraits/men/32.jpg"
                alt={username}
                sx={{ width: 80, height: 80, mb: 2 }}
              />
              <Typography variant="h6" fontWeight="600">
                {username}
              </Typography>
              <Typography variant="body2">
                You're friends on Facebook
              </Typography>
              <Typography variant="caption">
                Send a message to get started
              </Typography>
            </Box>
          ) : (
            messages.map((msg) => (
              <Box 
                key={msg.id}
                sx={{
                  alignSelf: msg.sender === 'me' ? 'flex-end' : 'flex-start',
                  maxWidth: '70%',
                  mb: 1,
                }}
              >
                <Box
                  sx={{
                    bgcolor: msg.sender === 'me' ? '#0084ff' : '#e4e6eb',
                    color: msg.sender === 'me' ? 'white' : 'black',
                    p: 1.5,
                    borderRadius: msg.sender === 'me' 
                      ? '18px 18px 0 18px' 
                      : '18px 18px 18px 0',
                    boxShadow: '0 1px 2px rgba(0,0,0,0.1)',
                  }}
                >
                  <Typography variant="body2">{msg.text}</Typography>
                </Box>
                <Typography 
                  variant="caption" 
                  sx={{ 
                    display: 'block',
                    textAlign: msg.sender === 'me' ? 'right' : 'left',
                    color: '#65676b',
                    mt: 0.5,
                    px: 1,
                  }}
                >
                  {msg.time}
                </Typography>
              </Box>
            ))
          )}
        </Box>

        {/* Input Area */}
        <Box sx={{ 
          p: 2, 
          bgcolor: 'white', 
          borderTop: '1px solid #e5e7eb',
          display: 'flex', 
          alignItems: 'center', 
          gap: 1 
        }}>
          <IconButton sx={{ color: '#65676b' }}>
            <FaPaperclip size={18} />
          </IconButton>
          <IconButton sx={{ color: '#65676b' }}>
            <FaImage size={18} />
          </IconButton>
          <IconButton sx={{ color: '#65676b' }}>
            <FaGift size={18} />
          </IconButton>
          
          <TextField
            variant="outlined"
            size="small"
            placeholder="Aa"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            onKeyPress={handleKeyPress}
            multiline
            maxRows={4}
            sx={{
              bgcolor: '#f0f2f5',
              borderRadius: '20px',
              flexGrow: 1,
              '& .MuiOutlinedInput-root': {
                borderRadius: '20px',
                '& fieldset': { borderColor: 'transparent' },
                '&:hover fieldset': { borderColor: 'transparent' },
                '&.Mui-focused fieldset': { borderColor: 'transparent' },
              },
              '& .MuiInputBase-input': {
                py: 1,
              },
            }}
          />
          
          {message ? (
            <IconButton 
              onClick={handleSendMessage}
              sx={{ 
                color: 'white', 
                bgcolor: '#0084ff',
                '&:hover': { bgcolor: '#0073e6' },
              }}
            >
              <BsSend size={16} />
            </IconButton>
          ) : (
            <IconButton sx={{ color: '#65676b' }}>
              <BsEmojiSmile size={20} />
            </IconButton>
          )}
        </Box>
      </Drawer>
    </Box>
  );
}