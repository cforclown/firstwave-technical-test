import styled from 'styled-components';
import { ComingSoonBase } from './ComingSoon';

const ComingSoon = styled(ComingSoonBase)`
  position: absolute;
  left: 50%;
  top: 50%;

  font-weight: bold;

  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  -webkit-transform: translate(-50%, -50%);
  -moz-transform: translate(-50%, -50%);
`;
ComingSoon.displayName = 'ComingSoon';

export default ComingSoon;
