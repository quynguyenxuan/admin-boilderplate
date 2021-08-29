import * as React from 'react';
import { FC } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import {
    useShowController,
    ReferenceField,
    TextField,
    FieldProps,
    Show,
    TabbedForm,
    FormTab,
    DateField,
    Datagrid,
    NumberField,
    EditButton,
    ReferenceManyField,
    Pagination,
} from 'react-admin';

import { Collections, IEmployee } from '../models';
import { LinkField } from '../components/fields';
import { CreateButtonWithParams } from '../components/buttons/CreateButtonWithParams';
import { Box } from '@material-ui/core';

const PatientShow = (props: any) => {
    // const { record } = useShowController<IEmployee>(props);
    const classes = useStyles();

    // if (!record) return null;

    return (
        <Show {...props}>
            <TabbedForm redirect="show">
                <FormTab
                    label="resources.patients.tabs.details"
                    contentClassName={classes.tab}
                >

                            <TextField source="id" formClassName={classes.w50}/>
                            <TextField source="code" formClassName={classes.w50}/>
                            <TextField source="firstName" formClassName={classes.w50}/>
                            <TextField source="lastName" formClassName={classes.w50}/>
                            <TextField source="phoneNumber" formClassName={classes.w50}/>
                            <TextField source="email" formClassName={classes.w50}/>

                            <DateField source="birthDay" formClassName={classes.w50}/>
                            <TextField source="gender" formClassName={classes.w50}/>

                            <TextField source="testResult" formClassName={classes.w50}/>
                     
                            <DateField source="isolationAt" formClassName={classes.w50}/>
                            <DateField source="hospitalizedAt" formClassName={classes.w50}/>
                            <DateField source="hospitalDischargeAt" formClassName={classes.w50}/>
                            <TextField source="employeeId" formClassName={classes.w50}/>
                            <TextField source="sectorId" formClassName={classes.w50}/>
                            <TextField source="roomId" formClassName={classes.w50}/>
                            <TextField source="bedId" formClassName={classes.w50}/>
                            <TextField source="isolationMethod" formClassName={classes.w50}/>
                            <TextField source="deseaseStatus" formClassName={classes.w50}/>
                            <TextField source="backgroundDisease" formClassName={classes.w50}/>
                            <TextField source="acuteIlless" formClassName={classes.w50}/>
                            <DateField source="createdAt" formClassName={classes.w50}/>
                            <DateField source="updatedAt" formClassName={classes.w50}/>
                        


                </FormTab>
                <FormTab
                    label="resources.patients.tabs.beds"
                    contentClassName={classes.tab}
                >
                    <TextField source="sectorId" />
                    <TextField source="roomId" />
                    <TextField source="bedId" />

                </FormTab>
                <FormTab
                    label="resources.patients.tabs.healthRecord"
                    contentClassName={classes.tab}
                >
                    <ReferenceManyField
                        reference={Collections.HEALTH_RECORD}
                        target="patientId"
                        label="resources.healthRecords.name"
                        perPage={5}
                        pagination={<Pagination />}
                        fullWidth
                        sort={{ field: 'updatedAt', order: 'DESC' }}
                    >
                        <Datagrid rowClick="show">
                            <LinkField label="id" source="id" reference={Collections.HEALTH_RECORD} />
                            <TextField source="name" />
                            <TextField source="code" />
                            <TextField source="description" />
                            <LinkField source="patientId" reference={Collections.PATIENT} />
                            <LinkField source="employeeId" reference={Collections.EMPLOYEE} />
                            <DateField source="recordAt" />
                            <DateField source="createdAt" />
                            <DateField source="updatedAt" />
                            <EditButton />
                        </Datagrid>
                    </ReferenceManyField>

                    <CreateButtonWithParams
                        reference={Collections.HEALTH_RECORD}
                        params={{ id: 'patientId' }}
                        label="Thêm bản ghi sức khỏe"
                    />

                </FormTab>
                <FormTab
                    label="resources.patients.tabs.medicationSchedule"
                    contentClassName={classes.tab}
                >
                    <ReferenceManyField
                        reference={Collections.MEDICATION_SCHEDULE}
                        target="patientId"
                        label="resources.medicationSchedules.name"
                        perPage={5}
                        pagination={<Pagination />}
                        fullWidth
                        sort={{ field: 'updatedAt', order: 'DESC' }}
                    >
                        <Datagrid rowClick="show">
                            <LinkField label="id" source="id" reference={Collections.MEDICATION_SCHEDULE} />
                            <TextField source="name" />
                            <TextField source="code" />
                            <LinkField source="sectorId" reference={Collections.SECTOR} />
                            <LinkField source="patientId" reference={Collections.PATIENT} />
                            <LinkField source="employeeId" reference={Collections.EMPLOYEE} />
                            <NumberField source='count' />
                            <DateField source="createdAt" />
                            <DateField source="updatedAt" />
                            <EditButton />
                        </Datagrid>
                    </ReferenceManyField>

                    <CreateButtonWithParams
                        reference={Collections.MEDICATION_SCHEDULE}
                        params={{ id: 'patientId' }}
                        label="Thêm lịch dùng thuốc"
                    />

                </FormTab>
                <FormTab
                    label="resources.patients.tabs.mealSchedule"
                    contentClassName={classes.tab}
                >
                    <ReferenceManyField
                        reference={Collections.MEAL_SCHEDULE}
                        target="patientId"
                        label="resources.mealSchedules.name"
                        perPage={5}
                        pagination={<Pagination />}
                        fullWidth
                        sort={{ field: 'updatedAt', order: 'DESC' }}
                    >
                        <Datagrid rowClick="show">
                            <LinkField label="id" source="id" reference={Collections.MEAL_SCHEDULE} />
                            <TextField source="name" />
                            <TextField source="code" />
                            <LinkField source="sectorId" reference={Collections.SECTOR} />
                            <LinkField source="patientId" reference={Collections.PATIENT} />
                            <LinkField source="kitchenId" reference={Collections.KITCHEN} />
                            <LinkField source="employeeId" reference={Collections.EMPLOYEE} />
                            <NumberField source='count' />

                            <DateField source="scheduleFor" />
                            <DateField source="createdAt" />
                            <DateField source="updatedAt" />
                            <EditButton />
                        </Datagrid>
                    </ReferenceManyField>

                    <CreateButtonWithParams
                        reference={Collections.MEAL_SCHEDULE}
                        params={{ id: 'patientId' }}
                        label="Thêm bữa ăn"
                    />

                </FormTab>
            </TabbedForm>
        </Show>
    );
};

export default PatientShow;

const useStyles = makeStyles({
    root: { width: 600, margin: 'auto' },
    spacer: { height: 20 },
    tab: {
        display: 'block',
    },
    w50: {
        wordBreak: 'break-word',
        display: 'inline-block',
        width: '50%',
    },
});
