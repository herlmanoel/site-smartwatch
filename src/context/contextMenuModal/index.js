import React, { createContext, useState, useContext } from 'react';

export const ContextMenuModal = createContext();

export default function MenuModalProvider({ children }){
    const [showModal, setShowModal] = useState(false);

    return (
        <ContextMenuModal.Provider 
            value={{
                showModal,
                setShowModal
            }}
        >
            {children}
        </ContextMenuModal.Provider>
    );
}

export function useContextMenuModal() {
    const context = useContext(ContextMenuModal);
    const { showModal, setShowModal } = context;
    return  { showModal, setShowModal };
}