import { NavLink } from 'umi';
import styles from './index.less';

export default function Layout(props: any) {
  if (
    location.pathname === '/login' ||
    location.pathname === '/city' ||
    location.pathname.includes('detail')
  ) {
    return <div>{props.children}</div>;
  }

  return (
    <div className={styles.navs}>
      {/* 嵌套路由，做插槽 */}
      <div>{props.children}</div>

      <ul className={styles.tabbar}>
        {['films', 'cinemas', 'mine'].map((item, index) => {
          return (
            <li key={index}>
              <NavLink to={`/${item}`} activeClassName={styles.active}>
                {item}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
