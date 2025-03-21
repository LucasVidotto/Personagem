import { ButtonEye,ButtonHead } from "../styles/StyleButton"
import { useDispatch,useSelector } from "react-redux";
import { RootState } from "../Store";
import { setParts } from "../PartsSlice";
import { setStatus } from "../StatusSlice";
import { useRef,useEffect } from "react";
export const ButtonEdit = () =>{

    const dispatch = useDispatch();
    const globalPart = useSelector((state : RootState) => state.parts.text)
    const globalStatus = useSelector((state : RootState) => state.statusParts.previos)
    //const globalEyeColor = useSelector((state : RootState) => state.statusParts.colorEye)
    const globalHeadColor = useSelector((state : RootState) => state.statusParts.colorHead)
    const globalColor = useSelector((state: RootState) => state.string.text)
    // Criando um ref para armazenar o valor anterior
    const prevPartRef = useRef<string | null>(null);

    // Atualiza o ref sempre que o globalPart muda
    useEffect(()=>{
        prevPartRef.current = globalPart;
    }, [globalPart])

    const ChangePart = (part: string) => {
        dispatch(setParts(part));
        dispatch(setStatus(prevPartRef.current));

        if (prevPartRef.current == "Head"){
            dispatch(setStatus(globalColor))
        }
    };
    return(
        <>
            <ButtonEye onClick={() => ChangePart('Eye')}>
                {globalPart} | {globalStatus} | {globalHeadColor}
            </ButtonEye>
            <ButtonHead onClick={() => ChangePart('Head')}>
                <div>
                    
                </div>
            </ButtonHead>
        </>
    )
}