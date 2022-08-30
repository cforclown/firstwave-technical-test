import styled from 'styled-components';
import { FormBase } from './Form';

const Form = styled(FormBase)`
  position: relative;
  padding: 1rem 1.4rem;

  .form-header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 24px;

    .form-header-title {
      font-size: 20px;
      font-weight: bold;
    }

    .form-action {
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      align-items: center;
    }
  }

  .form-validation-error {
    margin-top: 4px;
    margin-bottom: 0;
    font-size: 13px;
    font-weight: bold;
    color: red;
  }
`;
Form.displayName = 'DataTable';

export default Form;
