import styled from 'styled-components';
import { ISpinner, CLSpinnerBase } from './CLSpinner';

const CLSpinner = styled(CLSpinnerBase)<ISpinner>`
  .cl-spinner {
      width: 40px;
      height: 40px;
      position: relative;
  }
  .cl-spinner-sm {
      width: 28px !important;
      height: 28px !important;
  }
  .cl-spinner-md {
      width: 80px !important;
      height: 80px !important;
  }
  .cl-spinner-lg {
      width: 120px !important;
      height: 120px !important;
  }

  .cl-spinner-bounce-1, .cl-spinner-bounce-2 {
      width: 100%;
      height: 100%;
      border-radius: 50%;
      opacity: 0.6;
      position: absolute;
      top: 0;
      left: 0;
      -webkit-animation: sk-bounce 2s infinite ease-in-out;
      animation: sk-bounce 2s infinite ease-in-out;
  }
  .cl-spinner-bounce-2 {
      -webkit-animation-delay: -1s;
      animation-delay: -1s;
  }

  .cl-spinner-primary > .cl-spinner-bounce-1, .cl-spinner-bounce-2 {
      background-color: #f53b57;
  }
  .cl-spinner-secondary > .cl-spinner-bounce-1, .cl-spinner-bounce-2 {
      background-color: #8b8b8b;
  }
  .cl-spinner-info > .cl-spinner-bounce-1, .cl-spinner-bounce-2 {
      background-color: #008cff;
  }
  .cl-spinner-success > .cl-spinner-bounce-1, .cl-spinner-bounce-2 {
      background-color: #3ae374;
  }
  .cl-spinner-warning > .cl-spinner-bounce-1, .cl-spinner-bounce-2 {
      background-color: #fffb00;
  }
  .cl-spinner-danger > .cl-spinner-bounce-1, .cl-spinner-bounce-2 {
      background-color: #ff0000;
  }


  @-webkit-keyframes sk-bounce {
      0%,
      100% {
          -webkit-transform: scale(0);
      }
      50% {
          -webkit-transform: scale(1);
      }
  }

  @keyframes sk-bounce {
      0%,
      100% {
          transform: scale(0);
          -webkit-transform: scale(0);
      }
      50% {
          transform: scale(1);
          -webkit-transform: scale(1);
      }
  }
`;

export default CLSpinner;
