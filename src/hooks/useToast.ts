import { nanoid } from "nanoid";
import { useState } from "react";
import { ToastType } from "../types";

const useToast = () => {
    const [toasts, setToasts] = useState<ToastType[]>([]);

    const showToast = (message : string) => {
        const toast : ToastType = {
          id: nanoid(),
          message,
          type: 'failure',
        };    
        
        setToasts((prevToasts) => [...prevToasts, toast]); 
        
        
        setTimeout(() => {
            removeToast(toast.id);
        }, 3 * 1000);
    }

    const removeToast = (id: string) => {
        setToasts((prevToasts) => prevToasts.filter((toast) => toast.id !== id));
    };

    return { toasts, setToasts, showToast, removeToast }   

};

export { useToast }