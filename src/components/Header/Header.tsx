import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Input from '@mui/material/Input';
import classes from './Header.module.sass';


const Header = () => {
  return (
    <Box className={classes.header}>
      <Input className={classes.input} fullWidth={true} placeholder='Введите поисковой запрос'/>
      <Button className={classes.button} variant='contained'>ИСКАТЬ</Button>
    </Box>
  )
}

export default Header