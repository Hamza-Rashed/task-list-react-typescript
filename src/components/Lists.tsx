import React, { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { RootState } from '../store/store';
import { getLists, setListToEdit, setListIdToDelete } from '../store/actions';
import { List } from '../store/types';

const Lists: FC = () => {
  const dispatch = useDispatch();
  const lists = useSelector((state: RootState) => state.list.lists);

  useEffect(() => {
    dispatch(getLists());
  }, [dispatch]);

  const setListToEditHandler = (id: string) => {
    dispatch(setListToEdit(id));
  } 

  const setListIdToDeleteHandler = (id: string) => {
    dispatch(setListIdToDelete(id));
  }

  return(
    <div className="panel is-primary">
      <p className="panel-heading">Your lists</p>
      <div>
        { Object.keys(lists).length === 0
          ?
            <p className="py-4 has-text-centered">No Lists</p>
          :
            <div>
              {Object.values(lists).map((list: List) => {
                return <div className="panel-block py-3" key={list.id}>
                  <p onClick={() => setListToEditHandler(list.id)}>{list.name}</p>
                  <span className="panel-icon has-text-danger" onClick={() => setListIdToDeleteHandler(list.id)}>
                    <i className="fas fa-times-circle"></i>
                  </span>
                </div>
              })}
            </div>
        }
      </div>
    </div>
  );
}

export default Lists;