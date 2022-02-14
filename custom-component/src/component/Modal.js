import { useState } from 'react';
import styled from 'styled-components';


const ModalBackDrop = styled.div`
    position: fixed;
    z-index: 999;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0,0,0,0.4);
    display: grid;
    place-items: center;
`;

const ModalContainer = styled.div`
    height: 15rem;
    text-align: center;
    margin: 120px auto;
`;

const ModalBtn = styled.button`
    background-color: #4000c7;
    text-decoration: none;
    border: none;
    padding: 20px;
    color: #fff;
    border-radius: 30px;
    cursor: grab;
`;

const ModalView = styled.div.attrs(props => ({role: `dialog`}))`
    border-radius: 10px;
    background-color: #ffffff;
    width: 300px;
    height: 100px;

    > span.close_btn {
        margin-top: 5px;
        cursor: pointer;
    }
    > div.desc {
        margin-top: 25px;
        color: #4000c7;
    }
`;

/// styled components boundary ///

const Modal = () => {

    const [isOpen, setIsOpen] = useState(false);
    const openModalHandler = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <ModalContainer>
                <ModalBtn onClick={openModalHandler}>
                    {isOpen === false ? 'Open Modal' : 'Opened!'}
                </ModalBtn>
                {isOpen === true? <ModalBackDrop onClick={openModalHandler}>
                    <ModalView onClick = {(e) => e.stopPropagation()}>
                        <span onClick = {openModalHandler} className='close_btn'>&times;</span>
                        <div className='desc'> HELLO CODESTATES!</div>
                    </ModalView>
                </ModalBackDrop> : null}
            </ModalContainer>
        </>
    )
}

export default Modal;

