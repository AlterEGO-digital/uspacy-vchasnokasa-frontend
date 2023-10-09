import localforage from 'localforage';

export const getOrCreateTable = (storeName: string) => {
	return localforage.createInstance({
		name: 'Uspacy',
		storeName,
	});
};

const table = getOrCreateTable('tokens');
export const setToken = (token: string): Promise<string> => {
	return table.setItem('token', token);
};

export const getToken = (): Promise<string> => {
	return table.getItem('token');
};

export const removeToken = (): Promise<void> => {
	return table.removeItem('token');
};
