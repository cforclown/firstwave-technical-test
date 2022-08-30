import styled from 'styled-components';
import { WINDOW_MD_THRESHOLD, WINDOW_SM_THRESHOLD } from '../../../Constant/Common';

import FormInputBase from './FormInput';

const FormInput = styled(FormInputBase)`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  max-width: 100%;

  .form-input-label {
    margin-bottom: 6px;
    font-size: 14px;

    .required-star {
      color: red;
    }
  }

  input {
    width: 60%;
    @media screen and (max-width: ${WINDOW_MD_THRESHOLD}px) {
      width: 80%;
    }
    @media screen and (max-width: ${WINDOW_SM_THRESHOLD}px) {
      width: 100%;
    }
    font-size: 14px;
    padding: 0.4rem;
    display: inline-block;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    -ms-box-sizing: border-box;
    box-shadow: 0 0 2px 0 rgba(49, 114, 255, 0.2);
  }
  input:focus {
    box-shadow: 0 0 8px 0 rgba(49, 114, 255, 0.5);
    outline: 2px solid rgba(49, 114, 255, 0.8);
  }
  input::-webkit-input-placeholder {
    opacity: 1;
    transition: opacity 0.25s ease-out;
  }
  input:hover::-webkit-input-placeholder, 
  input:focus::-webkit-input-placeholder {
    opacity: 0;
  }
`;
FormInput.displayName = 'FormInput';

export default FormInput;
