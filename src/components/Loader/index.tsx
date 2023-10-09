import CircularProgress from '@mui/material/CircularProgress';
import React from 'react';

import { LoaderSmallBlockContainer } from './styles';
import { IProps } from './types';

const Loader: React.FC<IProps> = ({ style, size = 50 }) => {
	return (
		<LoaderSmallBlockContainer sx={{ alignSelf: 'center', ...style }}>
			<CircularProgress size={size} />
		</LoaderSmallBlockContainer>
	);
};

export default Loader;
