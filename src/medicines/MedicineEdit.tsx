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

const MedicineEdit: FC<EditProps> = props => {
  const classes = useStyles();
  return (
    <Edit {...props} mutationMode={"pessimistic"}>
      <TabbedForm  redirect="show">
        <FormTab label="resources.medicines.tabs.details">
            <TextField source="id" />
            <TextInput source="name" />
            <TextInput source="code" />
            <TextInput source="provider" />
            <TextInput source="description" multiline/>

            <DateInput source="updatedAt" />
            <DateField source="createdAt" />

        </FormTab>
      </TabbedForm>
    </Edit>
  );
};
const requiredValidate = [required()];

export default MedicineEdit;
