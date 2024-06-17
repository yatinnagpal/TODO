import React, {useRef} from 'react'
import './styles.scss'

interface Props {
    toDo: string,
    setToDo: React.Dispatch<React.SetStateAction<string>>
    handleAdd: (e: React.FormEvent) => void
}

const InputField : React.FC<Props> = (props) => {
  const toDo = props.toDo;
  const setToDo = props.setToDo;
  const handleAdd = props.handleAdd;
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <div>
      <form className='input' onSubmit={(e)=>{
       handleAdd(e);
       inputRef.current?.blur(); 
    }
}
       >
        <input type='input' value={toDo} onChange={(e) => setToDo(e.target.value)} placeholder='Enter a task' className='input__box'/>
        <button className='button__submit' type='submit'> Go </button>
      </form>
    </div>
  )
}

export default InputField
