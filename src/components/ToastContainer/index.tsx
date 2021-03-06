import React from "react";
import { useTransition } from "react-spring"; 

import Toast from "./Toast";

import { Container } from "./style";
import { ToastMessage } from "../../hooks/toast";

interface ToastContainerProps {
  message: ToastMessage[];
}

const ToastContainer: React.FC<ToastContainerProps> = ({ message }) => {
  const messagesWithTransitions = useTransition(
    message,
    message => message.id,
    {
      from: {right: "-120%", opacity: 0},
      enter: {right: "0", opacity: 1},
      leave: {right: "-120%", opacity: 0}
    }
  );

  return (
    <Container>
      {messagesWithTransitions.map(({ item, key, props }) => 
        <Toast key={key} message={item} style={props} />
      )}
    </Container>
  );
}

export default ToastContainer;