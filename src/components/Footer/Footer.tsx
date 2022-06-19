import classes from './Footer.module.css'

import github from './github.svg';
import vk from './vk.svg';
import tg from './tg.svg';

const Footer: React.FC = () => {
   return (
      <footer className={classes.footer}>
         <ul className={classes.footerList}>
            <li className={classes.footerItem}>
               <a href="https://vk.com/vkoygerov" className={classes.footerLink}>
                  <img src={vk} alt="" />
               </a>
            </li>

            <li className={classes.footerItem}>
               <a href="https://t.me/an1meboy" className={classes.footerLink}>
                  <img src={tg} alt="" />
               </a>
            </li>

            <li className={classes.footerItem}>
               <a href="https://github.com/IvanKoigerov" className={classes.footerLink}>
                  <img src={github} alt="" />
               </a>
            </li>
         </ul>

         <a href="https://github.com/HackerNews/API" className="link">
            API
         </a>

         <p className={classes.footerCorp}>
            Copyright © 2022 corp.
         </p>
      </footer >
   )
}

export default Footer;
