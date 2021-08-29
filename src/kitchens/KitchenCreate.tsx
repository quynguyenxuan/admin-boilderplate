

import * as React from 'react';
import { FC } from 'react';
import {
  Create,
  CreateProps,
  Datagrid,
  DateField,
  DateInput,
  Edit,
  EditButton,
  EditProps,
  FormTab,
  ImageField,
  ImageInput,
  NumberInput,
  Pagination,
  ReferenceArrayInput,
  ReferenceInput,
  ReferenceManyField,
  required,
  SelectArrayInput,
  SelectInput,
  TabbedForm,
  TextField,
  TextInput,
} from 'react-admin';
import { makeStyles } from '@material-ui/core/styles';
import { Collections, EMPLOYEE_ROLE_OPTIONS, GENDER_OPTIONS } from '../models';
import RichTextInput from 'ra-input-rich-text';

export const styles = {
  price: { width: '7em' },
  width: { width: '7em' },
  height: { width: '7em' },
  stock: { width: '7em' },
  widthFormGroup: { display: 'inline-block' },
  heightFormGroup: { display: 'inline-block', marginLeft: 32 },
};
const useStyles = makeStyles(styles);

const KitchenCreate: FC<CreateProps> = props => {
  const classes = useStyles();
  return (
    <Create {...props} >
      <TabbedForm  redirect="show">
        <FormTab label="resources.rooms.tabs.details">
            <TextInput source="name" validate={requiredValidate}/>
            <TextInput source="code" />
            <TextInput source="description" multiline/>
            <DateInput source="updatedAt" />
        </FormTab>
      </TabbedForm>
    </Create>
  );
};
const requiredValidate = [required()];

export default KitchenCreate;