import { getPhotos } from 'apiService/photos';
import { Button, Form, Grid, PhotosGalleryItem } from 'components';
import { useEffect, useState } from 'react';

export const Photos = () => {
  const [search, setSearch] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [array, setArray] = useState([]);
  const [page, setPage] = useState(1);

  const onSubmit = text => {
    setSearch(text);
  };

  useEffect(() => {
    if (!search) {
      return;
    }

    setIsLoading(true);

    getPhotos(search, page)
      .then(data => {
        setArray(prev => [...prev, ...data.photos]);
      })
      .catch(error => {
        console.log(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [search, array, page]);

  const loadMoreHandler = () => {
    setPage(prev => prev + 1);
  };

  return (
    <>
      <Form onSubmit={onSubmit} />
      {
        <Grid>
          {array.length > 0 &&
            array.map(item => <PhotosGalleryItem key={item.id} item={item} />)}
        </Grid>
      }
      {isLoading && <p>Loading...</p>}
      {array.length > 0 && <Button onClick={loadMoreHandler}>Load more</Button>}
    </>
  );
};
