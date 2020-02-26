import React, {useState,  useEffect} from 'react';
import {useTransition, animated} from 'react-spring'
import './App.scss';
import HomePage from './pages/Home';
import AboutPage from './pages/About';
import SkillsPage from './pages/Skills';
import ContactPage from './pages/Contact';
import WorkPage from './pages/Works';
import NotFoundPage from './pages/404';
import HeaderComponent from './components/Header'
import FooterComponent from './components/Footer';
const pages = {
	'#home': ({style}) => <animated.div style={{...style}} className="page"><HomePage/></animated.div>,
	'#about': ({style}) => <animated.div style={{...style}} className="page"><AboutPage/></animated.div>,
	'#skills': ({style}) => <animated.div style={{...style}} className="page"><SkillsPage/></animated.div>,
	'#contact': ({style}) => <animated.div style={{...style}} className="page"><ContactPage/></animated.div>,
	'#samples': ({style}) => <animated.div style={{...style}} className="page"><WorkPage/></animated.div>,
	'#404': ({style}) => <animated.div style={{...style}} className="page"><NotFoundPage/></animated.div>
}
function App() {
	const [page, setPage] = useState(window.location.hash)
	const transitions = useTransition(page, p => p, {
		from: { opacity: 0, transform: 'translate3d(0,100%,0)' },
		enter: { opacity: 1, transform: 'translate3d(0,0%,0)' },
		leave: { opacity: 0, transform: 'translate3d(0,0%,0)' },
	})
  const onUrlHashChange = () => {
	 setPage(window.location.hash)
  }

  useEffect(() => {
	window.addEventListener("hashchange", onUrlHashChange );
	return () => {
		window.removeEventListener('hashchange', onUrlHashChange)
	}
  }, [])
	return (
		<div className='app'>
			<div className="content">
				<div className="header-nav">
					<HeaderComponent/>
				</div>
				{transitions.map(({ item, props, key }) => {
					const Page = pages[item] || pages['#404']
					return <Page key={key} style={props}/>
				})}
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
