import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeFilter, selectNameFilter } from '../../redux/filtersSlice';
import styles from './SearchBox.module.css';

const SearchBox = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectNameFilter);

  const handleChange = (event) => {
    dispatch(changeFilter(event.target.value));
  };

  return (
    <div className={styles.searchBox}>
    <label className={styles.label}>
    Find contacts by name
    <input
      type="text"
      id="search"
      placeholder="Search contacts"
      onChange={handleChange}
      className={styles.input}
    />
    </label>
  </div>
  );
};

export default SearchBox;
