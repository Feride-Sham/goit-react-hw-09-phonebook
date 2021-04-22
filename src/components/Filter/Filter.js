import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";
import { contactsSelectors, changeFilter } from "../../redux/contacts";
import s from "./Filter.module.css";

export default function Filter() {
  const dispatch = useDispatch();
  const filterValue = useSelector(contactsSelectors.getFilter);
  const onToFilter = useCallback((ev) =>
    dispatch(changeFilter(ev.target.value))
  );

  return (
    <form className={s.container}>
      <label className={s.filter}>
        Find contacts by name{" "}
        <input
          type="text"
          value={filterValue}
          onChange={onToFilter}
          className={s.formInput}
        />
      </label>
    </form>
  );
}

Filter.propTypes = {
  filterValue: PropTypes.string.isRequired,
  onToFilter: PropTypes.func.isRequired,
};
