import styled from 'styled-components';
import { WINDOW_MD_THRESHOLD, WINDOW_SM_THRESHOLD } from '../../Constant/Common';
import { DynamicFormBase } from './DynamicForm';

const DynamicForm = styled(DynamicFormBase)`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  @media screen and (max-width: ${WINDOW_SM_THRESHOLD}px) {
    flex-direction: column;
  }

  .section-panel {
    width: 25%;
    @media screen and (max-width: ${WINDOW_MD_THRESHOLD}px) {
      width: 15%;
    }
    @media screen and (max-width: ${WINDOW_SM_THRESHOLD}px) {
      width: 100%;
    }
  }

  .fields-panel {
    width: 100%
  }
`;
DynamicForm.displayName = 'DynamicForm';

export default DynamicForm;
