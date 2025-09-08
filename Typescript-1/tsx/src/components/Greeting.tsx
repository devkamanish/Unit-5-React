

type GreetingProps = {
    name : string;
    age : number;
}

const Greeting = ({name , age}: GreetingProps) => {
  return (
   <div>
    <h1 className="text-2xl font-bold">Hello {name}</h1>
    {age && <p>Your age is {age} </p>
}
   </div>
)
}

export default Greeting