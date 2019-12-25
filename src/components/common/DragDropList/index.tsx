import React from 'react';
import DragDropListComponent from './DragDropList';

export interface DragDropListData {
	id: string;
	primary?: any;
	secondary?: any;
	actions?: any;
}

interface Props {
	data: DragDropListData[];
	onDragChange?: any;
}

const DragDropList: React.FC<Props> = ({ data, onDragChange }) => {
	const dummyFunction = () => {};
	return <DragDropListComponent data={data} onDragChange={onDragChange || dummyFunction} />;
};

export default DragDropList;
