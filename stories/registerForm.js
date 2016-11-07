import React from 'react';
import { storiesOf } from '@kadira/storybook';
import RegisterForm from '../examples/RegisterForm';

storiesOf('RegisterForm', module)
  .add('default', () => (
    <RegisterForm />
  ));
