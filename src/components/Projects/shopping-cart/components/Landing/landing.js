import React from "react";
import "./landing.sass";


const Landing = props => {


    const formatSearch = () => {

        let search = document.querySelector("#search").value;

        const searchArr = search.split(" ");

        if (searchArr.length > 1) {
            let str = "";
            searchArr.forEach(item => {
                str += `+${item}`

            });

            search = str;
        } else {

            search = searchArr[0];
        }

        return search;
    }

    const handleSubmit = event => {

        event.preventDefault();
        // const search = formatSearch()
        let search = document.querySelector("#search").value;

        if (search !== "") {
            // props.history.push(`/projects/shopping-cart/search/${search}`)

            sessionStorage.setItem("item", search)
            props.history.push("/projects/shopping-cart/search/")
        }


    }


    return <div className="landing">
        <div className="overlay">

            <div className="content">
                <h1 className="intro"> Search the worlds biggest online store for your product</h1>
                <div classname="search">

                    <div className="search-wrapper">

                        <form onSubmit={event => handleSubmit(event)}>
                            <input type="text" placeholder="Search for product" id="search" />
                        </form>
                    </div>
                </div>
            </div>
        </div>


    </div>
}

export default Landing;