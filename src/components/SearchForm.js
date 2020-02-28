import React, { useState } from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

export default function SearchForm() {
 
  return (
    <section className="search-form">
      <Form>
        <FormGroup>
          <Label for="search">Search</Label>
          <Input type="search" name="search" id="search" placeholder="type charactername" />
          <Button>Search</Button>
        </FormGroup>
      </Form>
    </section>
  );
}
