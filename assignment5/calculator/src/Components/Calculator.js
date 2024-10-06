import React ,{useState , useEffect} from 'react';

const  Calculator=()=> {
    const[valueA, setValueA]=useState(" ");
    const[valueB, setValueB]=useState(" ");
    const[operations, setOperations]=useState(" +");
    const[result, setResult]=useState( " ");
    
    const handleSubmit =()=>{
        if(operations === '+'){
            setResult(parseInt(valueA)+parseInt(valueB));
        }
        if(operations === '-'){
            setResult(valueA-valueB);
        }
        if(operations === '*'){
            setResult(valueA*valueB);
        }
        if(operations === '/'){
            setResult(valueA/valueB);
        }
    }
  return (
    
    <div >
        <h1>Calculator</h1>
        <h3>Result:{result}</h3>
        <div>
            <input type='text' value={valueA} onChange={(e)=>setValueA(e.target.value)}/>
            <br/>
            <input type='text' value={valueB} onChange={(e)=>setValueB(e.target.value)}/>
            <br/>
            <button onClick ={handleSubmit}>submit</button>

        </div>
        <div>
            <button onClick ={()=>setOperations('+')}>+</button>
            <button onClick ={()=>setOperations('-')}>-</button>
            <button onClick ={()=>setOperations('*')}>*</button>
            <button onClick ={()=>setOperations('/')}>/</button>
        </div>
    </div>
    
    
  )
}
export default Calculator;