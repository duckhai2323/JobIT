import React, { useState, useEffect } from 'react';
import AdminLayout from '../../components/layout/index';
import styles from './listCompany.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const ListCompany = () => {
  return (
		<div>
			<AdminLayout>
				<div style={{marginTop: '80px'}}>Danh sách công ty</div>
			</AdminLayout>
		</div>
  )
}

export default ListCompany;
