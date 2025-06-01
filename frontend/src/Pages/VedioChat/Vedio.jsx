import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';
import { io } from 'socket.io-client';
import { useParams } from 'react-router-dom';
import { useEffect, useRef } from 'react';

function randomID(len) {
  let result = '';
  const chars = '12345qwertyuiopasdfgh67890jklmnbvcxzMNBVCZXASDQWERTYHGFUIOLKJP';
  for (let i = 0; i < (len || 5); i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
}

function getUrlParams(url = window.location.href) {
  let urlStr = url.split('?')[1];
  return new URLSearchParams(urlStr);
}

export default function VideoCallZego() {
  const socketRef = useRef();
  const containerRef = useRef();
  const { sender_id, receiver_id } = useParams();

  useEffect(() => {
    socketRef.current = io('http://localhost:8000');

    socketRef.current.on('connect', () => {
      console.log('Socket connected:', socketRef.current.id);
      myMeeting();
    });

    return () => socketRef.current.disconnect();
  }, []);

  const myMeeting = async () => {
    const roomID = getUrlParams().get('roomID') || randomID(5);

    const appID = 1232350199;
    const serverSecret = '9d54690bdbb7c091bea6ec8af5caa5b9';
    const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
      appID,
      serverSecret,
      roomID,
      randomID(5),
      randomID(5)
    );

    const zp = ZegoUIKitPrebuilt.create(kitToken);

    const shareableLink =
      window.location.protocol +
      '//' +
      window.location.host +
      window.location.pathname +
      '?roomID=' +
      roomID;

    socketRef.current.emit('Accept-calling', {
      shareableLink,
      sender_id,
      receiver_id,
    });

    zp.joinRoom({
      container: containerRef.current,
      sharedLinks: [
        {
          name: 'Personal link',
          url: shareableLink,
        },
      ],
      scenario: {
        mode: ZegoUIKitPrebuilt.VideoConference,
      },
    });
  };

  return (
    <div
      className="myCallContainer"
      ref={containerRef}
      style={{ width: '100vw', height: '100vh' }}
    ></div>
  );
}
