import * as React from 'react';
import { FC } from 'react';
import {
    List,
    ListProps,
    Datagrid,
    TextField,
    DateField,
    ReferenceField,
    NumberField,
    DateInput,
    EditButton,
} from 'react-admin';
import { makeStyles } from '@material-ui/core/styles';



import { LinkField } from '../components/fields';
import { Collections } from '../models';

const listFilters = [
    <DateInput source="date_gte" alwaysOn />,
    <DateInput source="date_lte" alwaysOn />,
];

const useStyles = makeStyles(theme => ({
    hiddenOnSmallScreens: {
        display: 'table-cell',
        [theme.breakpoints.down('md')]: {
            display: 'none',
        },
    },
}));

const PatientCareScheduleList: FC<ListProps> = props => {
    const classes = useStyles();
    return (
        <List
            {...props}
            filters={listFilters}
            perPage={25}
            sort={{ field: 'date', order: 'desc' }}

        >
            <Datagrid optimized rowClick="show">
                <TextField source="id" />
                <TextField source="name" />
                <TextField source="code" />
                <TextField source="description" />
                <LinkField source="patientId" reference={Collections.PATIENT} />
                <LinkField source="employeeId" reference={Collections.EMPLOYEE} />
                <DateField source="startAt" />
                <DateField source="endAt" />
                <DateField source="scheduleAt" />
                <DateField source="createdAt" />
                <DateField source="updatedAt" />
                <EditButton />
            </Datagrid>
        </List>
    );
};

export default PatientCareScheduleList;
