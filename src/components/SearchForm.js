import React from "react";
import { Form, FormGroup, Label, Input } from 'reactstrap';

export default function SearchForm({handleInputChange, query}) {
 
  return (
    <section className="search-form">
      <Form >
        <FormGroup>
          <Label for="search">Search</Label>
          <Input 
            type="search" 
            name="search" 
            id="search" 
            value={query} 
            onChange={handleInputChange}placeholder="type charactername" />
        </FormGroup>
      </Form>
    </section>
  );
}
