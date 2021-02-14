import styled from 'styled-components';

export const StylesModal = styled.div`
                position: fixed;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                width: 80%;
                height: 90%;
                color: white;

                & > div {
                    position: absolute;
                    background-color: rgba(0,0,0, 0.8);
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    width: 100%;
                    height: 100%;
                    text-align: center;
                    padding: 15px;
                    border: 2px solid #444;
                };
`;

export const StylesContainerData = styled.div`
 height: 50%;
  overflow: hidden;
  &>h1,p{
    margin-top: 0;
  }
  &>h4{
    margin-bottom: 0;
  }
  & > img {
    height: 100%;
     width: auto;
  };
`;
