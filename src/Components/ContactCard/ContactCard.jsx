import styled from "styled-components";
function ContactCard({ avatarSrc, name, email }) {
  return (
    <>
      {" "}
      <Wrapper class="contact-card">
        <img alt="" src={avatarSrc} className="avatar" />
        <h2>{name}</h2>
        <p>{email}</p>
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
  max-width: 300px;
  box-shadow: 0px 2px 20px hsl(248deg 53% 40%);
  text-align: center;
`

/**
 * 
.contact-card {
  min-width: 250px;
  border-radius: 32px;
  padding: 24px;
  background: white;
  box-shadow:
    0px 2px 20px hsl(248deg 53% 40%);
  text-align: center;
}

.contact-card .avatar {
  display: block;
  width: 128px;
  height: 128px;
  border-radius: 50%;
  margin-left: auto;
  margin-right: auto;a
  margin-top: -64px;
  margin-bottom: 16px;
  border: 6px solid white;
}

.contact-card h2 {
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0px;
}

.contact-card p {
  font-size: 1rem;
  font-weight: 300;
  color: hsl(0deg 0% 40%);
}

 */

export default ContactCard;
