import GlobalStyles from "./GlobalStyles/GlobalStyles";
import ContactCard from "./Components/ContactCard/ContactCard";
import AI from "./assets/img/AI.png";
import { Quote } from "./Components/TrueLink/TrueLink";
import styled from "styled-components"


function App() {
  return (
    <>
      {" "}
      <div>
        <ContactCard avatarSrc={AI} name={"AI"} email={"AI@gmail.com"} />
      </div>
      <div>
        <Quote by="Johnnie" source="/">
          This quote <TextLink href="/">contains a link</TextLink>!
        </Quote>
        <p>
          This paragraph <TextLink href="/">contains a link</TextLink>!
        </p>
      </div>
      <GlobalStyles />
    </>
  );
}
const TextLink = styled.a`
  color: blue;
  text-decoration: none;
`;
export default App;
