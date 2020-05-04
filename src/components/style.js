import styled from 'styled-components';


export const InputContainer = styled.div`
    position: relative;

    .input-field{
        border: 1px solid rgba(0,102,245,.15);
        padding: 12px 24px;
        border-radius: 5px;
        font-size: 16px;
        outline: none;
        transition: all 0.5s ease-in-out;
        width: 100%;
    
        ::placeholder{
            opacity: 0.5;
        }
    
        &:focus{
            border-color: blue;
        }
    
        &:focus + .input-label{
            color: blue;
        }

    }

    .error{
        border-color: #ff0000 !important;
    }

    .error + .input-label{
        color: #ff0000 !important;
    }

    .input-label{
        position: absolute;
        top: -19px;
        left: 3px;
        font-size: 12px;
        padding: 5px;
        padding-bottom: 0;
        background-color: #ffffff;
        color: rgba(0,0,0,0.4);
        transition: all 0.5s ease-in-out;

        ${({ focus }) => focus && 'top: -11px; left: 12px;'}
    }

   


    .error-message{
        margin: 3px;
        color: #ff0000;
        font-weight: 400;
        display: flex;

        span{
            background-color: #ff0000;
            color: #ffffff;
            border-radius: 50%;
            width: 12px;
            height: 12px;
            display: inline-block;
            display: inline-flex;
            justify-content: center;
            align-items: center;
            margin-right: 5px;
        }
    }
`
