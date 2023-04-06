import React, { useState } from 'react'
import Form from "./../Components/Form"

const Contact = () =>  {

  const [values, setValues] = useState(null);
  const [show, setShow] = useState(false)

  const handleFetchValues = (userInfomation) => {
    setValues(userInfomation);
    setShow(true);
  };

  return (
    <>
    <Form handleFetchValues={handleFetchValues} />
    {show && <h3>Gracias {values.name} te contactaremos cuanto antes vía email</h3>}
    </>
  )
}

export default Contact