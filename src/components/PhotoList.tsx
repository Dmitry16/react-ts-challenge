import React from 'react'
import { useFetchPhotos } from '../hooks/useFetchPhotos'

interface PhotoListProps {
  albumId: number
}

export default function PhotoList({ albumId } : PhotoListProps) {
  const { photos } = useFetchPhotos(albumId);
  return (
    <ul className='photos'>
      {photos.map(photo => <li key={photo.id}><img src={photo.url} alt={photo.title} /></li>)}
    </ul>
  )
}
