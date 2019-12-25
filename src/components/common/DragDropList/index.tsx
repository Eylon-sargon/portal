import React from 'react';
import DragDropListComponent from './DragDropList';

interface Data {
	id: string;
	primary?: any;
	secondary?: any;
	actions?: any;
}

interface Props {
	data: Data[];
	onDragChange?: any;
}

const DragDropList: React.FC<Props> = ({ data, onDragChange }) => {
	const dummyFunction = () => {};
	return <DragDropListComponent data={data} onDragChange={onDragChange || dummyFunction} />;
};

export default DragDropList;
