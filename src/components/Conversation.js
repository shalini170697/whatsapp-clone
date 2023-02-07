import styled from "styled-components";
import { messagesList } from "../Data";
import { SearchContainer, SearchInput } from "./ContactList";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  flex: 2;
  background-color: #f6f7f8;
`;

const ProfileHeader = styled.div`
  display: flex;
  flex-direction: row;
  background-color: #ededed;
  padding: 14px;
  align-items: center;
  gap: 10px;
`;
const ProfileImage = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
`;

const ChatBox = styled.div`
  display: flex;
  background: #f0f0f0;
  padding: 10px;
  align-items: center;
  bottom: 0;
`;

const EmojiImage = styled.img`
  width: 30px;
  height: 28px;
  opacity: 0.4;
  cursor: Pointer;
`;

const MessageContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const MessageDiv = styled.div`
  display: flex;
  margin: 5px 16px;
  justify-content: ${(props) => (props.isYours ? "flex-end" : "flex-start")};
`;

const Message = styled.div`
  background: ${(props) => (props.isYours ? "#daf8cb" : "white")};
  max-width: 50%;
  background: #daf8cb;
  color: #303030;
  padding: 8px, 10px;
  font-size: 19px;
`;

const Conversation = () => {
  return (
    <Container>
      <ProfileHeader>
        <ProfileImage src="/profile/pic.jpg" />
        Shalini{" "}
      </ProfileHeader>{" "}
      <MessageContainer>
        {" "}
        {messagesList.map((messageData) => (
          <MessageDiv isYours={messageData.senderID === 0}>
            <Message isYours={messageData.senderID === 0}>
              {" "}
              {[messageData.text]}{" "}
            </Message>
          </MessageDiv>
        ))}{" "}
      </MessageContainer>{" "}
      <ChatBox>
        <SearchContainer>
          <EmojiImage src={"/profile/data.svg"} />{" "}
          <SearchInput placeholder="Type a message..." />
        </SearchContainer>{" "}
      </ChatBox>{" "}
    </Container>
  );
};

export default Conversation;
