import styled from 'styled-components'
import Leftside from './Leftside'
import Main from './Main'
import Rightside from './Rightside'



const Home = (props) => {
	return (
		<Container>
			<Section>
				<h5><a>Hiring in a Hurry?</a></h5>
				<p>Find Talented Pros in Record Time with Upwork and Keep Bussiness Moving</p>
			</Section>
			<Layout>
				<Leftside />
				<Main />
				<Rightside />
			</Layout>
		</Container>
		);
}


export default Home;



const Container = styled.div`
	padding-top: 52px;
	max-width: 100%;

`

const Content = styled.div`
	max-width: 1128px;
	margin-left: auto;
	margin-right: auto;
`

const Section = styled.section`
	min-height: 50px;
	padding: 16px 0;
	box-sizing: content-box;
	text-align: center;
	text-decoration: underline;
	display: flex;
	justify-content: center;
	h5{
		color: #0a66c2;
		font-size: 14px;
		a{
			font-weight: 700;
		}
	}

	p{
		font-size: 14px;
		color: #434649;
		font-weight: 600;
	}

	@media (max-width: 768px) {
		flex-direction: column;
		padding: 0 5px;
	}
`

const Layout = styled.div`
	display: grid;
	grid-template-areas: "Leftside Main Rightside";
	grid-template-columns: minmax(0, 5in) minmax(300px, 12in) minmax(0, 7in);
	column-gap: 25px;
	row-gap: 25px;
	grid-template-row: auto;
	margin: 25px 0;
	@media (max-width: 768px) {
		display: flex;
		flex-direction: column;
		padding: 0 5px;
	}
`