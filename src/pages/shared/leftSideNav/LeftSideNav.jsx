import { useEffect } from "react";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";


const LeftSideNav = () => {

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('categories.json')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])
    return (
        <div className="space-y-6">
            <h2 className="text-3xl">All categories</h2>
            {
                categories.map(category =>
                    <NavLink
                    className="block ml-4 text-xl font-semibold "
                        key={category.id}
                        to={`category/${category.id}`}
                        >{category.name}
                    </NavLink>)
            }
        </div>
    );
};

export default LeftSideNav;