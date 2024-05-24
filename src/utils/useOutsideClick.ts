import { RefObject, useEffect, useRef } from 'react';

export const useOutsideClick = <T extends HTMLElement>(callback: () => void): RefObject<T> => {
    const ref = useRef<T>(null);

    useEffect(() => {
        const handleOutsideClick = (event: MouseEvent) => {
            if (ref.current && !ref.current.contains(event.target as Node)) {
                callback();
            }
        };

        document.addEventListener('mousedown', handleOutsideClick);

        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, [callback]);

    return ref;
};
