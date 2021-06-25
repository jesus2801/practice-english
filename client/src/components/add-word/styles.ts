import styled from '@emotion/styled';

export const AddWordDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .buttons {
    margin-top: 20px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    button {
      padding: 6px 16px;
      border: none;
      outline: none;
      color: #fff;
      background-color: var(--blue);
      border-radius: 6px;
      cursor: pointer;
      margin: 0 10px;
    }

    .select {
      position: relative;
      min-width: 200px;
    }

    .select svg {
      position: absolute;
      right: 12px;
      top: calc(50% - 3px);
      width: 10px;
      height: 6px;
      stroke-width: 2px;
      stroke: #9098a9;
      fill: none;
      stroke-linecap: round;
      stroke-linejoin: round;
      pointer-events: none;
    }

    .select select {
      -webkit-appearance: none;
      padding: 7px 40px 7px 12px;
      width: 100%;
      border: 1px solid #e8eaed;
      border-radius: 5px;
      background: #fff;
      box-shadow: 0 1px 3px -2px #9098a9;
      cursor: pointer;
      font-family: inherit;
      font-size: 16px;
      transition: all 150ms ease;
    }
    .select select:required:invalid {
      color: #5a667f;
    }
    .select select option {
      color: #223254;
    }
    .select select option[value=''][disabled] {
      display: none;
    }
    .select select:focus {
      outline: none;
      border-color: #07f;
      box-shadow: 0 0 0 2px rgba(0, 119, 255, 0.2);
    }
    .select select:hover + svg {
      stroke: #07f;
    }
    .sprites {
      position: absolute;
      width: 0;
      height: 0;
      pointer-events: none;
      user-select: none;
    }
  }

  h1,
  h2 {
    font-family: 'Montserrat', sans-serif;
    color: var(--black);
  }

  .main {
    width: 60%;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-around;

    .column {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;

      img {
        margin-top: 15px;
        width: 35px;
        cursor: pointer;
      }

      .title {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;

        object {
          margin-right: 10px;
          width: 40px;
        }
      }
    }
  }
`;