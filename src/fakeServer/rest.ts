import FakeRest from 'fakerest';
import fetchMock from 'fetch-mock';
import generateData from 'data-generator-retail';
import employees from './employees';
import patients from './patients';
import beds from './beds';
import foods from './foods';
import kitchens from './kitchens';
import mealSchedules from './mealSchedules';
import medicationSchedules from './medicationSchedules';
import medicines from './medicines';
import patientCareSchedules from './patientCareSchedules';
import rooms from './rooms';
import sectors from './sectors';
import tenants from './tenants';
import users from './users';
import healthRecords from './healthRecords';


export default () => {
    const data = generateData({ serializeDate: true });
    data.beds = beds(data, { serializeDate: true });
    data.employees = employees(data, { serializeDate: true });
    data.foods = foods(data, { serializeDate: true });
    data.healthRecords = healthRecords(data, { serializeDate: true });
    data.kitchens = kitchens(data, { serializeDate: true });
    data.mealSchedules = mealSchedules(data, { serializeDate: true });
    data.medicationSchedules = medicationSchedules(data, { serializeDate: true });
    data.medicines = medicines(data, { serializeDate: true });
    data.patientCareSchedules = patientCareSchedules(data, { serializeDate: true });
    data.patients = patients(data, { serializeDate: true });
    data.rooms = rooms(data, { serializeDate: true });
    data.sectors = sectors(data, { serializeDate: true });
    data.tenants = tenants(data, { serializeDate: true });
    data.users = users(data, { serializeDate: true });

    const restServer = new FakeRest.FetchServer('http://localhost:4000');
    if (window) {
        window.restServer = restServer; // give way to update data in the console
    }
    restServer.init(data);
    restServer.toggleLogging(); // logging is off by default, enable it
    fetchMock.mock('begin:http://localhost:4000', restServer.getHandler());
    return () => fetchMock.restore();
};
