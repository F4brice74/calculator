const {Grid} = MaterialUI

function Calc(props){    
  return (
  <Grid
    container
    className="container"
    direction='row'
    xs={8}
    justify="center"
    align-items="center"
    >
    <Grid item container xs={8}>
      <Grid item xs={12} align="center">
        <div id="display">{props.display}</div>
        <div id="displayTotal">{props.total}</div>
      </Grid>
    </Grid>
    <Grid item container xs={8}>
      <Grid item xs={12} align="center"><div id="clear" onClick={()=>props.handleReset()}>AC</div></Grid>
    </Grid>
    <Grid item container xs={6}>      
      <Grid item xs={4} align="center"><div className="chiffre" id="seven" onClick={()=>props.handleClick(7)} >7</div></Grid>
      <Grid item xs={4} align="center"><div className="chiffre" id="eight" onClick={()=>props.handleClick(8)}>8</div></Grid>
      <Grid item xs={4} align="center"><div className="chiffre" id="nine" onClick={()=>props.handleClick(9)}>9</div></Grid>
      <Grid item xs={4} align="center"><div className="chiffre" id="four" onClick={()=>props.handleClick(4)}>4</div></Grid>
      <Grid item xs={4} align="center"><div className="chiffre" id="five" onClick={()=>props.handleClick(5)}>5</div></Grid>
      <Grid item xs={4} align="center"><div className="chiffre" id="six" onClick={()=>props.handleClick(6)}>6</div></Grid>
      <Grid item xs={4} align="center"><div className="chiffre" id="one" onClick={()=>props.handleClick(1)}>1</div></Grid>
      <Grid item xs={4} align="center"><div className="chiffre" id="two" onClick={()=>props.handleClick(2)}>2</div></Grid>
      <Grid item xs={4} align="center"><div className="chiffre" id="three" onClick={()=>props.handleClick(3)}>3</div></Grid>
      <Grid item xs={8} align="center"><div className="chiffre" id="zero" onClick={()=>props.handleClick(0)}>0</div></Grid>
      <Grid item xs={4} align="center"><div className="chiffre" id="decimal" onClick={()=>props.handleClick(".")}>.</div></Grid>
    </Grid>     
    <Grid item container xs={2}>
      <Grid item xs={12} align="center"><div className="operator" id="subtract" onClick={()=>props.handleClick("-")}>-</div></Grid>
      <Grid item xs={12} align="center"><div className="operator" id="add" onClick={()=>props.handleClick("+")}>+</div></Grid>
      <Grid item xs={12} align="center"><div className="operator" id="multiply" onClick={()=>props.handleClick("*")}>x</div></Grid>
      <Grid item xs={12} align="center"><div className="operator" id="divide" onClick={()=>props.handleClick("/")}>/</div></Grid>
    </Grid>
    <Grid item container xs={8}>
    <Grid item xs={12} align="center"><div className="operator equal" id="equals" onClick={props.handleTotal}>=</div></Grid>
    </Grid>
</Grid>
)}
      
function App(){
        
  const [display, setDisplay] = React.useState([0])
  const [total, setTotal] = React.useState(0)
 // const [oldNum, setOldNum] = React.useState()
  
  
  const handleClick= (value) => {
    if(display[0]===0){
      let newDisplay = display.slice(1, display.length)
      setDisplay([...newDisplay, value])
    }   
    else {
      setDisplay([...display, value])
     }  
  console.log(display)
  }
  
  const handleReset = () => {
    setDisplay([0])
    setTotal(0)
    setTotalCalc(0)
  }
  
  const handleTotal = () => {
   // let totalCalc = display.reduce((acc, val) => acc+val)
    let totalCalc = display.join('')
    console.log("display", display)
    console.log("totalCalc",totalCalc)
  
    let evalTot = eval(totalCalc)
    setTotal(evalTot)
   }

  
  return (
  <Calc
    display={display}
    handleClick={handleClick}
    handleReset={handleReset}
    handleTotal={handleTotal}
    total={total}
    />
  )
}
  
  
  
  
 
ReactDOM.render(
  <App />, document.getElementById("root")
)
