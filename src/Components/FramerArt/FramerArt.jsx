import styled from "styled-components";
import GlobalStyles from "../../GlobalStyles/GlobalStyles";

function WallArt({ src, alt, caption, width }) {
  const aspectRatio = 3 / 2;
  const height = width * aspectRatio;

  return (
    <>
      <Wrapper>
        <Character src={src} alt={alt} width={width} height={height} />
        <Caption>{caption}</Caption>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  padding: 16px;
  background: white;
  box-shadow: 0 2.7px 1.9px -2px rgba(0, 0, 0, 0.028),
    0 6.4px 6.1px -2px rgba(0, 0, 0, 0.046),
    0 12px 13.2px -2px rgba(0, 0, 0, 0.061),
    0 21.4px 24.5px -2px rgba(0, 0, 0, 0.073),
    0 -15px 40px -20px rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  max-width: max-content;
  margin: 24px auto;
  margin-top: ;
  position: relative;
  isolation: isolate;
  overflow: hidden;
`;

const Character = styled.img`
  display: block;
  border-radius: 4px;
  margin: auto;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
`;
const Caption = styled.p`
  position: absolute;
  left: 16px;
  right: 16px;
  bottom: 0px;
  text-align: center;
  padding: 8px;
  background: grey;
  backdrop-filter: blur(10px);
`;

export { WallArt };
