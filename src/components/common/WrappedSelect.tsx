import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		formControl: {
			minWidth: 120,
		},
	}),
);

interface SelectData {
	dataValue: any;
	dataLabel?: string;
}

interface Props {
	label: string;
	data: SelectData[];
	onChange: any;
	fullWidth?: boolean;
}

const WrappedSelect: React.FC<Props> = ({ label, data, onChange, ...rest }) => {
	const classes = useStyles({});
	const [value, setValue] = React.useState();

	const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
		setValue(event.target.value as string);
		onChange(event.target.value as string);
	};

	return (
		<div>
			<FormControl className={classes.formControl} fullWidth>
				<InputLabel id="demo-simple-select-label">{label}</InputLabel>
				<Select labelId="demo-simple-select-label" id="demo-simple-select" value={value} onChange={handleChange} fullWidth>
					{data.map(({ dataValue, dataLabel }) => (
						<MenuItem value={dataValue}>{dataLabel || dataValue}</MenuItem>
					))}
				</Select>
			</FormControl>
		</div>
	);
};

export default WrappedSelect;
