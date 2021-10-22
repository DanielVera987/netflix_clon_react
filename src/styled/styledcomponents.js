import styled from "styled-components";
import { InputBase } from "@material-ui/core";

export const NetflixInput = styled(InputBase)`
  z-index: 30;
  background: #ffffff;
  padding: 21px;
  height: 25px;
  border-radius: 5px;
  border: none;
`;

const handleWidth = (wide) => {
  switch (wide) {
    case "fullWidth":
      return "100%";
    case "medium":
      return "260px";
    default:
      return "160px";
  }
};

export const NetflixButton = styled.button`
  background-color: ${(props) =>
    props.color === "gray" ? "lightgray" : "red"};
  padding: 10px;
  z-index: 15;
  color: #fff;
  border-radius: ${(props) => (props.radius ? "5px" : null)};
  text-tranform: inherit;
  font-size: 1.1rem;
  border: none;
  outline: none;
  cursor: pointer;
  width: ${(props) => handleWidth(props.wide)};
`;
