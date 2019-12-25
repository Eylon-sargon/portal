import React from 'react';
import DragDropList from '../components/common/DragDropList';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';

// fake data generator
const getItems = (count: number) =>
	Array.from({ length: count }, (v, k) => k).map(k => ({
		id: `item-${k}`,
		primary: `item ${k}`,
		secondary: (
			<div className="cl">
				<ul>
					<li>hi</li>
					<li>there</li>
				</ul>
			</div>
		),
		actions: (
			<IconButton>
				<EditIcon />
			</IconButton>
		),
	}));

const TestPage: React.FC<{}> = () => {
	const onDragChange = (items: any) => {
		const res = items.map((item: any) => item.id);
		console.log(res);
	};
	return <DragDropList data={getItems(15)} onDragChange={onDragChange} />;
};

export default TestPage;
