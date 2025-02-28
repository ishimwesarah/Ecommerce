import React from 'react';
import styled from 'styled-components';

// Styled Components
const NotificationContainer = styled.div`
  width: 350px; /* Adjust as needed */
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); /* Slightly stronger shadow */
  padding: 16px;
  position: absolute; /* Or fixed, depending on context */
  top: 40px;       /* Example: Adjust as needed */
  right: 10px;     /* Example: Adjust as needed */
  z-index: 1000;    /* Ensure it's on top of other elements */

  /* Add a subtle border */
  border: 1px solid #eee;
`;

const NotificationHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
`;

const HeaderTitle = styled.h2`
  font-size: 16px;
  font-weight: 600;
  color: #343a40;
`;

const ClearAllButton = styled.button`
  background: none;
  border: none;
  color: #495057;
  cursor: pointer;
  font-size: 12px;
  &:hover {
    text-decoration: underline;
  }
`;

const NotificationItem = styled.div`
  display: flex;
  padding: 12px 0; /* Slightly reduced padding */
  border-bottom: 1px solid #dee2e6;
  &:last-child {
    border-bottom: none;
  }
`;

const Avatar = styled.img`
  width: 32px; /* Slightly smaller avatars */
  height: 32px;
  border-radius: 50%;
  margin-right: 10px; /* Reduced margin */
  object-fit: cover;
`;

const InitialAvatar = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: #c8e6c9;
  color: #43a047;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px; /* Slightly smaller initial text */
  font-weight: bold;
  margin-right: 10px;
`;

const NotificationContent = styled.div`
  flex: 1;
  font-size: 12px; /* Smaller font size */
  color: #495057;
  line-height: 1.3; /* Slightly tighter line height */
`;

const ViewAllButton = styled.button`
  background-color: #ff793f;
  color: white;
  border: none;
  padding: 8px 16px; /* Smaller padding */
  border-radius: 5px;
  cursor: pointer;
  font-size: 12px;
  margin-top: 12px; /* Reduced margin */
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    opacity: 0.8;
  }
  svg {
    margin-left: 6px; /* Reduced margin */
    width: 0.8em;  /* smaller icon */
    height: 0.8em;
  }
`;

const Notifi = ({ isOpen, onClose }) => {
  if (!isOpen) {
    return null; // Don't render if not open
  }

  const notificationsData = [
    {
      id: 1,
      avatar: "https://images.unsplash.com/photo-1500648767791-00d55cc973a8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHVzZXIlMjBwcm9maWxlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
      message: 'Josephine Thompson commented on admin panel " Wow 🥰! this admin looks good and awesome design"',
    },
    {
      id: 2,
      avatar: "D", // Initial for Donoghue
      name: "Donoghue Susan",
      message: 'Hi, How are you? What about our next meeting',
    },
    {
      id: 3,
      avatar: "https://images.unsplash.com/photo-1544005313-94313a526d7e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHVzZXIlMjBwcm9maWxlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
      message: 'Jacob Ginec mentioned you in a post.',
    },
  ];

  return (
    <NotificationContainer>
      <NotificationHeader>
        <HeaderTitle>Notifications</HeaderTitle>
        <ClearAllButton>Clear All</ClearAllButton>
      </NotificationHeader>

      {notificationsData.map((notification) => (
        <NotificationItem key={notification.id}>
          {notification.avatar && (typeof notification.avatar === 'string' && notification.avatar.length === 1) ? (
            <InitialAvatar>{notification.avatar}</InitialAvatar>
          ) : (
            <Avatar src={notification.avatar} alt="User Avatar" />
          )}

          <NotificationContent>
            {notification.name && <strong>{notification.name}</strong>}
            {notification.message}
          </NotificationContent>
        </NotificationItem>
      ))}

      <ViewAllButton>
        View All Notification
        <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-arrow-right" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
        </svg>
      </ViewAllButton>
    </NotificationContainer>
  );
};

export default Notifi;