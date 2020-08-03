import React from 'react';
import { Input, Menu } from 'semantic-ui-react';


const Filter = ({setFilter, filterBy, searchQuery, setSearchQuery })=>{
    
    return (<Menu secondary>
        <Menu.Item
            name='all'
            active={filterBy === 'all'}
            onClick={setFilter.bind(this, 'all')}
        >All</Menu.Item>
        {/* <Menu.Item
            name='popular'
            active={filterBy === 'popular'}
            onClick={setFilter.bind(this, 'popular')}
        >Popular</Menu.Item> */}
        <Menu.Item
            name='price_high'
            active={filterBy === 'price_high'}
            onClick={setFilter.bind(this, 'price_high')}
        >Price High</Menu.Item>
        <Menu.Item
            name='price_low'
            active={filterBy === 'price_low'}
            onClick={setFilter.bind(this, 'price_low')}
        >Price Low</Menu.Item>
        <Menu.Item
            name='author'
            active={filterBy === 'author'}
            onClick={setFilter.bind(this, 'author')}
        >Author</Menu.Item>
        <Menu.Menu position='right'>
            <Menu.Item>
                <Input icon='search' onChange ={e=>setSearchQuery(e.target.value)} value={searchQuery} placeholder='Search...' />
            </Menu.Item>
            
        </Menu.Menu>
    </Menu>)
}




export default Filter;