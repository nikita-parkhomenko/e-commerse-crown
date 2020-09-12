import React from 'react'

import './Shoppage.scss';

import { collections } from '../../data/data';
import { CollectionPreview } from '../../components/CollectionPreview/CollectionPreview';

export class Shoppage extends React.Component {
  state = {
    collections,
  }

  render() {
    const { collections } = this.state;

    return (
      <div className="collections">
        {collections.map(({ id, ...otherProps}) => (
          <CollectionPreview key={id} {...otherProps} />
        ))}
      </div>
    )
  }
};
