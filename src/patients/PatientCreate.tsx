

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
import { ACUTE_ILLNESS_OPTIONS, BACKGROUND_DISEASE_OPTIONS, Collections, DESEASE_STATUS_OPTIONS, EMPLOYEE_ROLE_OPTIONS, GENDER_OPTIONS, ISOLATION_METHOD_OPTIONS, TEST_RESULTS_OPTIONS } from '../models';

export const styles: any = {
  price: { width: '7em' },
  width: { width: '7em' },
  height: { width: '7em' },
  stock: { width: '7em' },
  widthFormGroup: { display: 'inline-block' },
  heightFormGroup: { display: 'inline-block', marginLeft: 32 },
  
  w50pc: {
    wordBreak: 'break-word',
    display: 'inline-block',
    width: '50%',
  },
  w60pc: {
    width: '60%'
  },

};
const useStyles = makeStyles(styles);

const PatientCreate: FC<CreateProps> = props => {
  const classes = useStyles();
  return (
    <Create {...props} >
      <TabbedForm redirect="show">
        <FormTab label="resources.employees.tabs.details">
          <TextInput source="code"  fullWidth formClassName={classes.w50pc} className={classes.w60pc}/>
          <TextInput source="firstName"  fullWidth formClassName={classes.w50pc} className={classes.w60pc}/>
          <TextInput source="lastName"  fullWidth formClassName={classes.w50pc} className={classes.w60pc}/>
          <TextInput source="phoneNumber"  fullWidth formClassName={classes.w50pc} className={classes.w60pc}/>
          <TextInput source="email"  fullWidth formClassName={classes.w50pc} className={classes.w60pc}/>

          <DateInput source="birthDay" fullWidth formClassName={classes.w50pc} className={classes.w60pc}/>
          <SelectInput source="gender" choices={GENDER_OPTIONS}  fullWidth formClassName={classes.w50pc} className={classes.w60pc}/>
          <SelectInput source="testResult" choices={TEST_RESULTS_OPTIONS}  fullWidth formClassName={classes.w50pc} className={classes.w60pc}/>
          <DateInput source="isolationAt"  fullWidth formClassName={classes.w50pc} className={classes.w60pc}/>
          <DateInput source="hospitalizedAt"  fullWidth formClassName={classes.w50pc} className={classes.w60pc}/>
          <DateInput source="hospitalDischargeAt"  fullWidth formClassName={classes.w50pc} className={classes.w60pc}/>
          <ReferenceInput source="employeeId" reference={Collections.EMPLOYEE}  fullWidth formClassName={classes.w50pc} className={classes.w60pc}>
            <SelectInput optionText="lastName" />
          </ReferenceInput>
          <ReferenceInput source="sectorId" reference={Collections.SECTOR}  fullWidth formClassName={classes.w50pc} className={classes.w60pc}>
            <SelectInput optionText="name" />
          </ReferenceInput>
          <ReferenceInput source="roomId" reference={Collections.ROOM} fullWidth formClassName={classes.w50pc} className={classes.w60pc}>
            <SelectInput optionText="name" />
          </ReferenceInput>
          <ReferenceInput source="bedId" reference={Collections.BED}  fullWidth formClassName={classes.w50pc} className={classes.w60pc}>
            <SelectInput optionText="name" />
          </ReferenceInput>
          <SelectInput source="isolationMethod" choices={ISOLATION_METHOD_OPTIONS}  fullWidth formClassName={classes.w50pc} className={classes.w60pc}/>
          <SelectInput source="deseaseStatus" choices={DESEASE_STATUS_OPTIONS}  fullWidth formClassName={classes.w50pc} className={classes.w60pc}/>
          <SelectInput source="backgroundDisease" choices={BACKGROUND_DISEASE_OPTIONS}  fullWidth formClassName={classes.w50pc} className={classes.w60pc}/>
          <SelectInput source="acuteIlless" choices={ACUTE_ILLNESS_OPTIONS}  fullWidth formClassName={classes.w50pc} className={classes.w60pc}/>
          <DateInput source="updatedAt"  fullWidth formClassName={classes.w50pc} className={classes.w60pc}/>
          <DateField source="createdAt"  fullWidth formClassName={classes.w50pc} className={classes.w60pc}/>
        </FormTab>
      </TabbedForm>
    </Create>
  );
};
const requiredValidate = [required()];

export default PatientCreate;
