import React, { useState } from 'react'
import { Menu, Segment } from 'semantic-ui-react'

const Navbar = () => {
    const [activeItem, setActiveItem] = useState('about');

    const handleItemClick = (e, { name }) => setActiveItem(name);

    return (
      <div>
          <Segment inverted>
        <Menu fixed pointing secondary inverted>
          <Menu.Item
            name='about'
            active={activeItem === 'about'}
            onClick={handleItemClick}
          />
          <Menu.Item
            name='portfolio'
            active={activeItem === 'portfolio'}
            onClick={handleItemClick}
          />
          <Menu.Item
            name='contact'
            active={activeItem === 'contact'}
            onClick={handleItemClick}
          />
          <Menu.Item
            name='resume'
            active={activeItem === 'resume'}
            onClick={handleItemClick}
          />
        </Menu>
        </Segment>
      </div>
    )
}

export default Navbar;