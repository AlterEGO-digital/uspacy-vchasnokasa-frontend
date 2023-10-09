import React, { createContext, useContext } from 'react';

import { IUserSettings } from './models/userSettings';

export interface IProps {
	children?: React.ReactNode;
	userSettings?: IUserSettings;
}

export interface IUserSettingsContext {
	userSettings?: IUserSettings;
}

export const UserSettingsContext = createContext({});
export const useUserSettingsContext = () => useContext<IUserSettingsContext>(UserSettingsContext);

const Provider: React.FC<IProps> = ({ children, userSettings }) => {
	return <UserSettingsContext.Provider value={{ userSettings }}>{children}</UserSettingsContext.Provider>;
};

export default Provider;
