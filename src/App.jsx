import GlobalStyles from "./GlobalStyles/GlobalStyles";
import ContactCard from "./Components/ContactCard/ContactCard";
import styled from "styled-components";
import AI from "./assets/img/AI.png";
import { IconButton } from "./Components/IconButton/IconButton";
import { Map, Save, ShoppingCart } from "react-feather";

function App() {
  return (
    <>
      {" "}
      <div>
        {/* <LoginForm /> */}
        <ContactCard avatarSrc={AI} name={"AI"} email={"AI@gmail.com"} />
      </div>
      <GroupWrapper>
        <IconButton isCurrent icon={<Map />}>
          Navigation
        </IconButton>
        <IconButton icon={<Save />}>Save Route</IconButton>
        <IconButton icon={<ShoppingCart />}>View Cart</IconButton>
      </GroupWrapper>
      <GlobalStyles />
    </>
  );
}

const GroupWrapper = styled.div`
  margin-top:8px;
  display: flex;
  gap: 8px;
  justify-content: center;
  padding :2rem;
`;

export default App;