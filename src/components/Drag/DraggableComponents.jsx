// import React, { useState, useEffect } from 'react';
// import {
//   DndContext,
//   DragOverlay,
//   closestCorners,
//   KeyboardSensor,
//   PointerSensor,
//   useSensor,
//   useSensors,
// } from '@dnd-kit/core';
// import {
//   arrayMove,
//   SortableContext,
//   verticalListSortingStrategy,
// } from '@dnd-kit/sortable';
// import { useSortable } from '@dnd-kit/sortable';
// import { CSS } from '@dnd-kit/utilities';

// const initialColumns = {
//   available: {
//     id: 'available',
//     title: 'Available Components',
//     items: [
//       { id: 'button-1', content: 'Primary Button' },
//       { id: 'input-1', content: 'Text Input' },
//       { id: 'card-1', content: 'Basic Card' },
//     ],
//   },
//   selected: {
//     id: 'selected',
//     title: 'Selected Components',
//     items: [],
//   },
// };

// const SortableItem = ({ id, content }) => {
//   const {
//     attributes,
//     listeners,
//     setNodeRef,
//     transform,
//     transition,
//   } = useSortable({ id });

//   const style = {
//     transform: CSS.Transform.toString(transform),
//     transition,
//   };

//   return (
//     <div
//       ref={setNodeRef}
//       style={style}
//       {...attributes}
//       {...listeners}
//       className="p-4 mb-2 bg-white rounded shadow cursor-move"
//     >
//       {content}
//     </div>
//   );
// };

// const DroppableContainer = ({ id, items, title }) => {
//   return (
//     <div className="flex-1">
//       <h2 className="text-xl font-bold mb-4">{title}</h2>
//       <div className="p-4 rounded-lg min-h-[200px] bg-gray-50">
//         <SortableContext items={items} strategy={verticalListSortingStrategy}>
//           {items.map((item) => (
//             <SortableItem key={item.id} id={item.id} content={item.content} />
//           ))}
//         </SortableContext>
//       </div>
//     </div>
//   );
// };

// const DraggableMultipleColumns = () => {
//   const [columns, setColumns] = useState(null);
//   const [isClient, setIsClient] = useState(false);

//   const sensors = useSensors(
//     useSensor(PointerSensor),
//     useSensor(KeyboardSensor)
//   );

//   useEffect(() => {
//     setColumns(initialColumns);
//     setIsClient(true);
//   }, []);

//   const findContainer = (id) => {
//     if (!columns) return null;
    
//     const columnEntries = Object.entries(columns);
//     for (const [columnId, column] of columnEntries) {
//       const foundItem = column.items.find((item) => item.id === id);
//       if (foundItem) return columnId;
//     }
//     return null;
//   };

//   const handleDragEnd = (event) => {
//     const { active, over } = event;
    
//     if (!over) return;

//     const activeId = active.id;
//     const overId = over.id;
    
//     const sourceContainerId = findContainer(activeId);
//     const destContainerId = findContainer(overId);
    
//     if (!sourceContainerId || !destContainerId) return;

//     const sourceColumn = columns[sourceContainerId];
//     const destColumn = columns[destContainerId];

//     const sourceItems = [...sourceColumn.items];
//     const destItems = [...destColumn.items];

//     const sourceIndex = sourceItems.findIndex((item) => item.id === activeId);
//     const destIndex = destItems.findIndex((item) => item.id === overId);

//     if (sourceContainerId === destContainerId) {
//       const newItems = arrayMove(sourceItems, sourceIndex, destIndex);
//       setColumns({
//         ...columns,
//         [sourceContainerId]: {
//           ...sourceColumn,
//           items: newItems,
//         },
//       });
//     } else {
//       const [movedItem] = sourceItems.splice(sourceIndex, 1);
//       destItems.splice(destIndex, 0, movedItem);
//       setColumns({
//         ...columns,
//         [sourceContainerId]: {
//           ...sourceColumn,
//           items: sourceItems,
//         },
//         [destContainerId]: {
//           ...destColumn,
//           items: destItems,
//         },
//       });
//     }
//   };

