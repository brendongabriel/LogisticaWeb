import React from "react";
import { Container } from "./styles";
import Toast from "./Toast";
import {useTransition} from "react-spring";
import { ToastMessage } from "../../hooks/toast";

interface ToastContainerProps{
    message: ToastMessage[];
}
const ToastContainer: React.FC<ToastContainerProps> = ({message}) => {
    const messagesWithTransition = useTransition(
        message,
        message => message.id,
        {
            from: { top: '- 120%', opacity: 0},
            enter:{right: '0%', opacity: 1},
            leave: {top: '120%', opacity: 0}
        }
    )
    return (
        <Container>
            {messagesWithTransition.map(({item, key, props}) =>(
            <Toast key={key} style={props} message={item}/>
            ))}
        </Container>
    );
};

export default ToastContainer;