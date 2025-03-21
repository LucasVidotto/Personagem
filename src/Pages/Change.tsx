import { ButtonEdit } from "../Components/PartsButton";
import { ColorChange } from "../Components/ColorsChange";
import { Box,CardBack,CardMid,EarLeft,EaeRight,EyesLeft,EyesRight,GlassLeft,GlassRight,CenterGlass  } from "../styles/StyleChange";
import { useSelector } from "react-redux";
import { RootState } from "../Store";

export const Change = () => {

  const globalColor = useSelector((state :RootState) => state.string.text)
return(
  <>
    <Box>
      <EarLeft />
      <EaeRight/>
      <EyesLeft />
      <EyesRight/>
      <GlassLeft />
      <CenterGlass/>
      <GlassRight/>
      <CardMid bgcolor={globalColor}/>
      <CardBack />

      <ColorChange />
      <ButtonEdit/>
    </Box>
  </>
)
};