//   if (!isClient) {
//     return <div>Loading...</div>;
//   }

//   if (!columns) {
//     return null;
//   }

//   return (
//     <DndContext
//       sensors={sensors}
//       collisionDetection={closestCorners}
//       onDragEnd={handleDragEnd}
//     >
//       <div className="p-4 flex gap-4">
//         {Object.entries(columns).map(([columnId, column]) => (
//           <DroppableContainer
//             key={columnId}
//             id={columnId}
//             items={column.items}
//             title={column.title}
//           />
//         ))}
//       </div>
//     </DndContext>
//   );
// };

// export default DraggableMultipleColumns;
import React, { useState, useEffect } from 'react';
import {
  DndContext,
  closestCorners,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
} from '@dnd-kit/core';
import {
  arrayMove,
  SortableContext,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

const initialColumns = {
  available: {
    id: 'available',
    title: 'Available Components',
    items: [
      { id: 'button-1', content: 'Primary Button' },
      { id: 'input-1', content: 'Text Input' },
      { id: 'card-1', content: 'Basic Card' },
    ],
  },
  selected: {
    id: 'selected',
    title: 'Selected Components',
    items: [],
  },
};

const SortableItem = ({ id, content }) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
  } = useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className="p-4 mb-2 bg-white rounded shadow cursor-move"
    >
      {content}
    </div>
  );
};

const DroppableContainer = ({
  // id,
  items,
  title,
}) => {
  return (
    <div className="flex-1">
      <h2 className="text-xl font-bold mb-4">{title}</h2>
      <div className="p-4 rounded-lg min-h-[200px] bg-gray-50">
        <SortableContext items={items} strategy={verticalListSortingStrategy}>
          {items.map((item) => (
            <SortableItem key={item.id} id={item.id} content={item.content} />
          ))}
        </SortableContext>
      </div>
    </div>
  );
};

const DraggableMultipleColumns = () => {
  const [columns, setColumns] = useState(null);
  const [isClient, setIsClient] = useState(false);

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor)
  );

  useEffect(() => {
    setColumns(initialColumns);
    setIsClient(true);
  }, []);

  const findContainer = (id) => {
    if (!columns) return null;

    for (const [columnId, column] of Object.entries(columns)) {
      if (column.items.find((item) => item.id === id)) {
        return columnId;
      }
    }
    return null;
  };

  const handleDragEnd = (event) => {
    const { active, over } = event;

    if (!over) return;

    const activeId = active.id;
    const overId = over.id;

    const sourceContainerId = findContainer(activeId);
    const destContainerId = findContainer(overId);

    if (!sourceContainerId || !destContainerId) return;

    const sourceColumn = columns[sourceContainerId];
    const destColumn = columns[destContainerId];

    const sourceItems = [...sourceColumn.items];
    const destItems = [...destColumn.items];

    const sourceIndex = sourceItems.findIndex(
      (item) => item.id === activeId
    );
    const destIndex = destItems.findIndex(
      (item) => item.id === overId
    );

    if (sourceContainerId === destContainerId) {
      const newItems = arrayMove(sourceItems, sourceIndex, destIndex);
      setColumns({
        ...columns,
        [sourceContainerId]: {
          ...sourceColumn,
          items: newItems,
        },
      });
    } else {
      const [movedItem] = sourceItems.splice(sourceIndex, 1);
      destItems.splice(destIndex, 0, movedItem);
      setColumns({
        ...columns,
        [sourceContainerId]: {
          ...sourceColumn,
          items: sourceItems,
        },
        [destContainerId]: {
          ...destColumn,
          items: destItems,
        },
      });
    }
  };

  if (!isClient) {
    return <div>Loading...</div>;
  }

  if (!columns) {
    return null;
  }

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCorners}
      onDragEnd={handleDragEnd}
    >
      <div className="p-4 flex gap-4">
        {Object.entries(columns).map(([columnId, column]) => (
          <DroppableContainer
            key={columnId}
            id={columnId}
            items={column.items}
            title={column.title}
          />
        ))}
      </div>
    </DndContext>
  );
};

export default DraggableMultipleColumns;
