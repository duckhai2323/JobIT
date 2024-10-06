import React from 'react';
import styles from './marketItem.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const MarketItem = ({ type, amount }) => {
	return (
		<div className={cx('item')}>
			<p className={cx('quantity')}>{amount}</p>
			<p className={cx('title')}>{type}</p>
		</div>
	)
}

export default MarketItem;
