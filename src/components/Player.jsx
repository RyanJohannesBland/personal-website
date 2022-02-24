import { useState, useEffect, useRef } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";


function Player(props){
  var [top, setTop] = useState(90)
  var [left, setLeft] = useState(45);
  const player = useRef(null)
  useEffect(() => {
    player.current.scrollIntoView({behavior: 'auto',
    block: 'center',
    inline: 'center'})
    function handleKeyDown(e) {
      switch(e.keyCode){
        case 65: //left
          setLeft(left - 0.5);
          break
        case 68: //right
          setLeft(left + 0.5);
          break
        case 83: //down
          setTop(top + 0.5)
          break
        case 87: //up
          setTop(top - 0.5)
          break
        default:
          break
      }
    }
    document.addEventListener("keydown", handleKeyDown);
    return function cleanup() {
      document.removeEventListener("keydown", handleKeyDown);
    };
  });


  return (
    <Card ref={player} style={{position: "absolute", top: top + "%", left: left + "%", backgroundColor: "red"}}>
      <CardContent>
        <Typography>Hello</Typography>
      </CardContent>
    </Card>
  )

}

export default Player;