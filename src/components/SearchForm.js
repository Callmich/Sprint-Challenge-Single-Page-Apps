import React, { useState } from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

export default function SearchForm({getSearch, updateSearch, search, findChar}) {
 
  return (
    <section className="search-form">
      <Form onSubmit={getSearch}>
        <FormGroup>
          <Label for="search">Search</Label>
          <Input type="search" name="search" id="search" value={search} onChange={updateSearch}placeholder="type charactername" />
          <Button type="submit">Search</Button>
        </FormGroup>
      </Form>
    </section>
  );
}
