import React, { useState } from "react";
import { Input, Form } from "reactstrap";

const Searcher = (props) => {
  const [searchTerm, setSearchTerm] = useState("");

  const onSearchSubmit = (e) => {
    e.preventDefault();
    props.onSearchSubmit(searchTerm);
    setSearchTerm("");
  };

  const searchChangeHandler = (e) => {
    e.preventDefault();
    setSearchTerm(e.target.value);
  };

  return (
    <div>
      <Form onSubmit={onSearchSubmit}>
        <Input type="text" value={searchTerm} onChange={searchChangeHandler} />
      </Form>
    </div>
  );
};

export default Searcher;
