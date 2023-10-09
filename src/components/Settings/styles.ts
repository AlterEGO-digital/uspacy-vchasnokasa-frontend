import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';

export const TextFieldStyles = styled(TextField)(({ theme }) => ({
	width: '100%',
	fontSize: '16px',
	letterSpacing: '0.15px',
	'& .MuiInputBase-root input': {
		background: theme.palette.background.paper,
		color: theme.palette.text.primary,
		padding: '8.5px 12px 8.5px 17px',
		fontSize: '16px',

		'& :placeholder': {
			color: 'green',
		},
	},
	'& .MuiOutlinedInput-notchedOutline': {
		border: '1px solid rgba(58, 53, 65, 0.23)',
	},
	'& .MuiFormHelperText-root.Mui-error': {
		position: 'absolute',
		bottom: '-13px',
		fontSize: '8px',
	},
}));
export const CopiedMessageWrapper = styled(Box)(() => ({
	pointerEvents: 'none',
	opacity: 0,
	transition: 'all 0.3s',

	'&.active-copied-message': {
		PointerEvents: 'auto',
		opacity: 1,
	},
}));

export const CopiedMessageContent = styled(Box)(() => ({
	position: 'relative',
	padding: '4px 8px',
	borderRadius: 4,
	backgroundColor: 'rgba(97, 97, 97, 0.9)',
}));
