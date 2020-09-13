import React from 'react'

import './ShopPage.scss';

import { collections } from '../../data/data';
import { CollectionPreview } from '../../components/CollectionPreview/CollectionPreview';

export class ShopPage extends React.Component {
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
