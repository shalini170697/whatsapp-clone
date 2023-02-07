import styled from "styled-components";
import { contactList } from "../Data";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  flex: 0.8;
`;
const ProfileInfoDiv = styled.div`
  display: flex;
  flex-direction: row;
  background: #ededed;
  padding: 15px;
`;
const ProfileImage = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 70%;
`;
const SearchBox = styled.div`
  background: #f6f6f6;
  padding: 10px;
`;
export const SearchContainer = styled.div`
  display: flex;
  flex-direction: row;
  background: white;
  border-radius: 16px;
  width: 100%;
  padding: 20px 0;
`;
const SearchIcon = styled.img`
  width: 30px;
  height: 25px;
  padding-left: 10px;
`;
export const SearchInput = styled.input`
  width: 100%;
  outline: none;
  border: none;
  padding-left: 15px;
  font-size: 17px;
`;
const ContactItem = styled.div`
  display: flex;
  flex-direction: row;
  border-bottom: 5px solid #f2f2f2;
  background: white;
  curser: Pointer;
  padding: 15px;
`;

const ProfileIcon = styled(ProfileImage)`
  width: 38px;
  height: 30px;
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 0 10px;
`;

const ContactName = styled.div`
  font-size: 14px;
  color: black;
  width: 100%;
`;

const MessageText = styled.span`
  width: 30%;
  font-size: 11px;
  margin: 2px;
  color: rgba(0, 0, 0, 0.8);
`;

const ContactComponent = (props) => {
  const { userData } = props;
  return (
    <ContactItem>
      <ProfileIcon src={userData.profilePic} />{" "}
      <ContactInfo>
        <ContactName> {userData.name} </ContactName>{" "}
        <MessageText> Hello </MessageText>{" "}
      </ContactInfo>{" "}
      <MessageText> 04: 43 pm </MessageText>{" "}
    </ContactItem>
  );
};

function ContactList() {
  return (
    <Container>
      <ProfileInfoDiv>
        <ProfileImage src="/profile/pic2.jpg" />
      </ProfileInfoDiv>{" "}
      <SearchBox>
        <SearchContainer>
          <SearchIcon src="/search-icon.svg" />
          <SearchInput placeholder="Search or start new chat" />
        </SearchContainer>{" "}
      </SearchBox>{" "}
      {contactList.map((userData) => (
        <ContactComponent userData={userData} />
      ))}{" "}
    </Container>
  );
}

export default ContactList;
