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
    NumberField,
} from 'react-admin';

import { Collections, IEmployee } from '../models';
import { LinkField } from '../components/fields';

const MealScheduleShow = (props: any) => {
    // const { record } = useShowController<IEmployee>(props);
    const classes = useStyles();

    // if (!record) return null;

    return (
        <Show {...props}>
            <TabbedForm redirect="show">
                <FormTab
                    label="resources.mealSchedules.tabs.details"
                    contentClassName={classes.tab}
                >
                    <TextField source="id" />
                    <TextField source="name" />
                    <TextField source="code" />
                    <LinkField source="sectorId" reference={Collections.SECTOR} />
                    <LinkField source="patientId" reference={Collections.PATIENT} />
                    <LinkField source="kitchenId" reference={Collections.KITCHEN} />
                    <LinkField source="employeeId" reference={Collections.EMPLOYEE} />
                    <NumberField source='count'/>
                    <DateField source="scheduleFor" />
                    <DateField source="createdAt" />
                    <DateField source="updatedAt" />

                </FormTab>
            </TabbedForm>
        </Show>
    );
};

export default MealScheduleShow;

const useStyles = makeStyles({
    root: { width: 600, margin: 'auto' },
    spacer: { height: 20 },
    tab: {
        display: 'block',
    },
});