import React, { useEffect, useState } from 'react';
import { List, ListItem, ListItemText, ListItemIcon, ListItemSecondaryAction } from '@material-ui/core';
import RootRef from '@material-ui/core/RootRef';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import DragIndicatorIcon from '@material-ui/icons/DragIndicator';
import { createStyles, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme =>
	createStyles({
		root: {
			position: 'relative',
		},
		icon: {
			position: 'absolute',
			top: theme.spacing(2),
			left: 0,
		},
		body: {
			marginLeft: theme.spacing(3),
		},
	}),
);

const DragDropListComponent = ({ data, onDragChange }) => {
	const classes = useStyles();
	const [items, setItems] = useState([]);
	useEffect(() => {
		setItems(data);
	}, [data]);

	const reorder = (list, startIndex, endIndex) => {
		const result = Array.from(list);
		const [removed] = result.splice(startIndex, 1);
		result.splice(endIndex, 0, removed);

		return result;
	};

	const getItemStyle = (isDragging, draggableStyle) => ({
		// styles we need to apply on draggables
		...draggableStyle,

		...(isDragging && {
			background: 'rgb(235,235,235)',
		}),
	});

	const onDragEnd = result => {
		// dropped outside the list
		if (!result.destination) {
			return;
		}

		setItems(reorder(items, result.source.index, result.destination.index));
		onDragChange(reorder(items, result.source.index, result.destination.index));
	};

	if (!items || !items.length) {
		return null;
	}

	return (
		<DragDropContext onDragEnd={onDragEnd}>
			<Droppable droppableId="droppable">
				{(provided, snapshot) => (
					<RootRef rootRef={provided.innerRef}>
						<List className={classes.root}>
							{items.map((item, index) => (
								<Draggable key={item.id} draggableId={item.id} index={index}>
									{(provided, snapshot) => (
										<ListItem
											ContainerComponent="div"
											ContainerProps={{ ref: provided.innerRef }}
											{...provided.draggableProps}
											{...provided.dragHandleProps}
											style={getItemStyle(snapshot.isDragging, provided.draggableProps.style)}
										>
											{/* <ListItemIcon className={classes.icon}>
												<DragIndicatorIcon />
											</ListItemIcon> */}
											<ListItemText className={classes.body} primary={item.primary} secondary={item.secondary} />
											<ListItemSecondaryAction>{item.actions}</ListItemSecondaryAction>
										</ListItem>
									)}
								</Draggable>
							))}
							{provided.placeholder}
						</List>
					</RootRef>
				)}
			</Droppable>
		</DragDropContext>
	);
};

export default DragDropListComponent;
