import styled from 'styled-components';
import { getBootstrapSizeInNumberic } from '../../Utils/Common';
import { IUserAvatar, UserAvatarBase } from './UserAvatar';

const UserAvatar = styled(UserAvatarBase)<IUserAvatar>`
  display: block;
  width: ${(props) => getBootstrapSizeInNumberic(props.size)}px;
  height: ${(props) => getBootstrapSizeInNumberic(props.size)}px;
  border-radius: 50%;
  padding: 0;
  img {
    width: ${(props) => getBootstrapSizeInNumberic(props.size)}px;
    height: ${(props) => getBootstrapSizeInNumberic(props.size)}px;
    border-radius: 50%;
    border: none;
    object-fit: cover;

    font-size: 0;
  }
  svg {
    position: absolute;
    left: 0;
    top: 0;
  }
  h6 {
    margin: 0;
    font-size: ${(props) => getBootstrapSizeInNumberic(props.size) / 2}px;
  }
`;

export default UserAvatar;
