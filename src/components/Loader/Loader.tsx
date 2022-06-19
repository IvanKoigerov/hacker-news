import classes from './Loader.module.css'

const Loader: React.FC = () => {
   return (
      <div className={classes.boxLoader}>
         <div className={classes.loader}></div>
      </div>
   )
}

export default Loader