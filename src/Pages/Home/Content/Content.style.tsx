import styled from 'styled-components';
import { WINDOW_SM_THRESHOLD } from '../../../Constant/Common';
import { ContentBase } from './Content';

const Content = styled(ContentBase)`
  position: relative;
  width: 100%;
  height: 100%;

  @media screen and (max-width: ${WINDOW_SM_THRESHOLD}px) {
    padding: 0.6rem;
  }
`;
Content.displayName = 'Content';

export default Content;
