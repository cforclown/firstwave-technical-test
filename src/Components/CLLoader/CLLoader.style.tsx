import styled from 'styled-components';
import { CLLoaderBase } from './CLLoader';

const CLLoader = styled(CLLoaderBase)`
  position: absolute;
  left: 50%;
  top: 50%;

  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  -webkit-transform: translate(-50%, -50%);
  -moz-transform: translate(-50%, -50%);
`;
CLLoader.displayName = 'CLLoader';

export default CLLoader;
