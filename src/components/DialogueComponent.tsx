import {
    Button,
    Dialog
} from "@material-tailwind/react";
import { Dispatch, ReactNode, SetStateAction } from "react";

interface DailogBoxProps {
    open: boolean;
    setOpen: Dispatch<SetStateAction<boolean>>;
    children?: ReactNode;
}

const DialogBox = ({open,setOpen,children}:DailogBoxProps)=> {
    
    const handleOpen = () => setOpen(!open);
 
  return (
    <>
      <Button onClick={handleOpen} variant="gradient" hidden>
        Open Dialog
      </Button>
      <Dialog
        size="md"
        open={open}
        handler={handleOpen}
        animate={{
        mount: { scale: 1, y: 0 },
        unmount: { scale: 0.9, y: -100 },
      }}
      >
        {children}
      </Dialog>
    </>
  );
}

export default DialogBox;
