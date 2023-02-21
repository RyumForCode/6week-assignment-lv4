import { useEffect, useRef, useState } from "react";

const useInputRefFocus = () : [React.RefObject<HTMLInputElement>, boolean] => {
    const [inputRefFocus, setInputRefFocus] = useState<boolean>(false);
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (document.activeElement === inputRef.current) {
            setInputRefFocus(true);
        } else {
            setInputRefFocus(false);
        }
    }, [document.activeElement])

    return [inputRef, inputRefFocus];
}

export default useInputRefFocus;