import { styled } from "styled-components";

export const IptRadio = styled.div`
  display: flex;
  margin-bottom: 1rem;

  label {
    display: block;
    font-weight: bold;
  }


  .input {
    width: 90%;

    input {
      width: 100%;
      height: 35px;
      border: 1px solid #454545;
      border-radius: 4px;
      padding: 0 .5rem;
    }
    
  }
  .radio {
    width: 10%;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    input {
      width: 20px;
      height: 20px;
    }
  }
`