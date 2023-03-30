import styled from "styled-components";
function ContactCard({ avatarSrc, name, email }) {
  return (
    <>
      {" "}
      <Wrapper >
        <Avatar alt="" src={avatarSrc} className="avatar" />
        <Name>{name}</Name>
        <Email>{email}</Email>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.article`
  min-width: 250px;
  border-radius: 32px;
  padding: 24px;
  background: white;
  min-width: 250px;
  max-width: 400px;
  box-shadow: 0px 2px 20px hsl(248deg 53% 40%);
  text-align: center;
  display:block;
  margin: 0 auto;
  margin-top: 64px;
`
const Avatar = styled.img`
    border-radius: 50%;
    width: 128px;
   height: 128px;
   display:block;
   margin:0 auto;
   margin-top: -64px;
   margin-bottom: 22px;
   border: 6px solid white;

   &:hover{
    transform: scale(1.2);
    transition : 350ms ease-out;
    overflow:hidden;
   }
`
const Name = styled.div`
font-size: 1.25rem;
font-weight: 600;
margin-bottom: 0px;
`

const Email = styled.p`
font-size: 1rem;
font-weight: 300;
color: hsl(0deg 0% 40%);
`



export default ContactCard;
