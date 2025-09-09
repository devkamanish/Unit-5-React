 
 interface ButtonProps  {
    label : string;
    type? : "button" | "submit"
 }
 const Button = ({label,  type}:ButtonProps)=>{
    
    return (
        <div>
            <h1>bUtton</h1>
            <button type={type}>{label}</button>
            
        </div>
    )
 }

 export default Button;