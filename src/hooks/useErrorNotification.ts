import { useSnackbar } from 'notistack';
import { useTranslation } from 'react-i18next';

export const useErrorNotification = () => {
	const { enqueueSnackbar } = useSnackbar();
	const { t } = useTranslation('settings');
	const errorNotification = (message?: string) => {
		enqueueSnackbar(message ? message : t('requestExecutionError'), {
			variant: 'error',
			anchorOrigin: {
				vertical: 'top',
				horizontal: 'right',
			},
		});
	};

	return { errorNotification };
};
