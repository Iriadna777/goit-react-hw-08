import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setNameFilter } from '../../redux/filters/slice';
import { selectNameFilter } from '../../redux/filters/selectors';
import styles from './Filter.module.css';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectNameFilter);

  const handleFilterChange = (e) => {
    dispatch(setNameFilter(e.target.value));
  };

  return (
    <div className={styles.filterContainer}>
      <label className={styles.label}>
        Find contacts by name
        <input
          type="text"
          value={filter}
          onChange={handleFilterChange}
          className={styles.input}
        />
      </label>
    </div>
  );
};

// const Filter = () => {
//   const dispatch = useDispatch();
//   const filter = useSelector((state) => state.filters.name);

//   const handleChange = (e) => {
//     dispatch(setNameFilter(e.target.value));
//   };

//   return (
//     <div className={styles.filterContainer}>
//       <label className={styles.label}>
//         Find contacts by name
//         <input
//           type="text"
//           value={filter}
//           onChange={handleChange}
//           className={styles.input}
//         />
//       </label>
//     </div>
//   );
// };

export default Filter;
