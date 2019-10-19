import NavLink from 'umi/navlink';
import withBreadcrumbs from 'react-router-breadcrumbs-hoc';

// 更多配置请移步 https://github.com/icd2k3/react-router-breadcrumbs-hoc
const routes = [
  { path: '/', breadcrumb: '首页' },
  { path: '/transition', breadcrumb: 'transition Page' },
];

export default withBreadcrumbs(routes)(({ breadcrumbs }) => {
  //   for (let bc of breadcrumbs) {
  //     console.log(bc.breadcrumb.props.children);
  //   }
  return (
    <div>
      {breadcrumbs.map((breadcrumb, index) => (
        <span key={breadcrumb.key}>
          <NavLink to={breadcrumb.match.url}>{breadcrumb.breadcrumb.props.children}</NavLink>
          {index < breadcrumbs.length - 1 && <i> / </i>}
        </span>
      ))}
    </div>
  );
});
