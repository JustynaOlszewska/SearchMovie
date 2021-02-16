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
  @media (min-width: 230px) and (max-height: 320px){
                      font-size: 0.5rem;
                    }
    
  }
  @media (min-width: 600px) and (orientation: portrait) {
    font-size: 1.5rem;
    
  }
  @media (min-width: 600px) and (orientation: landscape) {
    font-size: 1.0rem;
    
  }
  @media (min-width: 768px) and (orientation: portrait) {
    font-size: 1.5rem;
  }
  @media (min-width: 768px) and (orientation: landscape){
    font-size: 1.3rem;
  }
  @media (min-width: 1024px) {
    font-size: 1.8rem;
  }
                
`;

export const StylesContainerData = styled.div`
  height: 50%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
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
  @media (min-width: 320px) and ( orientation: portrait) {
    &>h1,p{
    margin-bottom: 0;
  }
  }
  @media (min-width: 530px) and ( orientation: landscape) {
    &>h1,p{
    margin-bottom: 0;
  }
  }
  
`;

export const StylesH3 = styled.h3`
margin: 1px;
& > i {
    color: red;
 font-size: 2rem;
 @media(min-width: 600px ) {
  /* font-size: 2.6rem; */
  font-size: 1.2rem;

 }
 /* @media(min-width: 800px ) {
  font-size: 3.5rem;
 } */
 @media(min-width: 1100px) {
  font-size: 1.5rem;

 }
 @media(min-width: 1500px) {
  font-size: 1.7rem;

 }
}

`;

