import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { contactsSelectors, changeFilter } from "../../redux/contacts";
import s from "./Filter.module.css";

const Filter = ({ filterValue, onToFilter }) => {
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
};

Filter.propTypes = {
  filterValue: PropTypes.string.isRequired,
  onToFilter: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  filterValue: contactsSelectors.getFilter(state),
});

const mapDispatchToProps = (dispatch) => ({
  onToFilter: (ev) => dispatch(changeFilter(ev.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
