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
} from 'react-admin';

import { IEmployee } from '../models';

const EmployeeShow = (props: any) => {
    // const { record } = useShowController<IEmployee>(props);
    const classes = useStyles();

    // if (!record) return null;

    return (
        <Show {...props}>
            <TabbedForm redirect="show">
                <FormTab
                    label="resources.employees.tabs.details"
                    contentClassName={classes.tab}
                >
                    <TextField source="id" />
                    <TextField source="code" />
                    <TextField source="firstName" />
                    <TextField source="lastName" />
                    <TextField source="phoneNumber" />
                    <TextField source="email" />

                    <DateField source="birthDay" />
                    <TextField source="gender" />

                </FormTab>
                <FormTab
                    label="resources.employees.tabs.address"
                    contentClassName={classes.tab}
                >
                    <TextField source="role" />
                    <DateField source="createdAt" />
                    <DateField source="updatedAt" />

                </FormTab>
            </TabbedForm>
        </Show>
    );
};

export default EmployeeShow;

const useStyles = makeStyles({
    root: { width: 600, margin: 'auto' },
    spacer: { height: 20 },
    tab: {
        display: 'block',
    },
});
