import * as React from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import LabelIcon from '@material-ui/icons/Label';
import { makeStyles } from '@material-ui/core/styles';
import {
    useTranslate,
    DashboardMenuItem,
    MenuItemLink,
    MenuProps,
} from 'react-admin';

import rooms from '../rooms'
import SubMenu from './SubMenu';
import { AppState } from '../types';
import { Collections } from '../models';

type MenuName = 'menuCatalog' | 'menuSales' | 'menuCustomers' | 'menuSettings';

const Menu = ({ dense = false }: MenuProps) => {
    const [state, setState] = useState({
        menuCatalog: true,
        menuSales: true,
        menuCustomers: true,
        menuSettings: true,
    });
    const translate = useTranslate();
    useSelector((state: AppState) => state.theme); // force rerender on theme change
    const classes = useStyles();

    const handleToggle = (menu: MenuName) => {
        setState(state => ({ ...state, [menu]: !state[menu] }));
    };

    return (
        <div className={classes.root}>
            {' '}
            <DashboardMenuItem />
           
            <MenuItemLink
                to={`/${Collections.EMPLOYEE}`}
                primaryText={translate(`resources.employees.name`, {
                    smart_count: 2,
                })}
                leftIcon={<rooms.icon />}
                dense={dense}
            />
            <MenuItemLink
                to={`/${Collections.PATIENT}`}
                primaryText={translate(`resources.patients.name`, {
                    smart_count: 2,
                })}
                leftIcon={<rooms.icon />}
                dense={dense}
            />

<MenuItemLink
                to={`/${Collections.MEAL_SCHEDULE}`}
                primaryText={translate(`resources.mealSchedules.name`, {
                    smart_count: 2,
                })}
                leftIcon={<rooms.icon />}
                dense={dense}
            />
            <MenuItemLink
                to={`/${Collections.PATIENT_CARE_SCHEDULE}`}
                primaryText={translate(`resources.patientCareSchedules.name`, {
                    smart_count: 2,
                })}
                leftIcon={<rooms.icon />}
                dense={dense}
            />
            <MenuItemLink
                to={`/${Collections.HEALTH_RECORD}`}
                primaryText={translate(`resources.healthRecords.name`, {
                    smart_count: 2,
                })}
                leftIcon={<rooms.icon />}
                dense={dense}
            />
            <MenuItemLink
                to={`/${Collections.MEDICATION_SCHEDULE}`}
                primaryText={translate(`resources.medicationSchedules.name`, {
                    smart_count: 2,
                })}
                leftIcon={<rooms.icon />}
                dense={dense}
            />
            <SubMenu
                handleToggle={() => handleToggle('menuSettings')}
                isOpen={state.menuSettings}
                name="pos.menu.settings"
                icon={<rooms.icon />}
                dense={dense}
            >
            <MenuItemLink
                to={`/${Collections.SECTOR}`}
                primaryText={translate(`resources.sectors.name`, {
                    smart_count: 2,
                })}
                leftIcon={<rooms.icon />}
                dense={dense}
            />
            <MenuItemLink
                to={`/${Collections.ROOM}`}
                primaryText={translate(`resources.rooms.name`, {
                    smart_count: 2,
                })}
                leftIcon={<rooms.icon />}
                dense={dense}
            />
            <MenuItemLink
                to={`/${Collections.BED}`}
                primaryText={translate(`resources.beds.name`, {
                    smart_count: 2,
                })}
                leftIcon={<rooms.icon />}
                dense={dense}
            />
            <MenuItemLink
                to={`/${Collections.KITCHEN}`}
                primaryText={translate(`resources.kitchens.name`, {
                    smart_count: 2,
                })}
                leftIcon={<rooms.icon />}
                dense={dense}
            />
            <MenuItemLink
                to={`/${Collections.FOOD}`}
                primaryText={translate(`resources.foods.name`, {
                    smart_count: 2,
                })}
                leftIcon={<rooms.icon />}
                dense={dense}
            />
            <MenuItemLink
                to={`/${Collections.MEDICINE}`}
                primaryText={translate(`resources.medicines.name`, {
                    smart_count: 2,
                })}
                leftIcon={<rooms.icon />}
                dense={dense}
            />
            </SubMenu>

        </div>
    );
};

const useStyles = makeStyles(theme => ({
    root: {
        marginTop: theme.spacing(1),
    },
}));

export default Menu;
