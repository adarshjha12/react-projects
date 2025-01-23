import {useSelector} from 'react-redux'
import {useNavigate, Link} from 'react-router-dom'
import {Container, LogoutBtn} from '../index'


function Header() {
  const authStatus = useSelector((state) => state.auth.status);
  const navigate = useNavigate();

  const navItems = [
    { name: 'Home', url: '/', active: true },
    { name: 'Login', url: '/login', active: !authStatus },
    { name: 'Sign up', url: '/signup', active: !authStatus },
    { name: 'All-posts', url: '/all-posts', active: authStatus },
    { name: 'Add-posts', url: '/add-posts', active: authStatus },
  ];

  const activeNavItems = navItems.filter((item) => item.active);

  return (
    <div className="text-white pt-4 mx-6">
      <Container>
        <nav className="flex justify-between">
          <div>
            <Link className="flex items-center text-xl font-bold" to="/">
              <span className="mr-2">
                <img src="/images/icon.svg" width={50} alt="BlogBase Logo" />
              </span>
              BlogBase.
              <b className="text-red-500">com</b>
            </Link>
          </div>
          <ul className="flex items-center">
            {activeNavItems.map((item) => (
              <li key={item.name}>
                <button
                  onClick={() => navigate(item.url)}
                  className="px-3 py-0 hover:text-white hover:bg-red-700 text-red-500 border rounded-full font-bold mr-2"
                >
                  {item.name}
                </button>
              </li>
            ))}
            {authStatus && (
              <li>
                <LogoutBtn />
              </li>
            )}
          </ul>
        </nav>
      </Container>
    </div>
  );
}

export default Header