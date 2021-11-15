import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import * as formActions from "../../redux/contactForm/form-actions";
import { v1 as uuid, v1 } from "uuid";
import styles from "./Filter.module.css";

const Filter = ({ value, onChange }) => {
  const inputId = uuid(v1);
  const labelId = uuid(v1);

  return (
    <>
      <div className={styles.form}>
        <label htmlFor={labelId} className={styles.label}>
          Find contacts by
        </label>
        <input
          id={inputId}
          type="text"
          value={value}
          name="filter"
          onChange={onChange}
          className={styles.filterInput}
        />
      </div>
    </>
  );
};

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};

const mapStateToProps = (state) => ({
  value: state.contacts.filter,
});

const mapDispatchToProps = (dispatch) => ({
  onChange: (event) => dispatch(formActions.changeFilter(event.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
