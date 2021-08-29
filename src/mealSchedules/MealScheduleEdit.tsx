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

export const styles = {
  price: { width: '7em' },
  width: { width: '7em' },
  height: { width: '7em' },
  stock: { width: '7em' },
  widthFormGroup: { display: 'inline-block' },
  heightFormGroup: { display: 'inline-block', marginLeft: 32 },
};
const useStyles = makeStyles(styles);

const MealScheduleEdit: FC<EditProps> = props => {
  const classes = useStyles();
  return (
    <Edit {...props} mutationMode={"pessimistic"}>
      <TabbedForm  redirect="show">
        <FormTab label="resources.mealSchedules.tabs.details">
            <TextField source="id" />
            <TextInput source="name" />
            <TextInput source="code" />
            <ReferenceInput source="sectorId" reference={Collections.SECTOR}>
              <SelectInput optionText="name" />
            </ReferenceInput>
            <ReferenceInput source="patientId" reference={Collections.PATIENT}>
              <SelectInput optionText="lastName" />
            </ReferenceInput>
            <ReferenceInput source="kitchenId" reference={Collections.KITCHEN}>
              <SelectInput optionText="name" />
            </ReferenceInput>
            <ReferenceInput source="employeeId" reference={Collections.EMPLOYEE}>
              <SelectInput optionText="lastName" />
            </ReferenceInput>
            <ReferenceArrayInput
              source="foodIds"
              reference={Collections.FOOD}
            >
              <SelectArrayInput optionText="name" />
            </ReferenceArrayInput>
            <NumberInput source='count'/>
            <DateInput source="scheduleFor" />
            <DateInput source="updatedAt" />
            <DateField source="createdAt" />

        </FormTab>
      </TabbedForm>
    </Edit>
  );
};
const requiredValidate = [required()];

export default MealScheduleEdit;
