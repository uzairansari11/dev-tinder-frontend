import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axiosInstance, { endPoints } from '../../api/axios';
import { addFeed, feedSelector } from '../../redux/slices/feed-slice';
import { FullscreenLoader } from '../loading/loader';
import { UserCard } from './user-card';

export const Feed = () => {
  const dispatch = useDispatch();
  const feeds = useSelector(feedSelector);
  const getFeed = useCallback(async () => {
    try {
      const response = await axiosInstance.get(endPoints.user.feed, {
        params: {},
      });
      dispatch(addFeed(response.data));
    } catch (error) {
      console.error(error);
    }
  }, [dispatch]);
  useEffect(() => {
    getFeed();
  }, [getFeed]);
  if (feeds) {
    return (
      <div className="grid grid-rows grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-3 justify-center p-4">
        {feeds.map((user) => (
          <UserCard user={user} />
        ))}
      </div>
    );
  }
  return (
    <div>
      <FullscreenLoader />
    </div>
  );
};
