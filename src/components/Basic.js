 // Render Prop
 import React from 'react';
 import { Formik, Form, Field, ErrorMessage } from 'formik';
 
 const Basic = () => (
   <div>
     <h1>Any place in your app!</h1>
     <Formik
       initialValues={{ email: '', password: '', repassword: '' }}
       validate={values => {
        const errors = {};
         if (!values.email) {
           errors.email = 'Required';
         } else if (
           !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
         ) {
           errors.email = 'Invalid email address';
         } else if (!values.password) {
            errors.password = 'Required';
          } 
         else if(values.password!==values.repassword){
            errors.repassword = 'Dont match password'
         }
         return errors;
       }}
       onSubmit={(values, { setSubmitting }) => {
         setTimeout(() => {
           alert(JSON.stringify(values, null, 3));
           setSubmitting(false);
         }, 400);
       }}
     >
       {({ isSubmitting }) => (
         <Form>
           <Field type="email" name="email" placeholder="Email"/>
           <ErrorMessage name="email" component="div" />
           <Field type="password" name="password" placeholder="Password" />
           <ErrorMessage name="password" component="div" />
           <Field type="password" name="repassword" placeholder="Repassword" />
           <ErrorMessage name="repassword" component="div" />
           <button type="submit" disabled={isSubmitting}>
             Submit
           </button>
         </Form>
       )}
     </Formik>
   </div>
 );
 
 export default Basic;