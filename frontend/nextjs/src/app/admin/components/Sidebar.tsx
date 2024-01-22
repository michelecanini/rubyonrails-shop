import React from 'react';

const Sidebar: React.FC = () => {
  return (
    <div className="sidebar-wrapper">
      <div className="sidebar-linklist-wrapper">
        <div className="link-list-wrapper">
          <ul className="link-list">
            <li>
              <h3>Menu</h3>
            </li>
            <li>
          <a className="list-item medium active left-icon" href="#">
            <span className="list-item-title-icon-wrapper">
              <svg className="icon icon-sm icon-primary" aria-hidden="true"><use href="/bootstrap-italia/dist/svg/sprites.svg#it-star-outline"></use></svg><span>Link lista 1 (attivo)</span>
            </span>
          </a>
        </li>
        <li>
          <a className="list-item medium left-icon" href="#">
            <span className="list-item-title-icon-wrapper">
              <svg className="icon icon-sm icon-primary" aria-hidden="true"><use href="/bootstrap-italia/dist/svg/sprites.svg#it-star-outline"></use></svg><span>Link lista 3</span>
            </span>
          </a>
        </li>
          </ul>
        </div>
      </div>
      <div className="sidebar-linklist-wrapper linklist-secondary"></div>
    </div>
  );
};

export default Sidebar;
