import React from "react";
import { FiAlertCircle, FiXCircle } from "react-icons/fi";
import { Container, Toast } from "./styles";

const ToastContainer: React.FC = () => {
    return (
        <Container>
            <Toast hasDescription>
                <FiAlertCircle size={20} />

                <div>
                    <strong>Aconteceu um erro</strong>
                    <p>Nao foi possivel fazer login</p>
                </div>

                <button>
                    <FiXCircle size={20} />
                </button>   
            </Toast>

            <Toast type="success" hasDescription>
                <FiAlertCircle size={20} />

                <div>
                    <strong>Aconteceu um erro</strong>
                    <p>Nao foi possivel fazer login</p>
                </div>

                <button>
                    <FiXCircle size={20} />
                </button>   
            </Toast>

            <Toast type="error" hasDescription>
                <FiAlertCircle size={20} />

                <div>
                    <strong>Aconteceu um erro</strong>
                    <p>Nao foi possivel fazer login</p>
                </div>

                <button>
                    <FiXCircle size={20} />
                </button>   
            </Toast>
            
            <Toast type="success" hasDescription={false}>
                <FiAlertCircle size={20} />

                <div>
                    <strong>Aconteceu um erro</strong>
                </div>

                <button>
                    <FiXCircle size={20} />
                </button>   
            </Toast>
        </Container>
    );
};

export default ToastContainer;