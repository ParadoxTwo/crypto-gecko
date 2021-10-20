import { render, screen } from '@testing-library/react';
import App from './App';
import InitialView from './components/InitialView';

//enzyme imports
import { shallow} from 'enzyme';
import Loading from './components/Loading';
import Coins from './components/Coins';


describe('App Test Cases', ()=>{
  it('renders App', () => {
    const wrapper = shallow(<App/>)
    expect(wrapper).toBeDefined();
  });
  it('Loads Views',()=>{
    const wrapper = shallow(<App/>)
    const initialView = wrapper.find(<InitialView/>)
    expect(initialView).toBeDefined()
    const loading  = wrapper.find(<Loading/>)
    expect(loading).toBeDefined()
    const coins  = wrapper.find(<Coins/>)
    expect(coins).toBeDefined()
  })

})

