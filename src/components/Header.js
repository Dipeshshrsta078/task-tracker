import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({ title, onAdd, showAdd }) => {
    
    return (
        <header className='header'>
            
            <img className='tasks'
            src ={process.env.PUBLIC_URL + "/clockifylogo.png"}
            width ="80" 
            alt="" />
            <h1>{title}</h1>
            <Button color={showAdd 
                ? 'red'
                : 'green'} 
            text={showAdd 
                ? 'X'
                :'Add'} 
            onClick={onAdd} />
            
        </header>
    )
}
Header.defaultProps = {
    title: 'Task Tracker',
}

Header.propTypes ={
    title: PropTypes.string.isRequired,
}

export default Header
