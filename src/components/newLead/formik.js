import React, { useState, useEffect } from "react";

export default function useFormik({ initialValues, validate }) {
  const [touched, setTouchedFields] = useState({});
  const [errors, setErrors] = useState({});
  const [values, setValues] = useState(initialValues);

  useEffect(() => {
    validateValues(values);
  }, [values]);

  function handleChange(event) {
    const fieldName = event.target.getAttribute("name");
    const { value } = event.target;
    setValues({
      ...values,
      [fieldName]: value,
    });
    if (fieldName === "visit_today") {
      setValues({
        ...values,
        [fieldName]: values.visit_today ? false : true,
      });
    }
    if (fieldName === "tpv") {
      setValues({
        ...values,
        [fieldName]: parseFloat(value),
      });
    }
    if (fieldName === "business_type") {
      setValues({
        ...values,
        [fieldName]: value.toLowerCase(),
      });
    }
  }

  function handleBlur(event) {
    const fieldName = event.target.getAttribute("name");
    setTouchedFields({
      ...touched,
      [fieldName]: true,
    });
  }

  function validateValues(values) {
    setErrors(validate(values));
  }

  return {
    values,
    errors,
    touched,
    handleBlur,
    setErrors,
    handleChange,
  };
}
