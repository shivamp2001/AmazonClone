import React from 'react'
import { useSelector ,useDispatch} from 'react-redux'
import Header from './Header';
import "../style/searchproduct.css"
import SearchSupprter from './SearchSupprter';
import { useNavigate} from 'react-router-dom'
import axios from 'axios'
import {searchedproductdata} from "./Redux/ProductSlice"

const SearchProducts = () => {
    const searcheddata=useSelector((state)=>state.prductredux.searchedproducts);
    //  [start] search function part
    const query=useSelector((state)=>state.prductredux)   
    let filterqueryproduct=query.filterquery

    const Navigate=useNavigate()
    const dispatch=useDispatch()

    const FetchFilterdProduct=async()=>{
      const res=await axios.get(`http://localhost:5000/filterproduct?productcategory=${filterqueryproduct}`).catch((err)=>console.log(err))
          const Data=await res.data
          //   console.log(Data);
          return Data
         }

    const FilterproductFunction=()=>{
      FetchFilterdProduct()
      .then((data)=>dispatch(searchedproductdata(data)))
      .then(()=>Navigate("/searchproducts"))
  }
  // [end] serach function part end
    // console.log(searcheddata);
  return (
    <div>
        <Header fun={FilterproductFunction}/>
      <div className="searchpro-container">
        <div className="search-box">
            {searcheddata && searcheddata.map((product)=>{
                //   console.log(product.productprice);
                return(

                    <SearchSupprter product={product} />
                )
            })

            }
        </div>

      </div>
    </div>
  )
}

export default SearchProducts
