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

const SectorList: FC<ListProps> = props => {
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
                <DateField source="createdAt" />
                <DateField source="updatedAt" />
                <EditButton />
            </Datagrid>
        </List>
    );
};

export default SectorList;
