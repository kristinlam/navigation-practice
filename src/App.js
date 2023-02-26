import Link from './components/Link';
import Route from './components/Route';
import AccordionPage from './pages/AccordionPage';
import DropdownPage from './pages/DropdownPage';

const App = () => {
  return (
    <div>
      <div>
        <Link to="/accordion">Accordion</Link>
        <Link to="/dropdown">Dropdown</Link>
      </div>
      <div>
        <Route path="/accordion">
          <AccordionPage />
        </Route>
        <Route path="/dropdown">
          <DropdownPage />
        </Route>
      </div>
    </div>
  );
};

export default App;
