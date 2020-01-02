import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Name from './name';


class Landing extends Component {
    render() {
        return(
            <div className="grid">
                <Grid className='landing-grid'>
                    <Cell col={12}>
                        <img 
                            src={require('../assets/face.png')}
                            alt="portrait"
                            className="avatar-img"
                        />
                        <Name />

                        <div className="banner-text">
                            <h1>Developer. Designer. Dancer. Dreamer.</h1>

                            <hr/>
                                <p>Developer. Designer. Dancer. Dreamer.</p>


                            <div className="social-links">
                                {/* LinkedIn */}
                                <a href="https://www.linkedin.com/in/ritikbatra" target="_blank" rel="noopener noreferrer">
                                    <i className="fa fa-linkedin-square" aria-hidden="true"></i>
                                </a>


                                {/* GitHub */}
                                <a href="https://github.com/rbatra2000" target="_blank" rel="noopener noreferrer">
                                    <i className="fa fa-github-square" aria-hidden="true"></i>
                                </a>
                            </div>
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Landing;