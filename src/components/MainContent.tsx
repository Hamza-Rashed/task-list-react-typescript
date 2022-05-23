import React, { FC, Fragment } from 'react';
import { useSelector } from 'react-redux';

import SelectList from './SelectList';
import { RootState } from '../store/store';
import AddNewTask from './AddNewTask';
import Tasks from './Tasks';

const MainContent: FC = () => {
  const selectedList = useSelector((state: RootState) => state.list.selectedList);

  return(
    <div className="column is-9">
      <div className="box">
        <SelectList />
        {
          selectedList &&
            <Fragment>
              <AddNewTask list={selectedList} />
              <hr/>
              <Tasks tasks={selectedList.tasks} />
            </Fragment>
        }
      </div>
    </div>
  );
}

export default MainContent;