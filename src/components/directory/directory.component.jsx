import React from 'react';
import data from '../../data/data.json';
import MenuItem from '../menu-item/menu-item.component';
import './directory.styles.scss';




class Directory extends React.Component {
    constructor() {
        super();

        this.state= {
            sections: data
        }
    }
    render() {
        return (
            <div className='directory-menu'>
                {
                this.state.sections.map(({ id, ...otherSectionProps }) => (
                    <MenuItem key={id} {...otherSectionProps} />
                ))}
            </div>
        );
    }
}

export default Directory;