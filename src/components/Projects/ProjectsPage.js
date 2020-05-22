import React from 'react';
import MainProjects from './MainProjects';
import OtherProjects from './OtherProjects';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import { Link } from 'react-scroll';

const useStyles = makeStyles(theme => ({
  margin: {
    margin: theme.spacing(1),
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}));

const ProjectsPage = () => {
  const classes = useStyles();

  return (
    <div>
      <header className='header-container'>
        <div className='title-container'>
          <h1>I'm Jeff Valdez</h1>
          <h3>A Full Stack Web Developer</h3>
          <div className='arrow-button'>
            <Link to='main-content' smooth duration={800}>
              <IconButton
                color='primary'
                style={{ fontSize: 50, color: 'white' }}
              >
                <ArrowDownwardIcon fontSize='inherit' />
              </IconButton>
            </Link>
          </div>
        </div>
      </header>
      <div className='main-content' id='main-content'>
        <MainProjects />
        <OtherProjects />
      </div>
    </div>
  );
};

export default ProjectsPage;
