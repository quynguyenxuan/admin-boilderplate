export const TOKEN_KEY = '__JWT_TOKEN__'
export const AUTH_KEY = 'userInfo'

export enum Collections {
  USER = 'users',
  EMPLOYEE = 'employees',
  PATIENT = 'patients',
  SECTOR = 'sectors',
  ROOM = 'rooms',
  BED = 'beds',
  KITCHEN = 'kitchens',
  FOOD = 'foods',
  MEDICINE = 'medicines',
  MEAL_SCHEDULE = 'mealSchedules',
  MEDICATION_SCHEDULE = 'medicationSchedules',
  HEALTH_RECORD = 'healthRecords',
  PATIENT_CARE_SCHEDULE = 'patientCareSchedules'
}

export enum TEST_RESULTS {
  NEGATIVE = 'negative',
  POSITIVE = 'positive',
  NOT_DONE = 'not_done',
  UNKNOWN = 'unknown',
}

export const TEST_RESULTS_OPTIONS = Object.entries(TEST_RESULTS).map(([key, value]) => ({
  id: key,
  name: value,
}));

export enum ISOLATION_METHOD {
  TREATMENT = 'treatment'
}

export const ISOLATION_METHOD_OPTIONS = Object.entries(ISOLATION_METHOD).map(([key, value]) => ({
  id: key,
  name: value,
}));

export enum BACKGROUND_DISEASE {
  YES = 'yes',
  NO = 'NO'
}

export const BACKGROUND_DISEASE_OPTIONS = Object.entries(BACKGROUND_DISEASE).map(([key, value]) => ({
  id: key,
  name: value,
}));

export enum ACUTE_ILLNESS {
  YES = 'yes',
  NO = 'no'
}

export const ACUTE_ILLNESS_OPTIONS = Object.entries(ACUTE_ILLNESS).map(([key, value]) => ({
  id: key,
  name: value,
}));

export enum DESEASE_STATUS {
  SEVERE = 'severe',
  MILD = 'mild',
}

export const DESEASE_STATUS_OPTIONS = Object.entries(DESEASE_STATUS).map(([key, value]) => ({
  id: key,
  name: value,
}));

export enum SESSION_DATE {
  BREAKFAST = 'breakfast',
  LUNCH = 'lunch',
  DINNER = 'dinner',
}

export const SESSION_DATE_OPTIONS = Object.entries(SESSION_DATE).map(([key, value]) => ({
  id: key,
  name: value,
}));

export enum GENDER {
  MALE = 'male',
  FEMALE = 'female',
  UNKNOWN = 'unknown',
}

export const GENDER_OPTIONS = Object.entries(GENDER).map(([key, value]) => ({
  id: key,
  name: value,
}));

export enum EMPLOYEE_ROLE {
  DOCTOR = 'doctor',
  NURSE = 'nurse',
  DEAN = 'dean',
}

export const EMPLOYEE_ROLE_OPTIONS = Object.entries(EMPLOYEE_ROLE).map(([key, value]) => ({
  id: key,
  name: value,
}));










