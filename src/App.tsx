import * as React from 'react';
import { Admin, Resource, useGetPermissions } from 'react-admin';
import polyglotI18nProvider from 'ra-i18n-polyglot';

import authProvider from './authProvider';
import themeReducer from './themeReducer';
import { Login, Layout } from './layout';
import { Dashboard } from './dashboard';
import customRoutes from './routes';

import employees from './employees';
import patients from './patients';

import GlobalCss from './styles/GlobalCss';
import dataProviderFactory from './dataProvider';
import { createBrowserHistory as createHistory } from 'history';
import viMessages from './i18n/vi';
import { Collections } from './models';
import beds from './beds';
import sectors from './sectors';
import rooms from './rooms';
import foods from './foods';
import kitchens from './kitchens';
import medicines from './medicines';
import mealSchedules from './mealSchedules';
import medicationSchedules from './medicationSchedules';
import healthRecords from './healthRecords';
import patientCareSchedules from './patientCareSchedules';

const history = createHistory();

const asyncMessages: any = {
    en: () => import('./i18n/en').then(messages => messages.default),
    vi: () => import('./i18n/vi').then(messages => messages.default),
};
const i18nProvider = polyglotI18nProvider(locale => {
    if (locale === 'vi') {
        // initial call, must return synchronously
        return viMessages;
    }
    return asyncMessages[locale]();
}, 'vi');

const App = () => {
    const getPermissions = useGetPermissions();
    return (
        <>
        <GlobalCss/>
        <Admin
            title=""
            history={history}
            dataProvider={dataProviderFactory(
                process.env.REACT_APP_DATA_PROVIDER || ''
            )}
            customReducers={{ theme: themeReducer }}
            customRoutes={customRoutes}
            authProvider={authProvider}
            dashboard={Dashboard}
            loginPage={Login}
            layout={Layout}
            i18nProvider={i18nProvider}
            disableTelemetry
        >
            { pers => [
                <Resource name={Collections.MEDICATION_SCHEDULE} {...medicationSchedules}/>,
                <Resource name={Collections.HEALTH_RECORD} {...healthRecords}/>,
                <Resource name={Collections.PATIENT_CARE_SCHEDULE} {...patientCareSchedules}/>,
                <Resource name={Collections.MEAL_SCHEDULE} {...mealSchedules}/>,
                <Resource name={Collections.MEDICINE} {...medicines}/>,
                <Resource name={Collections.KITCHEN} {...kitchens}/>,
                <Resource name={Collections.FOOD} {...foods}/>,
                <Resource name={Collections.ROOM} {...rooms}/>,
                <Resource name={Collections.SECTOR} {...sectors}/>,
                <Resource name={Collections.BED} {...beds}/>,
                <Resource name={Collections.EMPLOYEE} {...employees} />,
                <Resource name={Collections.PATIENT} {...patients} />
            ]}
        </Admin>
        </>
    );
};

export default App;
