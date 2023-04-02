import styled from "styled-components";


const BtnWrapper = styled.button`
  font-family: "Roboto", san-serif;
  border-radius: var(--borderRadius);
  font-size: var(--fontSize);
  padding: var(--padding);
  border: none;
  outline: ${COLORS.primary};
`;

const SpookyButton = styled(BtnWrapper)`
  font-family: 'Spooky Halloween Font';
  background-color: orange;
  color: black;
`;
export default SpookyButton