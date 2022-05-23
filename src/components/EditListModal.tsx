import React, { FC, FormEvent, useState } from 'react';
import { useDispatch } from 'react-redux';

import { List } from '../store/types';
import { setListToEdit, updateList, setNotification } from '../store/actions';

interface EditListModalProps {
  list: List;
}

const EditListModal: FC<EditListModalProps> = ({ list }) => {
  const dispatch = useDispatch();
  const [listName, setListName] = useState(list.name);

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if(listName.trim() === '') {
      return alert('List name is required!');
    }

    if(listName.trim() === list.name) {
      return alert('List name is the same as before!');
    }

    dispatch(updateList(list.id, listName.trim()));
    dispatch(setNotification(`List "${list.name}" updated!`));
  }

  const changeHandler = (e: FormEvent<HTMLInputElement>) => {
    setListName(e.currentTarget.value);
  }

  const hideModalHandler = () => {
    dispatch(setListToEdit(''));
  }

  return(
    <div className="modal is-active">
      <div className="modal-background" onClick={hideModalHandler}></div>
      <form className="modal-card" onSubmit={submitHandler}>
        <header className="modal-card-head">
          <p className="modal-card-title">Edit List</p>
          <button type="button" className="delete" onClick={hideModalHandler}></button>
        </header>
        <div className="modal-card-body">
          <div className="field">
            <label className="label">List Name</label>
            <div className="control">
              <input 
                type="text"
                className="input"
                name="listName"
                placeholder="List Name"
                value={listName}
                onChange={changeHandler}  
              />
            </div>
          </div>
        </div>
        <footer className="modal-card-foot">
          <button type="submit" className="button is-success">Save changes</button>
          <button type="button" className="button" onClick={hideModalHandler}>Cancel</button>
        </footer>
      </form>
    </div>
  );
}

export default EditListModal;