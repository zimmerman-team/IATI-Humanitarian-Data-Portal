import ActivityResponceInterface from '../interfaces/activityInterface';
import apiModel from './index';

const activities: ActivityResponceInterface = {
  ...apiModel('/search/activity/select/')
};

export default activities;
