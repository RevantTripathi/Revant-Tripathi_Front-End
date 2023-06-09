import React, { useState, useEffect, memo } from 'react';
import PropTypes from 'prop-types';
import SingleListItem from './OptimizedSingleListComponent';


//Single List Item

// const WrappedSingleListItem = ({
//     index,
//     isSelected,
//     onClickHandler,
//     text,
// }) => {
//     return (
//         <li
//             style={{ backgroundColor: isSelected ? 'green' : 'red' }}
//             onClick={() => onClickHandler(index)}
//         >
//             {text}
//         </li>
//     );
// };

// WrappedSingleListItem.propTypes = {
//     index: PropTypes.number,
//     isSelected: PropTypes.bool,
//     onClickHandler: PropTypes.func.isRequired,
//     text: PropTypes.string.isRequired,
// };

// const SingleListItem = memo(WrappedSingleListItem);

// List Component
const WrappedListComponent = ({
    items,
}) => {
    const [selectedIndex, setSelectedIndex] = useState();

    useEffect(() => {
        setSelectedIndex(null);
    }, [items]);

    const handleClick = index => {
        setSelectedIndex(index);
    };

    return (
        <ul style={{ textAlign: 'left' }}>
            {
                items.map((item, index) => {
                    console.log(item.text)
                    console.log((index === selectedIndex) ? true : false)
                    return (
                        <SingleListItem
                            onClickHandler={(index) => handleClick(index)}
                            text={item.text}
                            index={index}
                            isSelected={(index === selectedIndex) ? true : false}
                            key={index}
                        />)
                })
            }
        </ul>
    )
};

WrappedListComponent.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            text: PropTypes.string.isRequired,
        })
    ),
};

WrappedListComponent.defaultProps = {
    items: [],
};

const List = memo(WrappedListComponent);

export default List;