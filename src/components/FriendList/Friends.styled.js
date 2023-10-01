import styled from "styled-components";

export const Status = styled.span`
   width: 10px;
   height: 10px;
   border-radius: 50%;
   margin: auto 15px;
   background: ${({ isOnline }) => {
        if (isOnline) {  
        return"green"
    }
        else {
        return "red" 
     }
  }};
`
//  isOnline === "true" ? "green" : "red" 
