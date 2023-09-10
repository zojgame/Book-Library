import { IToastProps } from "../../types";
import './styles.css'

const Toast = ({ message, onClose } : IToastProps) => {
  
    return (
        <div className='toast'>
          <div className="toast-message">
            <p>{message}</p>
          </div>
          <button className="toast-close-btn" onClick={onClose}>
            <span className="icon">
                <div>x</div>
            </span>
          </button>
        </div>
    );
};
export {Toast}