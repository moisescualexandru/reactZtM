import './categories-menu.styles.scss'

import {CategoryItem} from '../category-item/category-item.component'

export const CategoryMenu = ({categories}) => {
    return (
        <div className='categories-container'>
            {categories.map((category) => (
                <CategoryItem key={category.id} category={category}></CategoryItem>
            ))}
        </div>
    )
}
