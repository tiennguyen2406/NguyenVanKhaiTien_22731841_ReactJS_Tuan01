import { useState } from 'react';
import Counter from './components/Counter';
import TodoList from './components/TodoList';
import ThemeToggle from './components/ThemeToggle';
import ShoppingCart from './components/ShoppingCart';
import Auth from './components/Auth';
import UserList from './components/UserList';
import AdvancedCounter from './components/AdvancedCounter';
import BMICalculator from './components/BMICalculator';
import EventManager from './components/EventManager';
import './App.css';

function App() {
  const [activeComponent, setActiveComponent] = useState(null);

  const renderActiveComponent = () => {
    switch (activeComponent) {
      case 'counter':
        return <Counter />;
      case 'todo':
        return <TodoList />;
      case 'theme':
        return <ThemeToggle />;
      case 'cart':
        return <ShoppingCart />;
      case 'auth':
        return <Auth />;
      case 'users':
        return <UserList />;
      case 'advanced-counter':
        return <AdvancedCounter />;
      case 'bmi':
        return <BMICalculator />;
      case 'events':
        return <EventManager />;
      default:
        return <HomePage features={features} onFeatureClick={setActiveComponent} />;
    }
  };

  const features = [
    {
      id: 'counter',
      title: 'Counter App',
      description: 'Simple counter with increment and decrement buttons',
    },
    {
      id: 'todo',
      title: 'To-do List',
      description: 'Manage your tasks with add, toggle, and remove functionality',
    },
    {
      id: 'theme',
      title: 'Toggle Theme',
      description: 'Switch between light and dark mode',
    },
    {
      id: 'cart',
      title: 'Shopping Cart',
      description: 'Add, remove, and update items in your cart',
    },
    {
      id: 'auth',
      title: 'User Authentication',
      description: 'Login and manage user information',
    },
    {
      id: 'users',
      title: 'User List',
      description: 'Fetch and display users from API',
      component: UserList
    },
    {
      id: 'advanced-counter',
      title: 'Advanced Counter',
      description: 'Counter with reset and custom increment',
      component: AdvancedCounter
    },
    {
      id: 'bmi',
      title: 'BMI Calculator',
      description: 'Calculate BMI with height and weight',
      component: BMICalculator
    },
    {
      id: 'events',
      title: 'Event Manager',
      description: 'Manage events with CRUD operations',
      component: EventManager
    }
  ];

  const handleNavClick = (id) => (e) => {
    e.preventDefault();
    setActiveComponent(id);
  };

  return (
    <div className="app">
      <header className="header">
        <h1>Redux Features</h1>
        <nav className="nav">
          <a 
            href="#" 
            className={`nav-link ${!activeComponent ? 'active' : ''}`}
            onClick={handleNavClick(null)}
          >
            Home
          </a>
          {features.map(feature => (
            <a
              key={feature.id}
              href="#"
              className={`nav-link ${activeComponent === feature.id ? 'active' : ''}`}
              onClick={handleNavClick(feature.id)}
            >
              {feature.title}
            </a>
          ))}
          <ThemeToggle />
        </nav>
      </header>

      <main className="main-content">
        {renderActiveComponent()}
      </main>
    </div>
  );
}

// HomePage component
const HomePage = ({ features, onFeatureClick }) => {
  return (
    <div className="home-page">
      <h1>Redux Features App</h1>
      <p>A demonstration of various Redux features using Redux Toolkit and createSlice</p>

      <div className="feature-grid">
        {features.map((feature) => (
          <div
            key={feature.id}
            className="feature-card"
            onClick={() => onFeatureClick(feature.id)}
          >
            <h2>{feature.title}</h2>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;