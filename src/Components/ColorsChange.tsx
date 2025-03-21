import { RootState } from "../Store";
import { setString } from "../ColorSlice";
import { BoxColor } from "../styles/StyleColors"
import { useDispatch,useSelector } from "react-redux";

export const ColorChange = () =>{

    const dispatch = useDispatch();
    const globalColor =  useSelector((state : RootState) => state.string.text);

    const ChangeColor = (color: string) =>{
        dispatch(setString(color))
    }

    const indexColors = 12;
    const colors = [
        "#FF5733", "#33FF57", "#3357FF",
        "#FF33A1", "#A133FF", "#33FFF5",
        "#F5A623", "#8B0000", "#4B0082",
        "#c700d1", "#FF4500", "#0c5d0c"
    ];
    return(
        <>
        <BoxColor >
           {[...Array(indexColors)].map((_,index)=>(
            <button key={index} style={{background: colors[index % colors.length]}} onClick={() => ChangeColor(colors[index])}>
                Cor : {globalColor}
            </button>
           ))}
        </BoxColor >
        </>
    )
}