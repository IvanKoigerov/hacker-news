import React, {useEffect, useState} from 'react';
import NewsList from '../components/NewsPage/NewsList';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import MainWrapper from '../components/MainWrapper';
import {newsLocalApi} from '../services/NewsService';

const NewsPage = () => {
    const [load, setLoad] = useState(false);

    const {data: newsArr, isLoading, refetch, isFetching} = newsLocalApi.useFetchAllNewsQuery(1);
    const handleLoad = () => {
        refetch();
        setLoad(true);
    };

    useEffect(() => {
        setLoad(false);
    }, [isFetching]);

    return (
        <>
            <Header refetch={handleLoad}/>
            <MainWrapper>
                <NewsList newsArr={newsArr!} isLoading={isLoading || (isFetching && load)}/>
            </MainWrapper>
            <Footer/>
        </>
    );
};

export default NewsPage;
