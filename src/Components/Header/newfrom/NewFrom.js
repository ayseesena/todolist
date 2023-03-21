import React from 'react'
import { Formik, Field, Form } from 'formik';
import validationSchema from "./Validation"
import { useTodo } from '../../Contexts/TodoContext';
import { v4 as uuidv4 } from 'uuid';


function NewFrom() {
  const {addTodo}= useTodo();

  return (
    <div>
      <Formik
      initialValues={{
        Text: '',
        
      }}
      onSubmit={(values, bag) => {
      
        console.log(values);
        
        addTodo(values.Text);
       
    
        bag.resetForm()
        // yazdıktan somra silmeyi sağlıyor.
        
      }}
      validationSchema={validationSchema}
      // zorunlu alanı belirliyor.
      >

<Form>
  <Field
  className='new-todo' 
  placeholder='Bir Görev Yazın' 
  autoFocus
  id="Text"
  name='Text'
  />
  
    </Form>
    </Formik>
    </div>
  );
}

export default NewFrom