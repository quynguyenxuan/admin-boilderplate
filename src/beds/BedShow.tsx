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

import { Collections, IEmployee } from '../models';
import { LinkField } from '../components/fields';

const BedShow = (props: any) => {
    // const { record } = useShowController<IEmployee>(props);
    const classes = useStyles();

    // if (!record) return null;

    return (
        <Show {...props}>
            <TabbedForm redirect="show">
                <FormTab
                    label="resources.rooms.tabs.details"
                    contentClassName={classes.tab}
                >
                    <TextField source="id" />
                    <TextField source="name" />
                    <TextField source="code" />
                    <LinkField source="roomId" reference={Collections.ROOM} />
                    <DateField source="createdAt" />
                    <DateField source="updatedAt" />

                </FormTab>
            </TabbedForm>
        </Show>
    );
};

export default BedShow;

const useStyles = makeStyles({
    root: { width: 600, margin: 'auto' },
    spacer: { height: 20 },
    tab: {
        display: 'block',
    },
});
