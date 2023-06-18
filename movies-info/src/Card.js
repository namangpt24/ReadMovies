import React, { useEffect, useState } from "react";
import "./Card.css"
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'
import { Link } from "react-router-dom";
//for that effect of loading i have react loading skeleton
const Card=({movie})=>{
    const [isLoading,setStateLoading]= useState(true)


    useEffect(()=>{
        setTimeout(()=>{
            setStateLoading(false);
        },1500)
    },[])
    
    
    return(
        <>
            {
                isLoading?
                <div className="cards">
                    <SkeletonTheme color="#202020" highlightColor="#444">
                        <Skeleton height={300} duration={2}></Skeleton>
                    </SkeletonTheme>
                </div>
                
                :
                <Link to={`/movie/${movie.id}`} style={{textDecoration:"none", color:"white"}}>
                    <div className="cards">
                        <img className="cards__img" src={`https://image.tmdb.org/t/p/original/${movie?movie.poster_path:""}`}></img>
                        <div className="cards__overlay">
                            <div className="card__title">{movie?movie.original_title:""}</div>
                            <div className="card__runtime">
                                {movie?movie.release_date:""}
                                <span className="card__rating">
                                    {movie?movie.vote_average:""}
                                    <i className="fas fa-star"></i>{" "}
                                </span>
                            </div>
                            <div className="card__description">{movie?movie.overview.slice(0,118)+"...":""}</div>
                        </div>
                    </div>
                </Link>
                
            }
        </>
    )

}
export default Card;
