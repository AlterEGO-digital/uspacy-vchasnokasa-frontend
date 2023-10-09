import React, { createContext, useContext, useEffect, useState } from 'react';

import { DOMAIN } from '../../helpers';
import { getToken } from '../../helpers/db';
import { useErrorNotification } from '../../hooks/useErrorNotification';

interface IProps {
	children: React.ReactNode;
}

interface ISaveSettingBody {
	cashregister_token: string;
}

interface IFetchContext {
	getCashierData(): void;
	saveSettings(body: ISaveSettingBody): void;
	logOut(): void;
	cashierData: ICashierData | null;
	loading: boolean;
}

export interface ICashierData {
	status: boolean;
	message: string;
	integration_status?: boolean;
	id?: number;
	cashregister_token?: string;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const Fetch: any = createContext({});
export const useFetchContext = () => useContext<IFetchContext>(Fetch);

const FetchProvider: React.FC<IProps> = ({ children }) => {
	const [cashierData, setCashierData] = useState(null);
	const [loading, setLoading] = useState(true);
	const CHECKBOX_API = `${DOMAIN}/vchasnokasa/v1`;
	const { errorNotification } = useErrorNotification();

	const getCashierData = async () => {
		setLoading(true);
		try {
			const token = await getToken();
			const res = await fetch(`${CHECKBOX_API}/cashregisters/get`, {
				headers: { Accept: 'application/json', 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
			});
			const data: ICashierData = await res.json();
			setCashierData(data || null);
		} catch (e) {
			errorNotification();
		} finally {
			setLoading(false);
		}
	};

	const logOut = async () => {
		setLoading(true);
		try {
			const token = await getToken();
			fetch(`${CHECKBOX_API}/cashregisters/delete`, {
				method: 'DELETE',
				headers: { Accept: 'application/json', 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
			}).then(() => getCashierData());
		} catch (e) {
			errorNotification();
		} finally {
			setLoading(false);
		}
	};

	const saveSettings = async (body: ISaveSettingBody) => {
		setLoading(true);
		try {
			const token = await getToken();
			fetch(`${CHECKBOX_API}/cashregisters/createOrUpdate`, {
				method: 'POST',
				headers: { Accept: 'application/json', 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
				body: JSON.stringify(body),
			}).then(() => getCashierData());
		} catch (e) {
			errorNotification();
		} finally {
			setLoading(false);
		}
	};

	useEffect(() => {
		getCashierData();
	}, []);

	return (
		<Fetch.Provider
			value={{
				getCashierData,
				saveSettings,
				logOut,
				cashierData,
				loading,
			}}
		>
			{children}
		</Fetch.Provider>
	);
};

export default FetchProvider;
