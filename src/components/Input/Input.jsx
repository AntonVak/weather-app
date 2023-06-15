import { useContext } from "react";
import { useRef } from "react";
import { GlobalContext } from "../../App";

const Input = () => {
  const inputRef = useRef(null);
  const {dispatch, state:{inputValue, editingCity}} = useContext(GlobalContext)

  const handlerChange = ({ target }) => {
    dispatch({
      type: 'RENAME_CITY',
      payload: target.value
    })
    
  };

  const handleSubmit =  (e) => {
    e.preventDefault();
    if(inputValue.length){
      dispatch({
        type: 'ADD_CITY',
        payload: inputValue
      })
      dispatch({
        type: 'RESET_CITY',
        
      })
      inputRef.current.focus();
    } 
  };

  const handleRename =  () => {
   if(inputValue.length){
      dispatch({
        type: 'RENAME_CITY_DONE',
        payload: inputValue
      })
      dispatch({
        type: 'RESET_CITY',
        
      })
      inputRef.current.focus();
    }
    
    
  };
  return (
    <form onSubmit={handleSubmit} className="form-weth">
      <input
        onChange={handlerChange}
        className="input"
        placeholder={inputValue}
        value={inputValue}
        ref={inputRef}
      />
      { !editingCity && <button className="btn-weth" type="submit">
        Search
      </button>}
      {editingCity && <button className="btn-weth" type="submit" onClick={handleRename}>
        Rename
      </button>}
      
      
    </form>
  );
};

export default Input;
