import styled from 'styled-components';
import { ExploreBase } from './Explore';

const Explore = styled(ExploreBase)`
  width: 100%;
  height: 100%;
  display: flex;
  position: relative;
  flex-direction: column;
  
  .explore-header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    padding: 1rem 1.4rem;

    .explore-title {
      font-size: 20px;
      font-weight: bold;
    }

    .explore-actions {
      button {
        font-size: 13px;
        font-weight: bold;
      }
    }
  }
  
  .datatable-container {
    flex-grow: 10;
  }
`;
Explore.displayName = 'Explore';

export default Explore;
