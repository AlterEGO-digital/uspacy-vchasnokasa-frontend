import Box from '@mui/material/Box';
import useTheme from '@mui/material/styles/useTheme';
import Typography from '@mui/material/Typography';
import React from 'react';
import { useTranslation } from 'react-i18next';

const Description = () => {
	const theme = useTheme();
	const { t } = useTranslation('settings');
	return (
		<Box
			sx={{
				marginTop: '35px',
				display: 'flex',
				flexDirection: 'column',
				gap: '8px',
				width: '80%',
				'& a': {
					textDecoration: 'none',
					color: theme.palette.primary.main,
				},
				'& p': {
					fontSize: '14px',
					color: theme.palette.text.secondary,
				},
			}}
		>
			<Typography>{t('pluginSettingsSpecifySecretKey')}</Typography>
			<Typography>
				{t('teamIsInTouch')} <a href="tel:+380507007572"> +38 050 700 75 72</a> {t('orEmail')}
				<a href="mailto:y.andrusyak@alterego.digital"> y.andrusyak@alterego.digital</a>, {t('isThereNotEnoughFunctionalityForIntegration')}
			</Typography>
		</Box>
	);
};

export default Description;
