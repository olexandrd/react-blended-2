import { GridItem } from 'components';

export const PhotosGalleryItem = ({ item }) => {
  return item.src && <GridItem item={item} />;
};
