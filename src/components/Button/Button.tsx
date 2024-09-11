

type Props = {
    type:string,
    title:string
}

const Button = ({type, title}:Props) => {
  return (
    <button onClick={()=>{
        alert('Clicked')
    }} className={` border rounded-sm m-4 ${type === 'add' && 'bg-yellow-300' || type === 'remove' && 'bg-red-500' || type==="checkout" && 'bg-green-500'}`}>
        {title}
    </button>
  )
}

export default Button