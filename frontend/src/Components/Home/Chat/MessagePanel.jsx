import React, { useState, useEffect, useRef } from 'react';
import {
  Box,
  Drawer,
  Avatar,
  Typography,
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
} from 'react-icons/fa';
import { BsChatDots, BsSend, BsEmojiSmile } from 'react-icons/bs';
import { IoMdClose } from 'react-icons/io';
import { io } from 'socket.io-client';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

export default function MessagePanel({ myInfo, status = "active" }) {
  const [open, setOpen] = useState(false);
  const [focused, setFocused] = useState(false);
  const [message, setMessage] = useState("");
  const [sentMessages, setSentMessages] = useState([]);
  const [receivedMessages, setReceivedMessages] = useState([]);
  const socketRef = useRef(null);
  const { user } = useSelector((state) => state.auth);

  const toggleDrawer = (newOpen) => () => setOpen(newOpen);

  useEffect(() => {
    socketRef.current = io('http://localhost:8000');
    return () => socketRef.current.disconnect();
  }, []);

  const handleSendMessage = () => {
    if (message.trim() !== "") {
      const newMessage = {
        sent: true,
        time: Date.now(),
        message,
        sender_id: user?._id,
        receiver_id: myInfo._id,
      };
      socketRef.current.emit('Messenger', newMessage);
      setSentMessages((prev) => [...prev, newMessage]);
      setMessage("");
    }
  };

  useEffect(() => {
    socketRef.current.on('received-message', (data) => {
      if (data?.receiver_id === user?._id) {
        const newMessage = {
          sent: false,
          time: Date.now(),
          message: data?.message,
        };
        setReceivedMessages((prev) => [...prev, newMessage]);
      }
    });
  }, []);

  const allMessages = [...sentMessages, ...receivedMessages].sort((a, b) => a.time - b.time);



  // Hanling Vedio-Call
  const handleVedioCall = ()=>{
    socketRef.current.emit("calling",{sender_id:user?._id,receiver_id:myInfo._id,sender_name:user?.name })
     
  }


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
        PaperProps={{
          sx: {
            width: '380px',
            height: '580px',
            borderRadius: '12px 0 0 12px',
            position: 'absolute',
            bottom: 0,
            right: 0,
            backgroundColor: 'white',
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
            sx={{ '& .MuiBadge-badge': { border: '2px solid white' } }}
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
<Link
  target="_blank"
  onClick={handleVedioCall}
  to={`/video-call/${user?._id}/${myInfo._id}`}
>            <IconButton sx={{ color: 'white', p: 0.5 }} title="Video Call">
              <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17 10.5V7c0-1.1-.9-2-2-2H5C3.9 5 3 5.9 3 7v10c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2v-3.5l4 4v-11l-4 4z" />
              </svg>
            </IconButton>
            
            </Link>
            <IconButton sx={{ color: 'white', p: 0.5 }} title="Audio Call">
              <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20 15.5c-1.25 0-2.45-.2-3.57-.57-.36-.12-.77-.02-1.05.26l-2.2 2.2c-3.25-1.7-5.9-4.34-7.6-7.6l2.2-2.2c.28-.28.38-.69.26-1.05C8.7 6.45 8.5 5.25 8.5 4c0-.55-.45-1-1-1H4C3.45 3 3 3.45 3 4c0 10.5 8.5 19 19 19 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1z" />
              </svg>
            </IconButton>
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
          {allMessages.length === 0 ? (
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
                alt={myInfo.name}
                sx={{ width: 80, height: 80, mb: 2 }}
              />
              <Typography variant="h6" fontWeight="600">
                {myInfo.name}
              </Typography>
              <Typography variant="body2">
                You're friends on Facebook
              </Typography>
              <Typography variant="caption">
                Send a message to get started
              </Typography>
            </Box>
          ) : (
            allMessages.map((msg, index) => (
              <Box
                key={index}
                sx={{
                  alignSelf: msg.sent ? 'flex-end' : 'flex-start',
                  maxWidth: '70%',
                  mb: 1,
                }}
              >
                <Box
                  sx={{
                    bgcolor: msg.sent ? '#0084ff' : '#e4e6eb',
                    color: msg.sent ? 'white' : 'black',
                    p: 1.5,
                    borderRadius: msg.sent
                      ? '18px 18px 0 18px'
                      : '18px 18px 18px 0',
                    boxShadow: '0 1px 2px rgba(0,0,0,0.1)',
                  }}
                >
                  <Typography variant="body2">{msg.message}</Typography>
                </Box>
                <Typography
                  variant="caption"
                  sx={{
                    display: 'block',
                    textAlign: msg.sent ? 'right' : 'left',
                    color: '#65676b',
                    mt: 0.5,
                    px: 1,
                  }}
                >
                  {new Date(msg.time).toLocaleTimeString()}
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
          <IconButton sx={{ color: '#65676b' }}>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/4/48/GIF_icon.png"
              width={18}
              height={18}
              alt="GIF"
            />
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
