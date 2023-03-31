import styled from "styled-components";
import { Map, Save, ShoppingCart } from "react-feather";

function IconButton({ icon, children, isCurrent, ...delegated }) {
  return (
   
      <ButtonWrapper {...delegated}>
        <Icon isCurrent={isCurrent}>{icon}</Icon>
        {children}
      </ButtonWrapper>
 
  );
}

const ButtonWrapper = styled.button`
  background: white;
  border-radius: 8px;
  border: 2px solid hsl(0deg 0% 80%);
  width: 90px;
  height: 90px;
`;

const Icon = styled.span`
  display: block;
  color: ${(props) => props.isCurrent && "deeppink"};

  &:hover {
    color: ${(props) => props.isCurrent && "slateblue"};
    transition: 200ms 100ms;
  }
`;

const GroupWrapper = styled.div`
  margin-top: 8px;
  display: flex;
  flex-direction:colum;
  gap: 8px;
  justify-content: center;
  padding: 2rem;
`;

export { IconButton };
