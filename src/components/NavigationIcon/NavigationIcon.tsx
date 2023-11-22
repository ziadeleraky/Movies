import { Link } from 'react-router-dom';
import classes from './NavigationIcon.module.scss';

export default function NavigationIcon({text, to}: {text: string, to: string}) {
  return (
    <Link className={classes.icon} to={to}>{text}</Link>
  )
}
