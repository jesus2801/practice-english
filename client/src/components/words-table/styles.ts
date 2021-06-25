import styled from '@emotion/styled';

export const TableDiv = styled.div`
  width: 70%;
  margin-top: 30px;
`;

export const RowDiv = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);

  p {
    color: var(--black);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &:nth-of-type(2n) {
    background-color: #ececec;
  }

  &.header {
    background-color: var(--blue);
    height: 65px;
    border-radius: 10px 10px 0 0;

    p {
      color: #fff;
    }
  }

  &:hover {
    background-color: var(--blue);

    p {
      color: #fff;
    }
  }
`;
