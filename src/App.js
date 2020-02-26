import React from 'react';
import './App.scss';
import HomePage from './pages/Home';
import HeaderComponent from './components/Header'
import FooterComponent from './components/Footer';
function App() {
	return (
		<div className='app'>
			<div className="content">
				<div className="header-nav">
					<HeaderComponent/>
				</div>
				<HomePage />
				<div className="footer">
					<div className="copy-right">
						<p>@Luc 2020</p>
					</div>
					<FooterComponent/>
				</div>
			</div>
		</div>
	);
}

export default App;
