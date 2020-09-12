import React from 'react';

import './Directory.scss';

import { sections } from '../../data/data';
import { MenuItem } from '../MenuItem/MenuItem';

export class Directory extends React.Component {
  state = {
    sections,
  }

  render() {
    const { sections } = this.state;

    return (
      <div className="directory-menu">
        {sections.map(({ id, title, imageUrl, size }) => (
          <MenuItem 
            key={id} 
            title={title} 
            size={size}
            imageUrl={imageUrl} 
          />
        ))}
      </div>
    )
  }
}
