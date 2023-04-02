import styled from "styled-components";
import { COLORS } from "../constant";

const Quote = ({ by, source, children }) => {
  return (
    <figure>
      <QuoteContent>{children}</QuoteContent>
      <figcaption>
        <Author>
          <SourceLink href={source}>{by}</SourceLink>
        </Author>
      </figcaption>
    </figure>
  );
};

/*
    We want this TextLink to be black
    and underlined when it's inside
    a Quote component.
  */

const QuoteContent = styled.blockquote`
  margin: 20px auto 0;
  background: ${COLORS.gray};
  padding: 16px 20px;
  border-radius: 8px;
  font-style: italic;

  a {
    color: black;
    text-decoration:underline;
  }

  &::before {
    content: "“";
  }

  &::after {
    content: "”";
  }
`;

/* You can safely ignore everything below this point! It doesn't need to change */
const Author = styled.cite`
  display: block;
  text-align: right;
  margin-top: 8px;
`;

const SourceLink = styled.a`
  text-decoration: none;
  color: hsl(0deg 0% 35%);

  &::before {
    content: "—";
  }
`;

export { Quote };
