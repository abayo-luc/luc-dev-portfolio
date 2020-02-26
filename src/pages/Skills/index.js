import React from 'react';
import { Spring } from 'react-spring/renderprops';
import './styles.scss';
const skills = [
	{
		name: 'React Native',
		progress: 80,
		key: 'sk-1'
	},
	{
		name: 'React',
		progress: 75,
		key: 'sk-2'
	},
	{
		name: 'JavaScript(ES6)',
		progress: 70,
		key: 'sk-3'
	},
	{
		name: 'NodeJs',
		progress: 87,
		key: 'sk-4'
	},
	{
		name: 'Ruby on Rails',
		progress: 60,
		key: 'sk-5'
	}
];
const SkillsPage = () => {
	return (
		<div className='skills-page page-container'>
			<Spring
				from={{ size: 0, height: 0 }}
				to={{ size: 60, height: 50 }}
				config={{ delay: 200 }}>
				{({ size, height }) => (
					<div
						className='col-4 experience'
						style={{ backgroundSize: `${size}%` }}>
						<div
							className='experience-counter'
							style={{ width: `${size}%`, height: `${height}%` }}>
							<h1 className='bg-title'>3</h1>
							<h3>Years of Professional Experience</h3>
						</div>
					</div>
				)}
			</Spring>
			<div className='col-5 skills'>
				{skills.map(item => (
					<Spring
						from={{ value: 0 }}
						to={{ value: item.progress }}
						key={item.key}
						config={{ delay: 200 }}>
						{({ value }) => (
							<div className='skill' key={item.key}>
								<p className='label'>{item.name}</p>
								<div className='progress-container'>
									<div className='progress' style={{ width: `${value}%` }} />
								</div>
							</div>
						)}
					</Spring>
				))}
			</div>
		</div>
	);
};

export default SkillsPage;
