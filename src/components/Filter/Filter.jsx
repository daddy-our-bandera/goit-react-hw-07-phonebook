import { Loader } from 'components/Loader/Loader';
import { useDispatch, useSelector } from 'react-redux';

import { filterChange } from 'redux/filterSlice';
import { getContacts, getFilter } from 'redux/selectors';
import { Input, SubTitleBox } from './Filter.styled';

export const Filter = () => {
  const dispatch = useDispatch();
  const { items, isLoading } = useSelector(getContacts) || [];
  const filter = useSelector(getFilter);

  const handleFilter = event => {
    dispatch(filterChange(event.currentTarget.value));
  };
  return (
    <div>
      <SubTitleBox>
        {isLoading && <Loader></Loader>}
        <h2>Contacts</h2>
      </SubTitleBox>
      {items.length ? (
        <Input
          name="name"
          type="text"
          placeholder="find contacts by name"
          value={filter}
          onChange={handleFilter}
        ></Input>
      ) : (
        <h1>No contacts added</h1>
      )}
    </div>
  );
};
