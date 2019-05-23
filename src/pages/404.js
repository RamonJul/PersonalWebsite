import React ,{Component} from 'react';
import Container from './../components/container/index';
import Main from '../components/mainBar/index';

class Error extends Component{

     render(){

        return(
            <Main>
                <Container>
                
                <p> You seem to be lost. This is not a functioning link please use the navigation bar to redirect back to the site</p>
                </Container>
              
            </Main>

        )
     }   

};

export default Error;