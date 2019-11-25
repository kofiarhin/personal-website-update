import React, { Component } from 'react';
import _ from "lodash";


class Search extends Component {

    componentWillMount() {

        const dataSource = [
            {
                name: "brand new Samsung phone",
                price: 200
            },
            {
                name: 'brand new iphone 13',
                price: 200
            },
            {
                name: "Samsung galaxy x5 "
            }
        ]

        const query = sessionStorage.getItem("item").toLowerCase().trim();



        //search for item;
        let result = [];

        dataSource.forEach(data => {

            if (data.name.toLowerCase().includes(query)) {

                result.push(data);
            }
        });

        console.log(query, result)


    }

    formatSearch = () => {

        let search = this.props.match.params.item;

        //remove + from string
        const searchArr = search.split("+");


        //join items in array with space and form a string
        if (searchArr.length > 0) {
            search = searchArr.join(" ");

        }


        return search;

    }



    render() {

        return <div> Search </div>
    }
}

export default Search;