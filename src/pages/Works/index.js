import React, { useState, useEffect } from 'react';
import './styles.scss';
import data from './work.json';
import arrayTransform from '../../utils/arrayTransform';
const works = arrayTransform(data.works);
const WorkPage = () => {
	const [i, set] = useState(0);
	const _handleChangePage = value => {
		set(value);
	};
	const _handleScroll = ({ keyCode }) => {
		if (keyCode === 37 && i > 0) {
			set(state => state - 1);
		}

		if (keyCode === 39 && i < works.length) {
			set(state => state + 1);
		}
	};
	useEffect(() => {
		window.addEventListener('keydown', _handleScroll);
		return () => window.removeEventListener('keydown', _handleScroll);
	});
	return (
		<div className='page-container work-page'>
			<div className='work-history'>
				{works[i].map((item, index) => (
					<div className='sample-work col-12' key={Number(index)}>
						<div className='col-4'>
							<h1 className='work-title'>{item.productName}</h1>
							<h2 className='caption work-title'>{item.company}</h2>
						</div>
						<div className='col-6'>
							<p className='job-description'>{item.description}</p>
							<ul className='accomplishments'>
								{item.accomplishments?.map((accomplishment, index) => (
									<li key={`aco-${Number(index)}`}>{accomplishment}</li>
								))}
							</ul>
						</div>
					</div>
				))}
			</div>
			{works.length > 1 && (
				<div className='dot-buttons'>
					{[...Array(works.length).keys()].map(index => (
						<button
							className='btn-dot'
							key={`dot-${index}`}
							onClick={() => _handleChangePage(index)}>
							<span className={index === i ? 'active' : ''}></span>
						</button>
					))}
				</div>
			)}
		</div>
	);
};

export default WorkPage;
